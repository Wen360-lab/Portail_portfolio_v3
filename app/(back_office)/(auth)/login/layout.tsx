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
            <body   
                className="h-screen flex items-center justify-center bg-login-admin-form"
                style={{
                    backgroundImage: `linear-gradient(
                    rgba(var(--color-primary), .7),
                    rgba(var(--color-primary), .7)
                    ), url('/bg-login.jpeg')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
                >
                    
                {children}
            </body>
        </html>
    );
}
