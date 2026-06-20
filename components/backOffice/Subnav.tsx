import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link"

export default function Subnav({label}: {label: string}){
    
    
    return(
        <nav className="flex items-center gap-1 text-sm mb-6"> 
            <Link 
                href="/dashboard" 
                className="font-semibold  text-primary">
                    Dashboard
            </Link> 

                <IoIosArrowForward />
                
            <span className="text-gray-700 ">{label}</span>
        </nav>
    )
}