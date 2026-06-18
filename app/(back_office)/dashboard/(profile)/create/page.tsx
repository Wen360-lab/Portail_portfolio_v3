"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

// ─── Types ──────────────────────────────────────────────────────────────────
interface FormData {
  fullName: string;
  portfolioLink: string;
  email: string;
  phone: string;
  specialty: string;
  activateAccess: boolean;
}

interface FormErrors {
  fullName?: string;
  portfolioLink?: string;
  email?: string;
  phone?: string;
  specialty?: string;
}

// ─── Constants ───────────────────────────────────────────────────────────────
const INITIAL_FORM_DATA: FormData = {
  fullName: "",
  portfolioLink: "",
  email: "",
  phone: "",
  specialty: "",
  activateAccess: true,
};

const SPECIALTIES = [
  "Développeur Frontend",
  "Développeur Backend",
  "Développeur Fullstack",
  "Designer UI/UX",
  "Chef de Projet",
  "DevOps",
  "Data Scientist",
];

function UserIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 12a4 4 0 100-8 4 4 0 000 8z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 20a7 7 0 0114 0"
      />
    </svg>
  );
}

function BriefcaseIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  );
}

// ✏️ CameraIcon MODIFIÉE — Avec signe + (ajouter une photo)
function CameraIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      {/* Corps de la caméra */}
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      {/* Objectif */}
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      {/* Signe plus (+) */}
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8v2m0 0v2m0-2h2m-2 0h-2" />
    </svg>
  );
}

function PencilIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
  );
}

function SaveIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
    </svg>
  );
}

function ChevronDownIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function LogoutIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
    </svg>
  );
}

function BellIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function AppsIcon({ className = "w-4 h-4" }: { className?: string }) {
  const dots = [5.5, 12, 18.5];

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {dots.map((cy) =>
        dots.map((cx) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.25" />
        ))
      )}
    </svg>
  );
}

function MenuIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

// Icône pour desktop (cercle bleu, user blanc)
function UserCircleIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="18" fill="#1e3a6e" />
      <circle cx="18" cy="13.5" r="5.5" fill="white" />
      <path
        d="M8.5 31C10.1 24.8 13.8 21.3 18 21.3C22.2 21.3 25.9 24.8 27.5 31H8.5Z"
        fill="white"
      />
    </svg>
  );
}

// Icône pour mobile (cercle blanc, user bleu) - comme la maquette
function UserCircleIconMobile({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="18" fill="white" />
      <circle cx="18" cy="13.5" r="5.5" fill="#1e3a6e" />
      <path
        d="M8.5 31C10.1 24.8 13.8 21.3 18 21.3C22.2 21.3 25.9 24.8 27.5 31H8.5Z"
        fill="#1e3a6e"
      />
    </svg>
  );
}

