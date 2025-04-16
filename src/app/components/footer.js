import { GithubIcon, LinkedinIcon, InstaIcon, EmailIcon } from "./icons/icons"
import Link from "next/link";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
        <nav>
            <ul className="no-list">
                <li className="webring">
                    <a href='https://cs.uwatering.com/www.lucasjin.biz?nav=prev' className="arrow">←</a> {/* fill in actual site info*/}
                    <a href='https://cs.uwatering.com/www.lucasjin.biz' target='_blank'>
                        <Image
                            src='https://cs.uwatering.com/icon.white.svg'
                            alt='CS Webring'
                            width={10}
                            height={10}
                        />
                    </a>
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
