import { MdOutlineMailOutline } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";
import Link from "next/link";
export default function LoginPage()
{

    return (<>

        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full sm:w-md">
            
            {/* Logo */}
            <div className="mb-10">
                <div className="mb-3">
                    <span className="font-holtwood text-2xl text-primary">PORTAIL </span>
                    <span className="font-inclusive text-2xl">Porfolio</span>
                </div>

                {/* Sous-titre */}
                <p className="text-gray-500 mb-6 font-poppins">Veuillez vous connecter</p>

            </div>

           
            {/* Champ email */}
            <div className="mb-10 rounded-lg border-primary border flex items-center justify-between py-1 px-3 w-full">
                <input
                    type="email"
                    placeholder="exemple@gmail.fr"
                    className="w-full outline-none border-none text-gray-600 py-2 block"
                />
                <MdOutlineMailOutline className="text-2xl text-gray-600" />
            </div>
           

            {/* Champ mot de passe */}
            <div className="mb-10 rounded-lg border-primary border flex items-center justify-between py-1 px-3 w-full">
                <input
                    type="password"
                    placeholder="*******************"
                    className="w-full outline-none border-none text-gray-600 py-2 block"
                />
                <GiPadlock className="text-2xl text-gray-600" />
            </div>

            {/* Bouton connexion */}
            <Link href="/dashboard" className="block w-full 
                font-poppins bg-primary text-white py-3 px-4
                rounded-lg hover:opacity-90 transition-opacity 
                text-center
                duration-300 cursor-pointer">
                Connexion
            </Link>

        </div>
      </div>
        
    </>)
}