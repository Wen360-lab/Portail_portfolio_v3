"use client"
import "@/style/frontOfficeStyle/pages/home/_hero.scss";
import Cta from "@/components/frontOffice/homeComponents/Cta"
import Bouton from "@/components/frontOffice/homeComponents/Bouton"


export default function HomePage(){

    return (

        <section className="hero-section">
            {/* La section "Call To Action" CTA de la page d'accueil */}
            <Cta/>
            {/* Le bouton permettant l'accès aux profils */}
            <Bouton/>
           
        
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