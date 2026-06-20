import Link from "next/link";

import "@/style/frontOfficeStyle/layouts/_header.scss";

export default function Header() {
    return (
        <header className="header">
            <div className="main-container">
                <div className="container">
                    <div className="flex">
                        <nav className="nav">
                            <Link href="/" className="link">Accueil</Link>
                            <Link href="/profile" className="link">Profile</Link>
                            <Link href="#" className="link">À propos</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
