import type { Metadata } from "next";
import "@/style/tailwind.css";

export const metadata: Metadata = {
  title: "Portail Portfolios | administration",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 font-poppins font-medium">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-primary text-white py-6 px-5 flex-shrink-0">
            <div className="flex flex-col h-full justify-between">
              <div className="flex flex-col gap-4">
                <div className="mb-6 gap-3 flex">
                  <span className="font-holtwood text-xl">PORTAIL</span>
                  <span className="text-xl">Portfolio</span>
                </div>
                <button className="flex justify-center items-center text-center font-semibold gap-2 bg-white text-primary px-4 py-2 rounded-lg w-full cursor-pointer shadow">
                  Accueil
                </button>
              </div>

              <div className="bg-white rounded-lg overflow-hidden">
                <div className="bg-primary text-white text-center py-8 font-bold m-4 rounded-t-lg">
                  Administrateur P.
                </div>
                <div className="p-4 flex flex-col gap-4">
                  <div>
                    <p className="text-primary font-bold text-sm">Nom</p>
                    <p className="text-gray-600 text-sm">Administrateur P.</p>
                  </div>
                  <div>
                    <p className="text-primary font-bold text-sm">Prénom</p>
                    <p className="text-gray-600 text-sm">Administrateur P.</p>
                  </div>
                  <div>
                    <p className="text-primary font-bold text-sm">Adresse email</p>
                    <p className="text-gray-600 text-sm">AdminP@gmail.com</p>
                  </div>
                </div>
              </div>

              <button className="flex justify-center items-center text-center font-semibold bg-white text-primary px-4 py-2 rounded-lg w-full cursor-pointer shadow">
                Déconnexion
              </button>
            </div>
          </aside>

          {/* Contenu principal */}
          <div className="flex flex-col flex-1 min-w-0">
            {/* Header */}
            <header className="bg-white shadow-sm px-6 py-2 sticky top-0 z-10">
              <div className="flex justify-between">
                <div className="flex items-center gap-4 py-3">
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Rechercher"
                      className="rounded-full px-4 py-3 outline-none text-sm border border-gray-400 w-full"
                    />
                  </div>
                </div>

                <div className="flex gap-2 justify-center items-center">
                  <div className="w-12 h-12 rounded-full flex justify-center items-center text-white bg-primary"></div>
                  <div className="flex-col gap-0.5">
                    <p className="text-base font-medium">Administrateur</p>
                    <p className="text-sm text-gray-600">Admin@gmail.com</p>
                  </div>
                </div>
              </div>
            </header>

            {/* Main content */}
            <main className="flex-1 p-6 overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}