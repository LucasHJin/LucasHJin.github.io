'use client';
import { useEffect } from "react";
import { usePathname } from 'next/navigation'
import { FaGithub, FaLinkedin, FaInstagram,  } from "react-icons/fa"; // React icons
import { SiGmail } from "react-icons/si";
import "./styling/globals.css"; // Applies global css to everything
import "./styling/layout.css"
import Link from "next/link";

// add a middle underline appear (on selected)

export default function RootLayout({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    const links = document.querySelectorAll(".header .navs .link-page");

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
            <ul className="no-list">
              <li className="name link-page"><Link href="/">lucas jin</Link></li>
              <li className="navs">
                <Link href="/" className="nav link-page">about</Link>
                <Link href="/portfolio" className="nav link-page">portfolio</Link>
                <Link href="/zettelkasten" className="nav link-page">zettelkasten</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <nav>
            <ul className="no-list">
              <li><Link href="/">webring</Link></li>
              <li className="socials">
                <Link href="https://github.com/LucasHJin" target="_blank" rel="noopener noreferrer" className="nav">
                  <FaGithub />
                </Link>
                <Link href="https://www.linkedin.com/in/lucas--jin/" target="_blank" rel="noopener noreferrer" className="nav">
                  <FaLinkedin />
                </Link>
                <Link href="mailto:lucasjin.hh@gmail.com" target="_blank" rel="noopener noreferrer" className="nav">
                  <SiGmail />
                </Link>
                <Link href="https://www.instagram.com/completely_fraudulent/" target="_blank" rel="noopener noreferrer" className="nav">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </nav>
          <h6 className="copyright">Lucas Jin © 2025</h6>
        </footer>
      </body>
    </html>
  );
}
