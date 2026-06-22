import SidebarDashboard from "@/components/backOffice/SidebarDashboard";
import ProtectedRoute from "@/components/backOffice/ProtectedRoute";

import type { Metadata } from "next";
import "@/style/tailwind.css";



export const metadata: Metadata = {
  title: "Portail Portfolios | admin",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode; }>) 
{
    return (
        <html lang="fr" >
           <body className="bg-gray-100 font-poppins font-medium">
            <ProtectedRoute>
                <SidebarDashboard children={children} />
            </ProtectedRoute>
            </body>
        </html>
    );
}
