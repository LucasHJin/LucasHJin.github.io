import { WebringIcon } from "./icons/icons"
import { Github, Linkedin, Instagram, Mail, MoveRight, MoveLeft } from 'lucide-react';
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
        <nav>
            <ul className="no-list">
                <li className="webring">
                    <a href='https://cs.uwatering.com/#www.lucasjin.co?nav=prev' className="arrow">
                        <MoveLeft />
                    </a> {/* fill in actual site info*/}
                    <Link href='https://cs.uwatering.com/#www.lucasjin.co' target='_blank' className="wricon">
                        <WebringIcon />
                    </Link>
                    <a href='https://cs.uwatering.com/#www.lucasjin.co?nav=next' className="arrow">
                        <MoveRight />
                    </a>
                </li>
                <li className="socials">
                    <Link href="https://github.com/LucasHJin" target="_blank" rel="noopener noreferrer" className="nav">
                        <Github />
                    </Link>
                    <Link href="https://www.linkedin.com/in/lucas--jin/" target="_blank" rel="noopener noreferrer" className="nav">
                        <Linkedin />
                    </Link>
                    <Link href="mailto:lucasjin.hh@gmail.com" target="_blank" rel="noopener noreferrer" className="nav">
                        <Mail />
                    </Link>
                    <Link href="https://www.instagram.com/completely_fraudulent/" target="_blank" rel="noopener noreferrer" className="nav">
                        <Instagram />
                    </Link>
                </li>
            </ul>
        </nav>
        <h6 className="copyright">Lucas Jin © 2025</h6>
    </footer>
  );
}
