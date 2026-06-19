
import type { Metadata } from "next";
// import "@/public/bg-login.jpeg";
import "@/style/tailwind.css";



export const metadata: Metadata = {
  title: "Portail Portfolios | login",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode; }>) 
{
    return (
        <html lang="fr" >
            <body   className="min-h-screen flex items-center justify-center"
            style={{ 
                backgroundImage: "url('/bg-login.jpeg')", 
                backgroundSize: "cover", 
                backgroundPosition: "center" 
            }}>
                {children}
            </body>
        </html>
    );

}
