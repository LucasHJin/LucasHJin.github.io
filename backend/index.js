const express = require("express"); // lightweight framework for node (creates http server to listen for requests)
const axios = require("axios"); // library for http requests
const cors = require("cors"); // allows requests from different domains/origins
require("dotenv").config(); // environment variables

const app = express();
const PORT = process.env.PORT || 5001; // don't use 5000 (doesn't work, idk why)

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

const GITHUB_PAT = process.env.GITHUB_PAT;
const GITHUB_REPO = process.env.GITHUB_REPO;

const headers = {
    Authorization: `Bearer ${GITHUB_PAT}`,
    "User-Agent": "obsidian-vault-app"
};


async function extractLinksFromFile(downloadUrl) {
    const response = await axios.get(downloadUrl);
    const content = response.data;

    const linkRegex = /\[\[([^\]]+)\]\]/g;
    let match;
    const links = [];

    while ((match = linkRegex.exec(content)) !== null) {
        const link = match[1];
        if (
            !link.toLowerCase().includes("screenshot") &&
            !link.toLowerCase().includes("screenshots")
        ) {
            links.push(link);
        }
    }

    return links;
}

async function getFilesRecursively(path = "") {
    const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/${encodeURIComponent(path)}`;
    try {
        const response = await axios.get(url, { headers });
        const contents = response.data;

        let result = {
            tags: [],
            notes: []
        };

        for (const item of contents) {
            if (item.type === "file" && item.name.endsWith(".md")) {
                const fileData = {
                    name: item.name,
                    path: item.path,
                    download_url: item.download_url,
                    links: await extractLinksFromFile(item.download_url)
                };

                if (item.path.includes("3 - Tags")) {
                    result.tags.push(fileData);
                } else if (item.path.includes("6 - Full Notes")) {
                    result.notes.push(fileData);
                }

            } else if (item.type === "dir") {
                const subFiles = await getFilesRecursively(item.path);
                result.tags = result.tags.concat(subFiles.tags);
                result.notes = result.notes.concat(subFiles.notes);
            }
        }

        return result;
    } catch (err) {
        console.error('GitHub API request failed:', err.response?.status, err.response?.data || err.message);
        throw err;
    }
}

app.get("/api/notes", async (req, res) => {
    try {
        console.log("Received request for /api/notes");
        const files = await getFilesRecursively();
        res.json(files);
    } catch (err) {
        console.error('Error inside /api/notes route:', err.response?.status, err.response?.data || err.message);
        res.status(500).json({ error: "Failed to fetch notes" });
    }
});

app.listen(PORT, async () => {
    console.log(`Server running at http://localhost:${PORT}`);
    // try {
    //     const files = await getFilesRecursively();
    //     console.log('Fetched files from GitHub:', files);
    // } catch (err) {
    //     console.error('Error fetching files on server start:', err.message);
    // }
});