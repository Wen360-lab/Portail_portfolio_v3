"use client"

import Link from "next/link"
import { useState } from "react"
import { GrMenu } from "react-icons/gr";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { BsPencilFill } from "react-icons/bs";

export default function SidebarDashboard({children} : {children: React.ReactNode})
{

    const [sidbarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="main-container lg:flex h-screen">

            {/* La Sidebar */}
            <aside className={`w-64 bg-primary text-white py-3 md:py-6 px-2 md:px-5 fixed top-0 left-0 bottom-0 
                    lg:static lg:translate-x-0 transition-all duration-500  z-50
                    ${sidbarOpen ? "translate-x-0" : "-translate-x-64"} `}>
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
                        <Link href="/dashboard" className="flex justify-center items-center text-center font-semibold gap-5 
                            bg-white text-primary px-4 py-2 rounded-lg 
                            w-full cursor-pointer text-sm">

                                Accueil <IoMdHome className="text-primary font-bold text-md" />
                        </Link>
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
                            <div className="">
                                <Link 
                                    href="/update" 
                                    className="flex justify-center items-center text-center 
                                        font-semibold bg-white text-primary px-4 py-2 gap-5
                                        rounded-lg w-full cursor-pointer shadow border-2 text-sm">

                                    modifier 
                                    <BsPencilFill />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Bas : Bouton de Déconnexion */}
                    <Link href="/login" className="flex justify-center items-center text-center 
                        font-semibold bg-white text-primary px-4 py-3 gap-5
                        rounded-lg w-full cursor-pointer text-sm" >

                        Déconnexion <IoMdLogOut className="text-primary font-bold"/> 

                    </Link>
                </div>
            </aside>

            {/* Le Contenu principal */}
            <div className="flex flex-col flex-1 justify-between bg-gray-100">

                {/* Le Header */}
                <header className="bg-white shadow-sm px-2 md:px-6 py-2 sticky top-0 right-0 left-0 z-40">

                    <div className="flex justify-between items-center gap-5">

                        <GrMenu className="text-3xl cursor-pointer lg:hidden" onClick={()=>setSidebarOpen(!sidbarOpen)} />

                        {/* La Barre de recherche */}
                        <div className="flex items-center gap-4 py-3">
                            {/* icone ici */}
                            <div className=" w-full sm:w-80 md:w-100">
                                <input 
                                    type="text" 
                                    placeholder="Rechercher" 
                                    className="rounded-full px-4 py-3 outline-none text-sm border border-gray-400 w-full"
                                />
                            </div>
                            
                        </div>

                        {/* Le profil Administrateur */}
                        <div className="md:flex gap-2 justify-center items-center hidden">
                            {/* photo de prodil */}
                            <div className="w-12 h-12 rounded-full flex justify-center items-center text-white bg-primary"></div>
                            
                            <div className="flex-col gap-0.5">
                                <p className="text-sm font-medium">Adimistrateur</p>
                                <p className="text-sm text-gray-600">Admin@gmail.com</p>
                            </div>
                        </div>

                    </div>

                    
                </header>

                {/*La Page principale elle-même (tableau de profils) */}
                <main className="h-auto overflow-y-auto px-2 md:px-6 pt-20">
                    {children}
                </main>
            </div>
        </div>
    )
}