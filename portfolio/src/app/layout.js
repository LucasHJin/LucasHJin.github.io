'use client';
import { useEffect } from "react";
import { usePathname } from 'next/navigation'
import { FaGithub, FaLinkedin, FaInstagram,  } from "react-icons/fa"; // React icons
import { SiGmail } from "react-icons/si";
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
            <ul className="no-list">
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
                <li><Link href="https://github.com/LucasHJin" target="_blank" rel="noopener noreferrer" className="nav">
                  <FaGithub />
                </Link></li>
                <li><Link href="https://www.linkedin.com/in/lucas--jin/" target="_blank" rel="noopener noreferrer" className="nav">
                  <FaLinkedin />
                </Link></li>
                <li><Link href="mailto:lucasjin.hh@gmail.com" target="_blank" rel="noopener noreferrer" className="nav">
                  <SiGmail />
                </Link></li>
                <li><Link href="https://www.instagram.com/completely_fraudulent/" target="_blank" rel="noopener noreferrer" className="nav">
                  <FaInstagram />
                </Link></li>
              </div>
            </ul>
          </nav>
          <h6 className="copyright">Lucas Jin © 2025</h6>
        </footer>
      </body>
    </html>
  );
}
