import fs from "fs";
import path from "path";
import Link from "next/link";

import "@/app/styling/blog.css"

// credit to martin sit (https://github.com/martin226/v2)

export default async function Blog() {
  // get all files from writing directory
  const postsDirectory = path.join(process.cwd(), "src/app/blog");
  const entries = fs.readdirSync(postsDirectory, { withFileTypes: true });

  // filter for directories
  const folderNames = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  // get meta data from mdx files
  const posts = await Promise.all(
    folderNames.map(async (folderName) => {
      const { meta } = await import(`../blog/${folderName}/page.mdx`);
      return { ...meta, slug: folderName }; // folder = slug (specific part of url that describes)
    })
  );

  // sort by date (use / instead of - for local time)
  posts.sort((first, second) => new Date(first.date) - new Date(second.date));
  return (
    <div className="blog">
      <h1 className="sr-only">My Blog</h1>
      <ul className="no-list">
        {posts.map(({ title, date, slug }) => (
          <li key={slug} className="post">
            <span>
              <Link href={`/blog/${slug}`} className="important">
                {title}
              </Link>
            </span>
            <time>
              {new Date(date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </time>
          </li>
        ))}
      </ul>
    </div>
  );
}
