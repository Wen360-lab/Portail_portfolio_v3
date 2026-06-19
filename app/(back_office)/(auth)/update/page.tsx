
export default function UpdateAdmin()
{

    return (<>
        <section className="flex flex-col w-full bg-white mx-auto px-4 sm:px-8 md:px-10 py-10 rounded-lg h-auto max-w-5xl">
            {/* Le titre de la page modifier un profil */}
            <div className="flex flex-col gap-0.5 mb-4">
                <h1 className="text-left text-black font-bold text-3xl font-poppins">Profil Administrateur</h1>
                <p className="texte-left text-black  font-poppins">Modifier mon profil administrateur</p>
            </div>
           {/* La ligne séparatrice  */}
            <hr />
            {/* Le conteneur des sections formulaire et Photo de profil */}
            <div className="flex flex-col md:flex-row mt-12 w-full gap-5">
            {/* La section Formulaire */}
            <div className="flex flex-col rounded-lg border p-5 w-full md:w-1/2">
                {/* Champ nom etb prénom */}
                <p className="text-primary font-medium  font-poppins">Nom et prénom</p>
                <input
                    type="text"
                    placeholder="Mombo Jean Ives"
                    className="w-full border-[1.5] border-gray-500 rounded-lg px-4 py-3 mb-4 outline-none focus:border-primary"
                />

                {/* Champ email */}
                <p className="text-blue-900 font-medium  font-poppins">Adresse email</p>
                <input
                    type="email"
                    placeholder="monbojeanives@gmail.com"
                    className="w-full border-[1.5] border-gray-500 rounded-lg px-4 py-3 mb-4 outline-none focus:border-primary"
                />
                {/* Les champs mot de passe  */}
                <div className="flex-col">
                    {/* Champ mot de passe (ancient)*/}
                    <p className="text-primary font-medium  font-poppins">Ancien mot de passe</p>
                    <input
                        type="password"
                        placeholder="**********"
                        className="w-full border-[1.5] border-gray-500 rounded-lg px-4 py-3 mb-4 outline-none focus:border-primary"
                    />
                </div>
                <div className="flex-col">
                    {/* Champ mot de passe (nouveau)*/}
                    <p className="text-primary font-medium font-poppins">Nouveau mot de passe</p>
                    <input
                        type="password"
                        placeholder="**********"
                        className="w-full border-[1.5] border-gray-500 rounded-lg px-4 py-3 mb-4 outline-none focus:border-primary"
                    />
                </div>
            

                {/* Champ mot de passe (nouveau + confirmation)*/}
                <p className="text-primary font-medium font-poppins">Confirmez mot de passe</p>
                <input
                    type="password"
                    placeholder="**********"
                    className="w-full border-[1.5] border-gray-500 rounded-lg px-4 py-3 mb-4 outline-none focus:border-primary"
                />
                </div>
                {/* La section Photo de profil */}
                <div className="flex flex-col rounded-lg border p-5 w-full md:w-1/2">
                    <p className="text-primary font-medium font-poppins text-center">Modifier ma photo de profil</p>
                    <div className="flex flex-1 items-center justify-center mt-4 bg-gray-400 rounded-lg p-4">
                        <button className="bg-primary font-poppins mt-85 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                            Télécharger une photo
                        </button>
                    </div>
                </div>
            </div>
            {/* La section contenant les boutons Retour et Sauvegarder */}
            <div className="flex gap-10 mt-4">
                <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center justify-center shadow gap-2 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                    Retour
                </button>

                <button className="bg-primary  text-white px-4 py-2 rounded-lg flex items-center justify-center shadow gap-2 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                    Sauvegarder
                </button>
            </div>
        </section>
        
    </>)
}
