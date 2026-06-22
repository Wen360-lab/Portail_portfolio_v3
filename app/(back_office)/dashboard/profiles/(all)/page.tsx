"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { FaPlus } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

import {profiles, ProfileType, ArrayProfilesType} from "@/lib/mock/data"

const ITEMS_PER_PAGE = 3;

/**
 * genere le HEAD du table
 * 
 * @param param0 
 * @returns 
 */
function Thead(){

    const labels = [
        '#', 'Nom', 'Prénom' ,'Spécialité', 'Portfolio', 'Action'
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
function Tr({ profile }: { profile: ProfileType }) {
    const [menuOuvert, setMenuOuvert] = useState<number | null>(null)

    return (
        <tr key={profile.id} className="shadow  hover:bg-gray-100 duration-100">

            <td className="p-2">
                <div className="w-8 h-8 rounded-full flex justify-center 
                    items-center text-white bg-primary font-sora">
                    {profile.id}
                </div>
            </td>

            <td className="p-2 text-sm max-w-xs truncate text-gray-800 
                hover:underline hover:text-primary">

                <Link href={`/dashboard/profiles/show/${profile.id}`} >
                    {profile.lastname}
                </Link>

            </td>
            <td className="p-2 text-sm max-w-xs truncate text-gray-800 
                hover:underline hover:text-primary">

                <Link href={`/dashboard/profiles/show/${profile.id}`} >
                    {profile.firstname}
                </Link>

            </td>

            <td className="p-2 text-sm max-w-xs truncate text-gray-800">
                {profile.job}
            </td>

            <td className="p-2 text-sm max-w-xs truncate text-gray-800 
                hover:underline hover:text-primary">

                <Link href={profile.portfolio}>{profile.portfolio}</Link>

            </td>

            <td className="flex gap-2 items-center justify-between h-auto p-4">
                <Link href={`/dashboard/profiles/edit/${profile.id}`}>
                    <FaEdit className="w-7 h-7 text-primary" />
                  </Link>
                  <button >
                    <FaRegTrashAlt className="w-6 h-6 text-red-700"/>
                  </button>
            </td>
        </tr>
    )
}

/**
 * Genere le Body du tableau
 * @returns 
 */
function Tbody({ profiles }: { profiles: ArrayProfilesType }) {

    return (
        <tbody className="">
            {profiles.map((profile) => (
                <Tr key={profile.id} profile={profile} />
            ))}
        </tbody>
    )
}

export default function Dashboard() {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [allProfils, setAllProfils] = useState(profiles);

    /** 
     * Filtrage automatique (live search)
     */
    const filteredProfils = useMemo(() => {
        return allProfils.filter((p) => {
        const value = search.toLowerCase();

        return (
            p.lastname.toLowerCase().includes(value) ||
            p.firstname.toLowerCase().includes(value)||
            p.job.toLocaleLowerCase().includes(value)
        );
        });
    }, [search]);

    /**
     * Fonction de suppression
     * @param id 
     * @returns 
     */
    function deleteProfil(id: number) {
        const confirmed = window.confirm(
            "Voulez-vous vraiment supprimer ce profil ?"
        );

        if (!confirmed) return;

        setAllProfils((prev) =>
            prev.filter((profil) => profil.id !== id)
        );
    }

    /**
     * Pagination basée sur la recherche
     */
    const totalPages = Math.ceil(filteredProfils.length / ITEMS_PER_PAGE);

    const paginatedProfils = useMemo(() => {
        const start = (page - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;

        return filteredProfils.slice(start, end);
    }, [filteredProfils, page]);

    /**
     * reset page si recherche change
     */
    function handleSearch(value: string) {
        setSearch(value);
        setPage(1);
    }

    return (

        <section>

            {/* Tire principale + btn create portfolio */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                <h1 className="text-2xl font-bold text-gray-700">Profils</h1>

                <div className="flex flex-wrap gap-4">

                    <div className="flex items-center gap-4">
                        <h3 className="text-lg font-semibold text-gray-700">Total</h3>
                        <div className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg "> {profiles.length} </div>
                    </div>



                    <Link
                        href="/dashboard/profiles/create"
                        className="bg-primary text-white px-4 py-2 rounded-lg cursor-pointer 
                            flex items-center gap-2 text-sm font-semibold"
                        >
                          Ajouter un profile <FaPlus />
                    </Link>

                </div>
            </div>

            {/* La Barre de recherche */}
            <div className="flex items-center gap-4 py-3">
                <div className=" w-full sm:w-80 md:w-100 gap-2 border border-gray-400 py-1 flex items-center rounded-2xl px-2">
                    <IoSearchOutline className="w-7 h-7 text-gray-700 cursor-pointer" />
                    <input 
                        type="text" 
                        placeholder="Rechercher par: nom, prenom, métiers" 
                        value={search}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="rounded-full px-1 py-2 outline-none text-sm w-full"
                    />
                </div>
            </div>

            {/* table des profiles */}
            <div className="bg-white rounded-lg shadow  overflow-x-auto mb-8 p-4 pb-5 w-fit">
                <table className="table-fixed mb-5">
                    <Thead />
                    <Tbody profiles={paginatedProfils} />
                </table>

                {/* Pagination */}
                <div className="flex gap-2 items-center justify-start m-4">
                    <button
                        disabled={page === 1}
                        onClick={() => setPage((p) => p - 1)}
                        className="px-3 py-1 bg-primary text-white rounded-md cursor-pointer disabled:opacity-50"
                        >
                            Prev
                    </button>

                    <span>
                        Page {page} / {totalPages || 1}
                    </span>

                    <button
                        disabled={page === totalPages || totalPages === 0}
                        onClick={() => setPage((p) => p + 1)}
                        className="px-3 py-1 bg-primary text-white rounded-md cursor-pointer disabled:opacity-50"
                        >
                            Next
                    </button>
                </div>

                {/* empty state */}
                {filteredProfils.length === 0 && (
                    <p className="text-red-500 pr-4 pl-4 font-medium font-poppins">
                        Aucun profil trouvé
                    </p>
                )}
            </div>
        </section>
        
    )
}