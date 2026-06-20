"use client"

import Link from "next/link"
import { useState } from "react"
import { FaPlus } from "react-icons/fa6";

/**
 * tableaux de tous les portfolios
 * 
 * */
const profils = [
    {
        id: 1,
        nom: "Mombo Mombo",
        prenom: "Jean Pierre",
        specialite: "Front-end",
        description: "Designer et product...",
        lienPortfolio: "https://www.githubPage.io",
    },

    {
        id: 2,
        nom: "Obame",
        prenom: "Marie",
        specialite: "Back-end",
        description: "Développeur Node...",
        lienPortfolio: "https://www.githubPage.io",
    },

    {
        id: 3,
        nom: "Nzeng",
        prenom: "Paul",
        specialite: "Full-stack",
        description: "Dev et architecte logiciel, je créer des app robustres",
        lienPortfolio: "https://www.githubPage.io",
    },

    {
        id: 4,
        nom: "Nzeng",
        prenom: "Paul",
        specialite: "Full-stack",
        description: "Dev et architecte...",
        lienPortfolio: "https://www.githubPage.io",
    },

    {
        id: 5,
        nom: "Nzeng",
        prenom: "Paul",
        specialite: "Full-stack",
        description: "Dev et architecte...",
        lienPortfolio: "https://www.githubPage.io",
    },

    {
        id: 6,
        nom: "Nzeng",
        prenom: "Paul",
        specialite: "Full-stack",
        description: "Dev et architecte...",
        lienPortfolio: "https://www.githubPage.io",
    },

    {
        id: 7,
        nom: "Nzeng",
        prenom: "Paul",
        specialite: "Full-stack",
        description: "Dev et architecte...",
        lienPortfolio: "https://www.githubPage.io",
    },

    {
        id: 8,
        nom: "Nzeng",
        prenom: "Paul",
        specialite: "Full-stack",
        description: "Dev et architecte...",
        lienPortfolio: "https://www.githubPage.io",
    },

    {
        id: 9,
        nom: "Nzeng",
        prenom: "Paul",
        specialite: "Full-stack",
        description: "Dev et architecte...",
        lienPortfolio: "https://www.githubPage.io",
    },

    {
        id: 10,
        nom: "Nzeng",
        prenom: "Paul",
        specialite: "Full-stack",
        description: "Dev et architecte...",
        lienPortfolio: "https://www.githubPage.io",
    }
]

/**
 * Le type qui definie un profile
 */
type Profile = {
    id: number;
    nom: string;
    prenom: string;
    specialite: string;
    description: string;
    lienPortfolio: string;
}

type TypeProfile = Profile[];

/**
 * genere le HEAD du table
 * 
 * @param param0 
 * @returns 
 */
function Thead(){

    const labels = [
        'N#', 'Nom', 'Prenom', 'Spécialité', 'Description', 'Portfolio', 'Action'
    ]

    function Th ({label}: {label: string})
    {
        return (
            <th className="p-2 text-sm text-gray-700 py-5">{label}</th>
        )
    }
    
    return (
        <thead>
            <tr className="border-b border-gray-300 text-left">
               {labels.map( label => (<Th key={label} label={label} />) )}
            </tr>
        </thead>
    )
}

/**
 * genere une ligne du tableau. Donc un profile
 */
function Tr({ profil }: { profil: Profile }) {
    const [menuOuvert, setMenuOuvert] = useState<number | null>(null)


    return (
        <tr key={profil.id} className="shadow  hover:bg-gray-100 duration-100">

            <td className="p-2">
                <div className="w-8 h-8 rounded-full flex justify-center 
                    items-center text-white bg-primary font-sora">
                    {profil.id}
                </div>
            </td>

            <td className="p-2 text-sm max-w-xs truncate text-gray-800 
                hover:underline hover:text-primary">

                <Link href="/dashboard/show" >
                    {profil.nom}
                </Link>

            </td>

            <td className="p-2 text-sm max-w-xs truncate text-gray-800">
                {profil.prenom}
            </td>

            <td className="p-2 text-sm max-w-xs truncate text-gray-800">
                {profil.specialite}
            </td>

            <td className="p-2 text-sm max-w-xs truncate text-gray-800">
                {profil.description}
            </td>

            <td className="p-2 text-sm max-w-xs truncate text-gray-800 
                hover:underline hover:text-primary">

                <Link href={profil.lienPortfolio}>{profil.lienPortfolio}</Link>

            </td>

            <td className="p-4 relative">
                <button className="font-sora cursor-pointer w-full" onClick={() => setMenuOuvert(menuOuvert === profil.id ? null : profil.id)}>...</button>

                {menuOuvert === profil.id && (
                <div className="absolute right-0  w-[240] shadow-lg z-10 flex flex-col gap-2 p-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg">
                    
                    <Link href="/dashboard/update" className="bg-primary text-white px-4 py-2 rounded-lg 
                        flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                        Modifier profil
                    </Link>

                    <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                        Supprimer profil
                    </button>

                    <Link href="/dashboard/show" className="bg-primary text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                        Consulter profil
                    </Link>

                </div>
                )}
            </td>
        </tr>
    )
}

/**
 * Genere le Body du tableau
 * @returns 
 */
function Tbody({ profils }: { profils: TypeProfile }) {

    return (
        <tbody className="">
            {profils.map((profil) => (
                <Tr key={profil.id} profil={profil} />
            ))}
        </tbody>
    )
}



export default function Dashboard() {

    return (
        <section>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                <h1 className="text-2xl font-bold text-gray-700">Profils</h1>

                <div className="flex flex-wrap gap-4">

                    <div className="flex items-center gap-4">
                        <h3 className="text-lg font-semibold text-gray-700">Total</h3>
                        <div className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg ">12</div>
                    </div>



                    <Link
                        href="/dashboard/create"
                        className="bg-primary text-white px-4 py-2 rounded-lg cursor-pointer 
                            flex items-center gap-2 text-sm font-semibold"
                        >
                          Ajouter un profile <FaPlus />
                    </Link>

                </div>
            </div>


            <table className="w-full bg-white rounded-lg shadow table-fixed mb-4">
                <Thead />
                <Tbody profils={profils} />
            </table>
        </section>
    )
}