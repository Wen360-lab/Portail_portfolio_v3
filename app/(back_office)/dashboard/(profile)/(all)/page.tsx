"use client"
import { useState } from "react"
import "@/style/tailwind.css";

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

export default function Dashboard() {
  const [menuOuvert, setMenuOuvert] = useState<number | null>(null)
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold font-sora">Profils</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-lg cursor-pointer shadow font-sora hover:text-primary hover:bg-white duration-700">Ajouter un profil +</button>
      </div>

      <table className="w-full bg-white rounded-lg shadow table-fixed">
        <thead>
          <tr className="border-b text-left font-sora ">
            <th className="p-4 text-[10] max-w-xs truncate">Profil</th>
            <th className="p-4 text-[10] max-w-xs truncate">Nom</th>
            <th className="p-4 text-[10] max-w-xs truncate hidden md:table-cell">Prénom</th>
            <th className="p-4 text-[10] max-w-xs truncate hidden md:table-cell">Spécialité</th>
            <th className="p-4 text-[10] max-w-xs truncate hidden md:table-cell">Description</th>
            <th className="p-4 text-[10] max-w-xs truncate hidden md:table-cell">Lien portfolio</th>
            <th className="p-4 text-[10] max-w-xs truncate">Action</th>
          </tr>
        </thead>
        <tbody>
          {profils.map((profil) => (
            <tr key={profil.id} className="shadow  hover:bg-gray-50 duration-500">
              <td className="p-4">
                <div className="w-8 h-8 rounded-full flex justify-center items-center text-white bg-primary font-sora">{profil.id}</div>
              </td>
              <td className="p-4 font-sora text-sm max-w-xs truncate">{profil.nom}</td>
              <td className="p-4 font-sora text-sm max-w-xs truncate hidden md:table-cell">{profil.prenom}</td>
              <td className="p-4 font-sora text-sm max-w-xs truncate hidden md:table-cell">{profil.specialite}</td>
              <td className="p-4 font-sora text-sm max-w-xs truncate hidden md:table-cell">{profil.description}</td>
              <td className="p-4 font-sora text-sm max-w-xs truncate hidden md:table-cell">{profil.lienPortfolio}</td>
              <td className="p-4 relative">
                <button className="font-sora cursor-pointer" onClick={() => setMenuOuvert(menuOuvert === profil.id ? null : profil.id)}>...</button>

                {menuOuvert === profil.id && (
                  <div className="absolute right-0  w-[240] shadow-lg z-10 flex flex-col gap-2 p-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg">
                    <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                      Modifier profil
                    </button>
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
          ))}
        </tbody>
      </table>
    </div>
  )
}