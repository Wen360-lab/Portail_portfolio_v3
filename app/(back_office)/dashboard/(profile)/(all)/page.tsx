"use client"

import Link from "next/link"
import { useState } from "react"
import { FaPlus } from "react-icons/fa6";
import {profiles, ProfileType, ArrayProfilesType} from "@/data/data"


/**
 * genere le HEAD du table
 * 
 * @param param0 
 * @returns 
 */
function Thead(){

    const labels = [
        '#', 'Nom', 'Spécialité', 'Description', 'Portfolio', 'Action'
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

                <Link href={`/dashboard/${profile.id}`} >
                    {profile.lastname}
                </Link>

            </td>

            <td className="p-2 text-sm max-w-xs truncate text-gray-800">
                {profile.job}
            </td>

            <td className="p-2 text-sm max-w-xs truncate text-gray-800">
                {profile.desc}
            </td>

            <td className="p-2 text-sm max-w-xs truncate text-gray-800 
                hover:underline hover:text-primary">

                <Link href={profile.portfolio}>{profile.portfolio}</Link>

            </td>

            <td className="p-4 relative">
                <button className="font-sora cursor-pointer w-full" onClick={() => setMenuOuvert(menuOuvert === profile.id ? null : profile.id)}>...</button>

                {menuOuvert === profile.id && (
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


            <div className="bg-white rounded-lg shadow  overflow-x-auto mb-8">
                
                <table className="table-fixed">
                    <Thead />
                    <Tbody profiles={profiles} />
                </table>
            </div>
        </section>
    )
}