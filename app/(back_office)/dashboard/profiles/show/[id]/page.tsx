
import type { ReactNode } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    Mail,
    MapPin,
    Pencil,
    Phone,
    Settings,
    type LucideIcon,
} from "lucide-react";

import Subnav from "@/components/backOffice/Subnav";

import {profiles} from "@/lib/mock/data"

import Image from "next/image"



function InfoBlock({icon, label, children }: Readonly<{ icon: LucideIcon, label: string, children: ReactNode,}>) {
    const Icon = icon;

    return (
        <div className="flex flex-col gap-1">
            <h4 className="text-sm font-bold uppercase text-gray-700">
                {label}
            </h4>

            <div className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-sm text-gray-600 font-semibold">{children}</span>
            </div>
        </div>
    );
}

export default async function ShowProfilePage({params}: {params: Promise<{id: string}>}) {
    
    const {id} = await params
    const profile_id = Number(id)
    const profile = profiles.find( profile => profile.id == profile_id)

    return (
        <section className="flex flex-col gap-8 pb-4">

            <section>
                <Subnav label="Detail" />

                <div className="flex items-center justify-between flex-wrap gap-4">
                    <h1 className="text-3xl font-bold leading-tight text-gray-700">
                        Détails du Profil
                    </h1>

                    <Link 
                        href={`/dashboard/profiles/edit/${profile?.id}`} 
                        className="flex items-center justify-center gap-2 
                            rounded-lg bg-primary px-5 py-2.5 text-sm 
                            font-semibold text-white shadow-sm">
                    
                            <Pencil className="h-4 w-4" />
                            Modifier le profil
                    </Link>

                </div>
            </section>

            <section className="rounded-2xl bg-white shadow-sm p-4 lg:p-8">
              
                <div className="flex flex-col">

                    <div className="flex flex-col">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold leading-tight text-gray-700">
                               {profile?.lastname} {profile?.firstname}
                            </h3>
                            <p className="mt-2 text-sm font-normal text-slate-500">
                               {profile?.job}
                            </p>
                        </div>

                        <div className="mb-3">
                            <Image src={`${profile?.photo}`} width={300} height={50} className="rounded-xl object-cover" alt="" />
                        </div>


                        <div className="flex items-center gap-2 rounded-full w-fit
                             bg-emerald-50 px-5 py-2 text-xs font-bold text-emerald-700 
                             ring-1 ring-emerald-100 mb-8">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            Actif
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-8">
                        
                        <div>
                            <InfoBlock icon={Mail} label="Email professionnel">
                                asse@gmail.com
                            </InfoBlock>
                        </div>

                        <div>
                            <InfoBlock icon={Phone} label="Numéro de téléphone">
                                +241 66234513
                            </InfoBlock>
                        </div>

                        <div>
                            <InfoBlock icon={MapPin} label="Localisation">
                                Libreville,
                                Gabon
                            </InfoBlock>
                        </div>

                    </div>
                    
                </div>

            </section>

            <section className="rounded-2xl bg-white p-4 lg:p-8 shadow-sm md:p-10">
               
                <div className="flex items-center gap-3">
                    <span className="flex p-4 items-center justify-center rounded-lg bg-[#edf2ff] text-primary">
                        <Settings className="w-5 h-5" />
                    </span>

                    <h3 className="text-xl font-bold text-gray-700">Description</h3>
                </div>

                <p className="mt-7 text-sm font-normal leading-7 text-slate-600">
                    {profile?.desc}
                </p>

            </section>

        </section>
    )
}
