"use client"
import { useState } from "react";

type Profile = {
  id: number;
  nom: string;
  prenom: string;
  specialite: string;
  description: string;
  lienPortfolio?: string;
};

type Props = {
  profils: Profile[];
  itemsPerPage?: number;
};

export default function ProfileTable({
  profils,
  itemsPerPage = 5,
}: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(profils.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentItems = profils.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  function goToPage(page: number) {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  }

  return (
    <div className="w-full">
      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse table-fixed">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="w-[20%] p-2">Nom</th>
              <th className="w-[20%] p-2">Prénom</th>
              <th className="w-[20%] p-2">Spécialité</th>
              <th className="w-[40%] p-2">Description</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((profil) => (
              <tr key={profil.id} className="border-t">
                <td className="p-2">{profil.nom}</td>
                <td className="p-2">{profil.prenom}</td>
                <td className="p-2">{profil.specialite}</td>
                <td className="p-2 truncate">
                  {profil.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center gap-2 mt-4">
        <button
          onClick={() => goToPage(currentPage - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Précédent
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1 ? "bg-black text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Suivant
        </button>
      </div>
    </div>
  );
}