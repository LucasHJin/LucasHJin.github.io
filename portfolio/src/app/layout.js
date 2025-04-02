'use client';
import { useEffect } from "react";
import { usePathname } from 'next/navigation'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Applies global css to everything
import "./styling/layout.css"
import Link from "next/link";

// add a middle underline appear (on selected)

export default function RootLayout({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    console.log('a');
    const links = document.querySelectorAll(".link-major.nav a");

    links.forEach(link => link.classList.remove("current-page"));

    links.forEach(link => {
      if (window.location.pathname == link.getAttribute("href")) {
        link.classList.add("current-page");
      }
    });
  }, [pathname]);

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
          <h6 className="copyright">Lucas Jin © 2025</h6>
        </footer>
      </body>
    </html>
  );
}
