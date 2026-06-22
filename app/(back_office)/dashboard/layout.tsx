import SidebarDashboard from "@/components/backOffice/SidebarDashboard";
import ProtectedRoute from "@/components/backOffice/ProtectedRoute";

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
            <ProtectedRoute>
                <SidebarDashboard children={children} />
            </ProtectedRoute>
            </body>
        </html>
    );
}

