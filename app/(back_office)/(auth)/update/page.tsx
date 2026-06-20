
function Input({label, type, placeholder}: {label: string, type?: string, placeholder?: string}){

    return (<div className="flex flex-col gap-2">
        <label className="text-primary font-semibold text-sm">{label}</label>
        <input
            type={type ? type : "text"}
            placeholder={placeholder}
            className="w-full border-[1.5] border-gray-500 rounded-lg px-4 py-3 mb-4 outline-none focus:border-primary text-sm"
        />
    </div>)
}

export default function UpdateAdmin(){

    return (<>
        <form className="bg-white p-2 lg:p-8 my-10 rounded-lg">

            {/* Le titre de la page modifier un profil */}
            <div className="flex flex-col gap-0.5 mb-15">
                <h1 className="text-left text-black font-bold text-2xl font-poppins">Profil Administrateur</h1>
                <p className="texte-left text-gray-700  font-poppins text-sm">Modifier mon profil administrateur</p>
            </div>


            {/* formulaire */}
            <div className="w-full">
                <div className="mb-8">
                    <div className="w-30 h-30 rounded-full bg-primary flex items-center justify-center">
                        <input type="file" name="" id="" className="w-full text-white text-sm" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <Input label="Nom et pénoms" />
                    <Input label="Adresse email" type="email" />
                    <Input label="Ancien mot de passe" type="password" placeholder="***************" />
                    <Input label="Nouveau mot de passe" type="password" placeholder="***************" />
                    <div className="md:col-span-2">
                        <Input label="confirmez le mot de passe" type="password" placeholder="***************" />
                    </div>
                </div>
            </div>

            {/* bouton sauvegarder */}
            <div className="">
                <button type="submit" className="bg-primary  text-white px-4 py-3 rounded-lg flex items-center 
                    justify-center shadow gap-2 hover:opacity-90 transition-opacity duration-300 
                    cursor-pointer text-sm">

                    Appliquer les modifications
                </button>
            </div>
        </form>
        
    </>)
}
