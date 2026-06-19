"use client"
import Link from "next/link"
import { useState } from "react"

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
  
   

]

function ThHeadTable({label}: {label: string})
{
    return (
        <th className="p-2 text-sm text-gray-900 py-5">{label}</th>
    )
}

type TypeProfile ={
    profil: {
        id: string,
        nom: string,
        prenom: string,
        specialite: string,
        description: string,
        lienPortfolio: string
    }
}
function ProfileTr({profil}: {profil: TypeProfile})
{
    const [menuOuvert, setMenuOuvert] = useState<number | null>(null)


    return (
        <tr key={profil.id} className="shadow  hover:bg-gray-100 duration-100">
            <td className="p-2">
                <div className="w-8 h-8 rounded-full flex justify-center items-center text-white bg-primary font-sora">{profil.id}</div>
            </td>
            <td className="p-2 text-sm max-w-xs truncate text-gray-800 hover:underline hover:text-primary">
                <Link href="/dashboard/show" >
                    {profil.nom}
                </Link>
            </td>
            <td className="p-2 text-sm max-w-xs truncate text-gray-800">{profil.prenom}</td>
            <td className="p-2 text-sm max-w-xs truncate text-gray-800">{profil.specialite}</td>
            <td className="p-2 text-sm max-w-xs truncate text-gray-800">{profil.description}</td>
            <td className="p-2 text-sm max-w-xs truncate text-gray-800 hover:underline hover:text-primary">
                <Link href={profil.lienPortfolio}>{profil.lienPortfolio}</Link>
            </td>
            <td className="p-4 relative">
                <button className="font-sora cursor-pointer" onClick={() => setMenuOuvert(menuOuvert === profil.id ? null : profil.id)}>...</button>

                {menuOuvert === profil.id && (
                <div className="absolute right-0  w-[240] shadow-lg z-10 flex flex-col gap-2 p-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg">
                    <Link href="/dashboard/update" className="bg-primary text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                    Modifier profil
                    </Link>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                    Supprimer profil
                    </button>
                    {/* <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                    Consulter profil
                    </button> */}
                </div>
                )}
            </td>
        </tr>
    )
}

export default function Dashboard() {

    return (
        <section>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl md:text-3xl  font-bold">Profils</h1>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold">Total</h3>
                        <div className="bg-primary text-white px-4 py-2 rounded-lg ">12</div>
                    </div>

                    <Link href="/dashboard/create" className="bg-primary text-white px-4 py-2 rounded-lg cursor-pointer">Ajouter un profil +</Link>
                </div>
            </div>

            <table className="w-full bg-white rounded-lg shadow table-fixed">
                <thead>
                    <tr className="border-b border-gray-300 text-left">
                        <ThHeadTable label="N" />
                        <ThHeadTable label="Non" />
                        <ThHeadTable label="Prénom" />
                        <ThHeadTable label="Spécialité" />
                        <ThHeadTable label="Description" />
                        <ThHeadTable label="portfolio" />
                        <ThHeadTable label="Action" />
                    </tr>
                </thead>

                <tbody className="max-h-100 overflow-y-auto">
                    {profils.map((profil) => (
                        <ProfileTr key={profil.id} profil={profil} />
                    ))}
                </tbody>
            </table>
        </section>
    )
}