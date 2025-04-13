import { GithubIcon, LinkedinIcon, InstaIcon, EmailIcon } from "./icons/icons"
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
        <nav>
            <ul className="no-list">
                <li><Link href="/">webring</Link></li>
                <li className="socials">
                    <Link href="https://github.com/LucasHJin" target="_blank" rel="noopener noreferrer" className="nav">
                        <GithubIcon />
                    </Link>
                    <Link href="https://www.linkedin.com/in/lucas--jin/" target="_blank" rel="noopener noreferrer" className="nav">
                        <LinkedinIcon />
                    </Link>
                    <Link href="mailto:lucasjin.hh@gmail.com" target="_blank" rel="noopener noreferrer" className="nav">
                        <EmailIcon />
                    </Link>
                    <Link href="https://www.instagram.com/completely_fraudulent/" target="_blank" rel="noopener noreferrer" className="nav">
                        <InstaIcon />
                    </Link>
                </li>
            </ul>
        </nav>
        <h6 className="copyright">Lucas Jin © 2025</h6>
    </footer>
  );
}