// ─── Toggle Component ────────────────────────────────────────────────────────
function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (val: boolean) => void;
  label: string;
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
          checked ? "bg-[#1d4ed8]" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow-sm transition-transform duration-300 ${
            checked ? "translate-x-[18px]" : "translate-x-[3px]"
          }`}
        />
      </button>
      
      <span className="text-[#1e293b] text-sm font-medium">{label}</span>
    </label>
  );
}
// ─── Main Page Component ─────────────────────────────────────────────────────
export default function CreateProfilePage() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreviewUrl, setPhotoPreviewUrl] = useState<string | null>(null);
  const [photoError, setPhotoError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // ─── Handlers ──────────────────────────────────────────────────────────────
  function handleChange(field: keyof FormData, value: string | boolean) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof FormErrors];
        return next;
      });
    }
  }

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setPhotoError("");

    if (!file) return;

    const validTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!validTypes.includes(file.type)) {
      setPhotoError("Formats acceptés : JPG, PNG uniquement.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setPhotoError("Taille max : 5 MB.");
      return;
    }

    setPhotoFile(file);
    const url = URL.createObjectURL(file);
    setPhotoPreviewUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return url;
    });
  }

  function validate(): boolean {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Le nom complet est requis.";
    if (!formData.email.trim()) {
      newErrors.email = "L'adresse email est requise.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide.";
    }
    if (!formData.phone.trim()) newErrors.phone = "Le numéro de téléphone est requis.";
    if (!formData.specialty) newErrors.specialty = "Veuillez sélectionner une spécialité.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    console.log("Form submitted:", { ...formData, photoFile });
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 3000);
  }

  function handleCancel() {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    setPhotoError("");
    setPhotoFile(null);
    setPhotoPreviewUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
    if (fileInputRef.current) fileInputRef.current.value = "";
    setSubmitSuccess(false);
  }

  // ─── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#f0f2f8] flex">
      {/* ═══════════════════════════════════════════════════════════════════════
          SIDEBAR — Desktop only
      ═══════════════════════════════════════════════════════════════════════ */}
      <aside className="hidden lg:flex flex-col w-64 bg-[#1e3a6e] text-white fixed inset-y-0 left-0 z-40">
        {/* Logo */}
        <div className="px-6 py-6">
          <h1 className="text-xl font-extrabold tracking-wide">
            <span className="text-white">PORTAIL</span>{" "}
            <span className="font-light">Portfolio</span>
          </h1>
        </div>

        {/* Accueil Button */}
        <div className="px-4 mb-4">
          <Link
            href="/back_office/dashboard"
            className="flex items-center justify-between bg-white text-[#1e3a6e] rounded-xl px-4 py-3 font-semibold hover:bg-gray-100 transition"
          >
            <span>Accueil</span>
            <LogoutIcon className="w-5 h-5" />
          </Link>
        </div>

        {/* Admin Card */}
        <div className="mx-4 mb-6 bg-white rounded-2xl p-5 text-[#1e293b]">
          <div className="bg-[#1e3a6e] text-white rounded-xl px-4 py-3 mb-4 font-bold text-center">
            Administrateur P.
          </div>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Nom</p>
              <p className="font-semibold text-[#1e3a6e]">Administrateur P.</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Prénom</p>
              <p className="font-semibold text-[#1e3a6e]">Administrateur P.</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Adresse Email</p>
              <p className="font-semibold text-[#1e3a6e]">AdminP@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Déconnexion */}
        <div className="px-4 pb-6">
          <Link
            href="/back_office/auth/login"
            className="flex items-center justify-between bg-white text-[#1e3a6e] rounded-xl px-4 py-3 font-semibold hover:bg-gray-100 transition"
          >
            <span>Déconnexion</span>
            <LogoutIcon className="w-5 h-5" />
          </Link>
        </div>
      </aside>

      {/* ═══════════════════════════════════════════════════════════════════════
          MOBILE SIDEBAR OVERLAY
      ═══════════════════════════════════════════════════════════════════════ */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <aside className="relative w-72 bg-[#1e3a6e] text-white flex flex-col animate-slide-in">
            <div className="px-6 py-6">
              <h1 className="text-xl font-extrabold tracking-wide">
                <span className="text-white">PORTAIL</span>{" "}
                <span className="font-light">Portfolio</span>
              </h1>
            </div>
            <div className="px-4 mb-4">
              <Link
                href="/back_office/dashboard"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center justify-between bg-white text-[#1e3a6e] rounded-xl px-4 py-3 font-semibold"
              >
                <span>Accueil</span>
                <LogoutIcon className="w-5 h-5" />
              </Link>
            </div>
            <div className="mx-4 mb-6 bg-white rounded-2xl p-5 text-[#1e293b]">
              <div className="bg-[#1e3a6e] text-white rounded-xl px-4 py-3 mb-4 font-bold text-center">
                Administrateur P.
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Nom</p>
                  <p className="font-semibold text-[#1e3a6e]">Administrateur P.</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Prénom</p>
                  <p className="font-semibold text-[#1e3a6e]">Administrateur P.</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Adresse Email</p>
                  <p className="font-semibold text-[#1e3a6e]">AdminP@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="flex-1" />
            <div className="px-4 pb-6">
              <Link
                href="/back_office/auth/login"
                className="flex items-center justify-between bg-white text-[#1e3a6e] rounded-xl px-4 py-3 font-semibold"
              >
                <span>Déconnexion</span>
                <LogoutIcon className="w-5 h-5" />
              </Link>
            </div>
          </aside>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          MAIN CONTENT
      ═══════════════════════════════════════════════════════════════════════ */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* ── Top Navbar MOBILE (BLEU) ─── */}
        <header className="lg:hidden bg-[#1e3a6e] px-4 py-4 flex items-center justify-between sticky top-0 z-30 shadow-md">
          <button
            className="text-white"
            onClick={() => setSidebarOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <MenuIcon className="w-7 h-7" />
          </button>
          
          <h1 className="text-lg font-extrabold tracking-wide text-white absolute left-1/2 -translate-x-1/2">
            <span>PORTAIL</span>{" "}
            <span className="font-light">Portfolio</span>
          </h1>

          <button type="button" aria-label="Profil">
            <UserCircleIconMobile className="w-10 h-10" />
          </button>
        </header>

        {/* ── Top Navbar DESKTOP (BLANC) ─── */}
        <header className="hidden lg:flex bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4 items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <h2 className="text-lg sm:text-xl font-bold text-[#1e293b]">Profil Administrateur</h2>
            <nav className="hidden md:flex items-center gap-6 ml-6 text-sm text-gray-500">
              <Link href="#" className="hover:text-[#1e3a6e] transition">Directory</Link>
              <Link href="#" className="hover:text-[#1e3a6e] transition">Permissions</Link>
              <Link href="#" className="hover:text-[#1e3a6e] transition">Reports</Link>
            </nav>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Notifications"
              className="hidden sm:flex h-7 w-7 items-center justify-center text-[#334155] hover:text-[#1e3a6e] transition"
            >
              <BellIcon className="w-[15px] h-[15px]" />
            </button>

            <button
              type="button"
              aria-label="Applications"
              className="hidden sm:flex h-7 w-7 items-center justify-center text-[#334155] hover:text-[#1e3a6e] transition"
            >
              <AppsIcon className="w-[15px] h-[15px]" />
            </button>

            <div className="w-px h-8 bg-gray-300 hidden sm:block" />

            <button type="button" className="text-[#1e3a6e]">
              <UserCircleIcon className="w-[22px] h-[22px]" />
            </button>
          </div>
        </header>

        {/* ─── Page Content ─── */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-2">
            <Link href="/back_office/dashboard" className="hover:text-[#1e3a6e] transition">
              Dashboard
            </Link>
            <span className="mx-2">›</span>
           <span className="text-blue-700 font-semibold">Nouveau profil</span>
          </nav>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1e293b] mb-6 sm:mb-8">
            Ajouter un nouveau profil
          </h1>

          {/* Success message */}
          {submitSuccess && (
            <div className="mb-6 bg-green-50 border border-green-200 text-green-700 rounded-xl px-5 py-3 text-sm font-medium">
              ✅ Profil enregistré avec succès !
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* ═══════════════════════════════════════════════════════════════
                DESKTOP LAYOUT: 2 columns
            ═══════════════════════════════════════════════════════════════ */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-6">
              {/* ── Card: Infos (2/3) ── */}
              <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <div className="mb-6">
                  <div className="w-9 h-9 bg-[#e8edf6] rounded-lg flex items-center justify-center text-[#0057ff] mb-4">
                     <UserIcon className="w-[18px] h-[18px]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Nom Complet */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                      Nom Complet
                    </label>
                    <input
                      type="text"
                      placeholder="ex: Jean Valjean"
                      value={formData.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[#1e3a6e]/20 focus:border-[#1e3a6e] ${
                        errors.fullName ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Lien Portfolio */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                      Lien Portfolio
                    </label>
                    <input
                      type="text"
                      placeholder="ex: fjjgk./LPjjdj"
                      value={formData.portfolioLink}
                      onChange={(e) => handleChange("portfolioLink", e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[#1e3a6e]/20 focus:border-[#1e3a6e]"
                    />
                  </div>

                  {/* Adresse Email */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                      Adresse Email
                    </label>
                    <input
                      type="email"
                      placeholder="jean.v@entreprise.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[#1e3a6e]/20 focus:border-[#1e3a6e] ${
                        errors.email ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Numéro de Téléphone */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                      Numéro de Téléphone
                    </label>
                    <input
                      type="tel"
                      placeholder="+33 6 00 00 00 00"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[#1e3a6e]/20 focus:border-[#1e3a6e] ${
                        errors.phone ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* ── Card: Photo de Profil (1/3) ── */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col items-center">
                <h3 className="text-sm font-semibold text-[#1e293b] mb-6">Photo de Profil</h3>

                <div className="relative mb-4">
                  <div
                    className={`w-36 h-36 rounded-full border-2 border-dashed flex items-center justify-center cursor-pointer transition ${
                      photoPreviewUrl
                        ? "border-[#1e3a6e]/30 bg-[#e8edf6]"
                        : "border-gray-300 bg-[#eef1f9]"
                    }`}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {photoPreviewUrl ? (
                      <img
                        src={photoPreviewUrl}
                        alt="Aperçu"
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <CameraIcon className="w-12 h-12 text-gray-400" />
                    )}
                  </div>

                  {/* Edit button */}
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute -bottom-1 -right-1 w-9 h-9 bg-[#1e3a6e] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#2a4f8f] transition"
                  >
                    <PencilIcon className="w-4 h-4" />
                  </button>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/jpg,image/png"
                  onChange={handlePhotoChange}
                  className="hidden"
                />

                {photoError && (
                  <p className="text-red-500 text-xs text-center mt-2">{photoError}</p>
                )}

                <p className="text-xs text-gray-500 text-center mt-3">
                  Formats acceptés : JPG, PNG.
                  <br />
                  Taille max 5MB.
                </p>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                MOBILE LAYOUT: stacked
            ══════════════════════════════════════════════════════════════ */}
            <div className="lg:hidden space-y-6">
              {/* ─ Card: Photo + Infos ── */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
                {/* Photo centered */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div
                      className={`w-32 h-32 rounded-full border-2 border-dashed flex items-center justify-center cursor-pointer transition ${
                        photoPreviewUrl
                          ? "border-[#1e3a6e]/30 bg-[#e8edf6]"
                          : "border-gray-300 bg-[#eef1f9]"
                      }`}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      {photoPreviewUrl ? (
                        <img
                          src={photoPreviewUrl}
                          alt="Aperçu"
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <CameraIcon className="w-10 h-10 text-gray-400" />
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute -bottom-1 -right-1 w-9 h-9 bg-[#1e3a6e] rounded-full flex items-center justify-center text-white shadow-lg"
                    >
                      <PencilIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/jpg,image/png"
                  onChange={handlePhotoChange}
                  className="hidden"
                />

                {photoError && (
                  <p className="text-red-500 text-xs text-center mb-4">{photoError}</p>
                )}

                {/* Form fields stacked */}
                <div className="space-y-4">
                  {/* Nom Complet */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                      Nom Complet
                    </label>
                    <input
                      type="text"
                      placeholder="ex: Jean Valjean"
                      value={formData.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[#1e3a6e]/20 focus:border-[#1e3a6e] ${
                        errors.fullName ? "border-red-400 bg-red-50" : "border-gray-200"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Adresse Email */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                      Adresse Email
                    </label>
                    <input
                      type="email"
                      placeholder="jean.v@entreprise.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[#1e3a6e]/20 focus:border-[#1e3a6e] ${
                        errors.email ? "border-red-400 bg-red-50" : "border-gray-200"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Lien Portfolio */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                      Lien Portfolio
                    </label>
                    <input
                      type="text"
                      placeholder="ex: fjjgk./LPjjdj"
                      value={formData.portfolioLink}
                      onChange={(e) => handleChange("portfolioLink", e.target.value)}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[#1e3a6e]/20 focus:border-[#1e3a6e]"
                    />
                  </div>

                  {/* Numéro de Téléphone */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                      Numéro de Téléphone
                    </label>
                    <input
                      type="tel"
                      placeholder="+33 6 00 00 00 00"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[#1e3a6e]/20 focus:border-[#1e3a6e] ${
                        errors.phone ? "border-red-400 bg-red-50" : "border-gray-200"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* ── Card: Spécialité + Toggle ── */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
                <div className="space-y-5">
                  {/* Spécialité */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                      Spécialité
                    </label>
                    <div className="relative">
                      <select
                        value={formData.specialty}
                        onChange={(e) => handleChange("specialty", e.target.value)}
                        className={`w-full appearance-none rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[#1e3a6e]/20 focus:border-[#1e3a6e] bg-white pr-10 ${
                          errors.specialty ? "border-red-400 bg-red-50" : "border-gray-200"
                        } ${!formData.specialty ? "text-gray-400" : "text-[#1e293b]"}`}
                      >
                        <option value="" disabled>
                          Sélectionnez une spécialité
                        </option>
                        {SPECIALTIES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    {errors.specialty && (
                      <p className="text-red-500 text-xs mt-1">{errors.specialty}</p>
                    )}
                  </div>

                  {/* Toggle */}
                  <div className="border border-gray-200 rounded-xl px-4 py-3">
                    <Toggle
                      checked={formData.activateAccess}
                      onChange={(val) => handleChange("activateAccess", val)}
                      label="Activer l'accès au portail dès la création"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                DESKTOP: Spécialité card (full width, below the 2-col grid)
            ═══════════════════════════════════════════════════════════════ */}
            <div className="hidden lg:block mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-[#e8edf6] rounded-xl flex items-center justify-center text-[#1e3a6e]">
                  <BriefcaseIcon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#1e293b]">Spécialité</h3>
              </div>

              <div className="relative max-w-xl">
                <select
                  value={formData.specialty}
                  onChange={(e) => handleChange("specialty", e.target.value)}
                  className={`w-full appearance-none rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[#1e3a6e]/20 focus:border-[#1e3a6e] bg-white pr-10 ${
                    errors.specialty ? "border-red-400 bg-red-50" : "border-gray-200"
                  } ${!formData.specialty ? "text-gray-400" : "text-[#1e293b]"}`}
                >
                  <option value="" disabled>
                    Sélectionnez une spécialité
                  </option>
                  {SPECIALTIES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              {errors.specialty && (
                <p className="text-red-500 text-xs mt-1">{errors.specialty}</p>
              )}

              {/* Divider */}
              <div className="border-t border-gray-100 my-6" />

              {/* Toggle */}
              <Toggle
                checked={formData.activateAccess}
                onChange={(val) => handleChange("activateAccess", val)}
                label="Activer l'accès au portail dès la création"
              />
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                ACTION BUTTONS
            ═══════════════════════════════════════════════════════════════ */}
            <div className="mt-8 sm:mt-10 border-t border-gray-200 pt-6 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-3 text-sm font-semibold text-gray-600 hover:text-[#1e3a6e] transition rounded-xl hover:bg-gray-100"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#1e3a6e] text-white px-8 py-3 rounded-xl font-semibold text-sm hover:bg-[#2a4f8f] transition shadow-lg shadow-[#1e3a6e]/20"
              >
                <SaveIcon className="w-5 h-5" />
                Enregistrer le profil
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}