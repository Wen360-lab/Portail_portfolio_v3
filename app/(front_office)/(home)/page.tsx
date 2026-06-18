import Link from "next/link";

import "@/style/frontOfficeStyle/pages/home/_hero.scss";

export default function HomePage(){

    return (

        <section className="hero-section">
            <div className="main-container">
                <div className="container">
                    <div className="content">
                        <div className="flex">
                            <h1 className="hero-title">Bienvenue sur le portail des<br/>portfolios des développeurs<br/>de l'École 241</h1>
                            <p className="hero-subtitle">Cette plateforme regroupe l'ensemble des développeurs de la<br/>promotion 14 de l'École 241. Chaque profil possède des<br/>aptitudes et compétences diverses.</p>
                            <Link href="" className="btn-explore">Explorez les portfolios <i className="fa-solid fa-arrow-right-long"></i></Link>
                        </div>
                    </div>               
                </div>          
            </div>
        
            <div className="stats">
                <div className="main-container">
                    <div className="container">
                        <div className="stats-grid">
                            <div className="stats-item">
                                <a href="#projets" className="stats-link">
                                    <h2 className="stats-num">10+</h2>
                                    <p className="stats-label">Projets réalisés</p>
                                </a>
                            </div>

                            <div className="stats-item">
                                <a href="#specialisations" className="stats-link">
                                    <h2 className="stats-num">3</h2>
                                    <p className="stats-label">Spécialisations</p>
                                </a>
                            </div>

                            <div className="stats-item">
                                <a href="#mois" className="stats-link">
                                    <h2 className="stats-num">6</h2>
                                    <p className="stats-label">Mois de formation</p>
                                </a>
                            </div>

                            <div className="stats-item">
                                <a href="#promotion" className="stats-link">
                                    <h2 className="stats-num">14e</h2>
                                    <p className="stats-label">Promotion</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </section>
    )
}