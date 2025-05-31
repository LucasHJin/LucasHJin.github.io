import { GithubIcon, LinkedinIcon, InstaIcon, EmailIcon, WebringIcon } from "./icons/icons"
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
        <nav>
            <ul className="no-list">
                <li className="webring">
                    <a href='https://cs.uwatering.com/www.lucasjin.biz?nav=prev' className="arrow">←</a> {/* fill in actual site info*/}
                    <Link href='https://cs.uwatering.com/www.lucasjin.biz' target='_blank' className="wricon">
                        <WebringIcon />
                    </Link>
                    <a href='https://cs.uwatering.com/www.lucasjin.biz?nav=next' className="arrow">→</a>
                </li>
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
