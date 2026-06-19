import type { Metadata } from "next";

import "@/style/frontOfficeStyle/base/_reset.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";


export const metadata: Metadata = {
  title: "Portail Portfolios",
  description: "Le portail qui regroupe les profiles des dévéloppeur web de la promo 14 Ecole 241 du programme D-CLIC, OIF.",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode; }>) 
{
    return (
        <html lang="fr" >
            <body >
                {children}
            </body>
        </html>
    );
}
