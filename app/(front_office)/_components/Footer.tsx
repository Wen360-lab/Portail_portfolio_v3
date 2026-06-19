import "@/style/frontOfficeStyle/layouts/_footer.scss";

export default function Footer() {
    return (
        <footer>
            <div className="main-container">
                <div className="container">
                    <div className="footer-haut">
                        <a className="logo">
                            <span className="span">PORTAIL</span>Portfolio
                        </a>
                        <div className="reseaux">
                            <a href="#" title="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#" title="Discord"><i className="fa-brands fa-discord"></i></a>
                            <a href="#" title="GitHub"><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div className="footer-milieu">
                        <a href="#">Termes et politique de confidentialité</a>
                    </div>
                    <hr />
                    <div className="footer-bas">
                        <p>©2026 Ecole241. Tous droits réservés</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
