'use client';
import { useEffect } from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";

export default function Header() {
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
    <header>
        <nav className="header">
            <ul className="no-list">
                <li className="name link-page garamond"><Link href="/">lucas jin</Link></li>
                <li className="navs">
                  <Link href="/" className="nav link-page">about</Link>
                  <Link href="/portfolio" className="nav link-page">portfolio</Link>
                  <Link href="/blog" className="nav link-page">blog</Link>
                </li>
            </ul>
        </nav>
    </header>
  );
}
