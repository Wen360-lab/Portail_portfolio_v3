'use client'
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import "@/style/frontOfficeStyle/Home_style/style.css";


export default function Bouton(){
    return (
        <Link href="/profile" className="btn-explore">Explorez les portfolios <FaArrowRightLong /></Link>
    )
}