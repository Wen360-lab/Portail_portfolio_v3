import type { Metadata } from "next";

import Header from "@/components/frontOffice/Header";
import Footer from "@/components/frontOffice/Footer";

import "@/style/frontOfficeStyle/pages/profile/_hero.scss";
import "@/style/frontOfficeStyle/pages/profile/_grid_card.scss";

import {profiles} from "@/data/data"

export const metadata: Metadata = {
  title: "Portail Portfolios | Profiles",
};

export default function ProfilePage() {
    return (
        <div className="profile-page">
            <Header />

            <section className="hero">
                <div className="main-container">
                    <div className="container">
                        <div className="flex">
                            <div className="content">
                                <h1>Découvrez nos développeurs</h1>
                                <div className="form">
                                    <select defaultValue="">
                                        <option value="">Tous les profiles</option>
                                        <option value="">Frontend</option>
                                        <option value="">Backend</option>
                                        <option value="">FullStack</option>
                                    </select>
                                    <div className="search-input">
                                        <input type="text" />
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid_card">
                <div className="main-container">
                    <div className="container">
                        <div className="grid-container">
                            {profiles.map((dev) => (
                                <div className="card" key={dev.id}>
                                    <div className="img">
                                        <img src={dev.photo} alt={dev.lastname} />
                                        <div className="overlay"></div>
                                    </div>
                                    <div className="body">
                                        <h2 className="name">{dev.lastname}</h2>
                                        <h4 className="title">{dev.job}</h4>
                                        <p>{dev.desc}</p>
                                        <a href={dev.portfolio} className="btn" target="_blank" rel="noopener noreferrer">
                                            voir le profile <i className="fa-solid fa-arrow-right-long"></i>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
