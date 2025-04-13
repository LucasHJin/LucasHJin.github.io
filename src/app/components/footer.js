import { FaGithub, FaLinkedin, FaInstagram,  } from "react-icons/fa"; // React icons
import { SiGmail } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
  return (
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
  );
}
