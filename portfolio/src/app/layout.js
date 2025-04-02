import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Applies global css to everything
import "./styling/layout.css"
import Link from "next/link";

// add a middle underline appear (on selected)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="header">
            <ul>
              <li className="name link-major"><Link href="/">lucas jin</Link></li>
              <div className="navs">
                <li className="nav link-major"><Link href="/">about</Link></li>
                <li className="nav link-major"><Link href="/projects">projects</Link></li>
                <li className="nav link-major"><Link href="/zettelkasten">zettelkasten</Link></li>
              </div>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
        <nav>
            <ul>
              <li><Link href="/">webring</Link></li>
              <div className="socials">
                <li><Link href="/" className="nav">insta</Link></li>
                <li><Link href="/" className="nav">email</Link></li>
                <li><Link href="/" className="nav">linkedin</Link></li>
              </div>
            </ul>
          </nav>
        </footer>
      </body>
    </html>
  );
}
