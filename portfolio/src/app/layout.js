import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Applies global css to everything
import Link from "next/link";

// add a middle underline appear

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li><Link href="/">lucas jin</Link></li>
              <li><Link href="/">about</Link></li>
              <li><Link href="/projects">projects</Link></li>
              <li><Link href="/zettelkasten">zettelkasten</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
        <nav>
            <ul>
              <li><Link href="/">insta</Link></li>
              <li><Link href="/">email</Link></li>
              <li><Link href="/">linkedin</Link></li>
            </ul>
          </nav>
        </footer>
      </body>
    </html>
  );
}
