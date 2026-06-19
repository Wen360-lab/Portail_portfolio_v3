import SidebarDashboard from "@/components/backOffice/SidebarDashboard";

import type { Metadata } from "next";
import "@/style/tailwind.css";

export const metadata: Metadata = {
  title: "Portail Portfolios | administration",
};


export default function RootLayout({ children }: Readonly<{children: React.ReactNode; }>) 
{
    return (
        <html lang="fr" >
           <body className="font-poppins font-medium">
                <SidebarDashboard children={children} />
            </body>
        </html>
    );
}

