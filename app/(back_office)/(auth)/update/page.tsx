
export default function UpdateAdmin()
{

    return (<>
        <section className="flex-col w-full bg-white flex  justify-center ml-50 mr-50 p-10 rounded-lg h-auto">
            {/* Le titre de la page modifier un profil */}
            <div className="flex-col gap-0.5 mb-4">
                <h1 className="text-left text-black font-bold text-3xl">Profil Administrateur</h1>
                <p className="texte-left text-black">Modifier mon profil administrateur</p>
            </div>
           {/* La ligne séparatrice  */}
            <hr />
            {/* Le conteneur des sections formulaire et Photo de profil */}
            <div className="md:flex lg:flex sm:flex justify-between  mt-12">
                {/* La section Formulaire */}
                <div className="flex-col rounded-lg border p-5">

                    {/* Champ nom etb prénom */}
                    <p className="text-blue-900 font-medium">Nom et prénom</p>
                    <input
                        type="text"
                        placeholder="Mombo Jean Ives"
                        className="w-full border-[1.5] border-gray-500 rounded-lg px-4 py-3 mb-4 outline-none focus:border-primary"
                    />

                    {/* Champ email */}
                    <p className="text-blue-900 font-medium">Adresse email</p>
                    <input
                        type="email"
                        placeholder="monbojeanives@gmail.com"
                        className="w-full border-[1.5] border-gray-500 rounded-lg px-4 py-3 mb-4 outline-none focus:border-primary"
                    />
                    {/* La div contenant les champs mot de passe  */}
                    <div className="flex mt-2.5 gap-3.5">
                        <div className="flex-col">
                            {/* Champ mot de passe (ancient)*/}
                            <p className="text-blue-900 font-medium">Ancien mot de passe</p>
                            <input
                                type="password"
                                placeholder="**********"
                                className="w-full border-[1.5] border-gray-500 rounded-lg px-4 py-3 mb-4 outline-none focus:border-primary"
                            />
                        </div>
                        <div className="flex-col">
                            {/* Champ mot de passe (nouveau)*/}
                            <p className="text-blue-900 font-medium">Nouveau mot de passe</p>
                            <input
                                type="password"
                                placeholder="**********"
                                className="w-full border-[1.5] border-gray-500 rounded-lg px-4 py-3 mb-4 outline-none focus:border-primary"
                            />
                        </div>
                    </div>

                        {/* Champ mot de passe (nouveau + confirmation)*/}
                        <p className="text-blue-900 font-medium">Confirmez mot de passe</p>
                        <input
                            type="password"
                            placeholder="**********"
                            className="w-full border-[1.5] border-gray-500 rounded-lg px-4 py-3 mb-4 outline-none focus:border-primary"
                        />
                </div>
                {/* La section Photo de profil */}
                <div className="flex-col rounded-lg border p-5 h-full">
                    <p className="text-blue-900 font-medium">Modifier ma photo de profil</p>
                    <div className="flex h-full  mt-4 bg-gray-400 rounded-lg p-4">
                        <button className="bg-primary mt-65 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                         Télécharger une photo
                        </button>
                    </div>
                </div>
            </div>
            {/* La section contenant les boutons Retour et Sauvegarder */}
            <div className="flex gap-10 mt-4">
                <button className="bg-blue-900  text-white px-4 py-2 rounded-lg flex items-center justify-center shadow gap-2 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                    Retour
                </button>

                <button className="bg-blue-900  text-white px-4 py-2 rounded-lg flex items-center justify-center shadow gap-2 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                    Sauvegarder
                </button>
            </div>

        </section>
        
    </>)
}
