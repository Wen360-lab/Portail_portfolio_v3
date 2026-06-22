"use client";

import { MdOutlineMailOutline } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginSchema } from "@/lib/validators/loginSchema";
import { users } from "@/lib/mock/users";

export default function LoginForm()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [message, setMessage] = useState("");
    const router = useRouter();
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setErrors({});
        setMessage("");

        const result = loginSchema.safeParse({
            email,
            password,
        });

        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;

            setErrors({
                email: fieldErrors.email?.[0] ?? "",
                password: fieldErrors.password?.[0] ?? "",
            });

            return;
        }

        // Vérification dans le tableau users
        const user = users.find(
        (user) =>
            user.email === result.data.email &&
            user.password === result.data.password
        );

        if (!user) {
            setMessage("Email ou mot de passe incorrect");
            return;
        }

        setMessage(`Bienvenue ${user.lastname}`);

        // Sauvegarde de la session
        localStorage.setItem("user", JSON.stringify(user));

        // Redirection
        router.push("/dashboard/profiles/");   
    }
    return (<>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl xxsm:mx-5 xsm:mx-14 shadow-lg mx-2 w-full sm:w-md sm:mx-0">
        
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
            <div className="mb-3">
                <div className="rounded-lg border-primary border flex items-center justify-between py-1 px-3 w-full">
                    <input
                        type="email"
                        placeholder="exemple@gmail.fr"
                        className="w-full outline-none border-none text-gray-600 py-2 block"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <MdOutlineMailOutline className="text-2xl text-gray-600" />
                </div>
                {errors.email && (
                <p className="text-red-500 text-sm font-poppins">{errors.email}</p>
                )}
            </div>
        

            {/* Champ mot de passe */}
            <div className="mb-3">
                <div className="rounded-lg border-primary border flex items-center justify-between py-1 px-3 w-full">
                    <input
                        type="password"
                        placeholder="*******************"
                        className="w-full outline-none border-none text-gray-600 py-2 block"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <GiPadlock className="text-2xl text-gray-600" />
                </div>
                {errors.password && (
                <p className="text-red-500 text-sm font-poppins">{errors.password}</p>
                )}
            </div>

                {message && (

                <p   className={`font-poppins mb-2 ${
                        message.startsWith("Bienvenue")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}>
                    {message}
                </p>)}


            {/* Bouton connexion */}
            <button 
                type="submit" 
                className="block w-full 
                    font-poppins bg-primary text-white py-3 px-4
                    rounded-lg hover:opacity-90 transition-opacity 
                    text-center
                    duration-300 cursor-pointer"
                >

               Connexion
            </button>

        </form>
        
    </>)
}