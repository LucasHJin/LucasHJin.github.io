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


// make separate between tags vs full notes
async function getFilesRecursively(path = "") {
    const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/${encodeURIComponent(path)}`;
    try {
        const response = await axios.get(url, { headers });
        const contents = response.data;
        let files = [];
        for (const item of contents) {
            if (item.type === "file" && item.name.endsWith(".md")) {
                files.push({
                    name: item.name,
                    path: item.path,
                    download_url: item.download_url
                });
            } else if (item.type === "dir") {
                const subFiles = await getFilesRecursively(item.path); // recursively access all files
                files = files.concat(subFiles);
            }
        }
        return files;
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