
import type { ReactNode } from "react";

type IconName =
  | "arrowLeft"
  | "briefcase"
  | "edit"
  | "gear"
  | "mail"
  | "mapPin"
  | "phone";

function Icon({
  name,
  className = "",
}: Readonly<{ name: IconName; className?: string }>) {
  const paths: Record<IconName, ReactNode> = {
    arrowLeft: (
      <>
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </>
    ),
    briefcase: (
      <>
        <path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" />
        <rect x="5" y="6" width="14" height="14" rx="2" />
        <path d="M9 12h6" />
        <path d="M12 9v6" />
      </>
    ),
    edit: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </>
    ),
    gear: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 8a1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 16 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.2.4.6.7 1 .8.3.1.7.1 1 .1H21a2 2 0 1 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15Z" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    mapPin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    phone: (
      <>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.31 1.85.53 2.81.66A2 2 0 0 1 22 16.92Z" />
      </>
    ),
  };

  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function InfoBlock({
  icon,
  label,
  children,
}: Readonly<{
  icon: IconName;
  label: string;
  children: ReactNode;
}>) {
  return (
    <div>
      <p className="text-xs font-bold uppercase leading-6 tracking-[0.16em] text-slate-400">
        {label}
      </p>
      <div className="mt-3 flex items-start gap-4 text-base font-semibold leading-6 text-[#111827]">
        <Icon name={icon} className="mt-1 h-5 w-5 shrink-0 text-primary" />
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
            <Icon name="arrowLeft" className="h-4 w-4" />
            Retour à la liste
          </button>
          <button className="flex h-[43px] items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-white shadow-sm">
            <Icon name="edit" className="h-4 w-4" />
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
              <InfoBlock icon="mail" label="Email professionnel">
                asse@gmail.com
              </InfoBlock>

              <InfoBlock icon="phone" label="Numéro de téléphone">
                +241 66234513
              </InfoBlock>

              <InfoBlock icon="mapPin" label="Localisation">
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
            <Icon name="gear" className="h-5 w-5" />
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
