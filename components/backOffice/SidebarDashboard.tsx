"use client"

import { useState } from "react"
import { GrMenu } from "react-icons/gr";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";

export default function SidebarDashboard({children} : {children: React.ReactNode})
{

    const [sidbarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="main-container lg:flex min-h-screen">

            {/* La Sidebar */}
            <aside className={`w-64 bg-primary text-white py-6 px-5 fixed top-0 left-0 bottom-0 lg:static lg:translate-x-0 transition-all duration-500 ${sidbarOpen ? "translate-x-0" : "-translate-x-64"} `}>
                <div className="flex flex-col h-full justify-between">
                
                    {/* Haut : Logo + Navigation */}
                    <div className="flex flex-col gap-4">
                        {/* Le Logo */}
                        <div className="mb-2 relative pt-6">
                            <button onClick={()=> setSidebarOpen(false)} className="w-fit p-1 cursor-pointer absolute -top-5 -right-4 lg:hidden">
                                <IoCloseSharp className="text-4xl" />
                            </button>

                            <div>
                                <span className="font-holtwood text-xl">PORTAIL</span>
                                <span className="text-xl">Portfolio</span>
                            </div>
                        </div>

                        {/* Le Bouton Accueil */}
                        <button className="flex justify-center items-center text-center font-semibold gap-5 
                            bg-white text-primary px-4 py-2 rounded-lg 
                            w-full cursor-pointer shadow">

                                Accueil <IoMdHome className="text-primary font-bold text-xl" />
                        </button>
                    </div>

                    {/* Milieu : Carte Administrateur */}
                    <div className="bg-white rounded-lg overflow-hidden">
                        {/* Bloc bleu */}
                        <div className="bg-primary text-white text-center py-8 font-bold m-4 rounded-t-lg">Administrateur P.</div>

                        {/* Infos */}
                        <div className="p-4 flex flex-col gap-4">
                            <div>
                                <p className="text-primary font-bold text-sm">Nom</p>
                                <p className="text-gray-600 text-sm">Administrateur P.</p>
                            </div>
                            <div>
                                <p className="text-primary font-bold text-sm">Prénom</p>
                                <p className="text-gray-600 text-sm ">Administrateur P.</p>
                            </div>
                            <div>
                                <p className="text-primary font-bold text-sm">Adresse email</p>
                                <p className="text-gray-600 text-sm ">AdminP@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Bas : Bouton de Déconnexion */}
                    <button className="flex justify-center items-center text-center 
                        font-semibold bg-white text-primary px-4 py-2 gap-5
                        rounded-lg w-full cursor-pointer shadow" >

                        Déconnexion <IoMdLogOut className="text-primary font-bold text-xl"/> 

                    </button>
                </div>
            </aside>

            {/* Le Contenu principal */}
            <div className="flex flex-col flex-1 justify-between">

                {/* Le Header */}
                <header className="bg-white shadow-sm px-6 py-2">

                    <div className="flex justify-between items-center">

                        <GrMenu className="text-3xl cursor-pointer lg:hidden" onClick={()=>setSidebarOpen(!sidbarOpen)} />

                        {/* La Barre de recherche */}
                        <div className="flex items-center gap-4 py-3">
                            {/* icone ici */}
                            <div className="w-100">
                                <input 
                                    type="text" 
                                    placeholder="Rechercher" 
                                    className="rounded-full px-4 py-3 outline-none text-sm border border-gray-400 w-full"
                                />
                            </div>
                            
                        </div>

                        {/* Le profil Administrateur */}
                        <div className="flex gap-2 justify-center items-center">
                            {/* photo de prodil */}
                            <div className="w-12 h-12 rounded-full flex justify-center items-center text-white bg-primary"></div>
                            
                            <div className="flex-col gap-0.5">
                                <p className="text-base font-medium">Adimistrateur</p>
                                <p className="text-sm text-gray-600">Admin@gmail.com</p>
                            </div>
                        </div>

                    </div>

                    
                </header>

                {/*La Page principale elle-même (tableau de profils) */}
                <main className="px-6">
                    {children}
                </main>
            </div>
        </div>
    )
}