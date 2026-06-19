
import type { ReactNode } from "react";
import {
  ArrowLeft,
  Mail,
  MapPin,
  Pencil,
  Phone,
  Settings,
  type LucideIcon,
} from "lucide-react";

function InfoBlock({
  icon,
  label,
  children,
}: Readonly<{
  icon: LucideIcon;
  label: string;
  children: ReactNode;
}>) {
  const Icon = icon;

  return (
    <div>
      <p className="text-xs font-bold uppercase leading-6 tracking-[0.16em] text-slate-400">
        {label}
      </p>
      <div className="mt-3 flex items-start gap-4 text-base font-semibold leading-6 text-[#111827]">
        <Icon className="mt-1 h-5 w-5 shrink-0 text-primary" />
        <div>{children}</div>
      </div>
    </div>
  );
}

export default function ShowProfilePage() {
  return (
    <section className="mx-auto max-w-[1180px]">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Dashboard <span className="mx-2 text-slate-400">›</span>
            <span className="font-semibold text-primary">Détails du profil</span>
          </p>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#071126]">
            Détails du Profil
          </h2>
          <p className="mt-3 text-sm font-medium text-slate-500">
            Directory <span className="mx-2 text-slate-400">›</span>
            <span className="font-bold text-primary">ASSE Ulrich</span>
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row lg:pt-12">
          <button className="flex h-[43px] items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm">
            <ArrowLeft className="h-4 w-4" />
            Retour à la liste
          </button>
          <button className="flex h-[43px] items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-white shadow-sm">
            <Pencil className="h-4 w-4" />
            Modifier le profil
          </button>
        </div>
      </div>

      <article className="mt-10 rounded-2xl border border-slate-200 bg-white px-8 py-8 shadow-sm md:px-10 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[190px_1fr] xl:grid-cols-[210px_1fr]">
          <div className="flex flex-col items-center">
            <div className="flex h-[190px] w-[190px] items-center justify-center overflow-hidden rounded-xl bg-[radial-gradient(circle_at_50%_20%,#f1f5f9_0,#334155_35%,#111827_100%)] text-xs text-white shadow-xl shadow-slate-300/70">
              img
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-5 py-2 text-xs font-bold text-emerald-700 ring-1 ring-emerald-100">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Actif
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:items-start">
            <div className="lg:pl-12">
              <h3 className="text-3xl font-bold leading-tight text-[#071126]">
                ASSE Ulrich
              </h3>
              <p className="mt-2 text-lg font-normal text-slate-500">
                 Développeur Web Junior
              </p>
            </div>

            <div className="grid gap-x-16 gap-y-8 sm:grid-cols-2">
              <InfoBlock icon={Mail} label="Email professionnel">
                asse@gmail.com
              </InfoBlock>

              <InfoBlock icon={Phone} label="Numéro de téléphone">
                +241 66234513
              </InfoBlock>

              <InfoBlock icon={MapPin} label="Localisation">
                Libreville,
                <br />
                Gabon
              </InfoBlock>

            </div>
          </div>
        </div>
      </article>

      <article className="mt-8 min-h-[255px] rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#edf2ff] text-primary">
            <Settings className="h-5 w-5" />
         </span>
          <h3 className="text-2xl font-bold text-[#071126]">Description</h3>
        </div>
        <p className="mt-7 max-w-[1030px] text-sm font-normal leading-7 text-slate-600">
          Développeur web junior à l’école 241, passionné de la création de
          design UI/UX. Expert en gestion de projets complexes de transformation
          digitale et optimisation des processus métier pour les grandes
          entreprises. Spécialisé dans les méthodologies Agiles.
        </p>
      </article>
    </section>
  );
}
