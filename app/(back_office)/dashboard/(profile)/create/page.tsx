"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link"

function Input({label, type, placeholder}: {label: string, type?:string, placeholder?: string}){


    return(<div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>

        <input
            type={type ? type : "text"}
            placeholder={placeholder && placeholder}
            className="w-full block py-3 px-2 rounded-lg border border-gray-300 text-sm outline-none"
        />
        
    </div>)
}

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


function BriefcaseIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  );
}

// ✏️ CameraIcon — avec signe + (ajouter une photo)
function CameraIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Corps de la caméra */}
      <path d="M9.4 4a2 2 0 0 0-1.6.8L6.6 6.4a1 1 0 0 1-.8.4H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6h-2v6H4V8.8h1.8a3 3 0 0 0 2.4-1.2L9.4 6h3.2l.4.5V4H9.4z" />
      {/* Objectif */}
      <path d="M12 9.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0 5.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
      {/* Signe plus (+) en haut à droite */}
      <path d="M18 2a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0V7h-2a1 1 0 1 1 0-2h2V3a1 1 0 0 1 1-1z" />
    </svg>
  );
}
function PencilIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
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

function inputClassName(hasError: boolean) {
  return `w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[#1e3a6e]/20 focus:border-[#1e3a6e] ${
    hasError ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"
  }`;
}

// ─── Main Page Component ─────────────────────────────────────────────────────
// Cette page s'insère dans le layout du dashboard (sidebar + header gérés
// par app/(back_office)/dashboard/layout.tsx). Elle ne contient donc QUE
// le contenu propre à "Ajouter un nouveau profil".
export default function CreateProfilePage() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreviewUrl, setPhotoPreviewUrl] = useState<string | null>(null);
  const [photoError, setPhotoError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

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

  function handlePhotoChange(e: ChangeEvent<HTMLInputElement>) {
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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitSuccess(false);
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      // TODO: brancher l'appel API réel (Express) une fois le back prêt.
      console.log("Form submitted:", { ...formData, photoFile });
      await new Promise((resolve) => setTimeout(resolve, 500));
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
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
    <div className="py-6 sm:py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-sm mb-6"> <Link href="/dashboard" className="font-semibold  text-primary">Dashboard</Link> <IoIosArrowForward /><span className="text-gray-700 ">Nouveau profil</span>
        </nav>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6 sm:mb-8">
            Ajouter un nouveau portfolio
        </h1>

        {/* Success message */}
        {submitSuccess && (
            <div className="mb-6 bg-green-50 border border-green-200 text-green-700 rounded-xl px-5 py-3 text-sm font-medium">
            ✅ Profil enregistré avec succès !
            </div>
        )}

        <form onSubmit={handleSubmit}>
            
            <div className="flex flex-col lg:flex-row justify-between gap-2">

                <div className=" bg-white rounded-2xl shadow-sm p-5 flex-1/2">
                    <div className="mb-6">
                        <div className="w-9 h-9 bg-[#e8edf6] rounded-lg flex items-center justify-center text-primary mb-4">
                        <AiOutlineUser />
                        </div>
                    </div>

                    <div className="flex flex-col gap-10">
                        <Input label="Nom et prenom" placeholder="ex: Kombila jean Erick" />
                        <Input label="Email" type="email" placeholder="ex: example@my.email" />
                        <Input label="Lien portfolio" placeholder="ex: http://www.github.io" />
                        <Input label="Numero de telephone" placeholder="ex: +241 074 99 83 16" />
                    </div>
                </div>

                {/* ── Card: Photo de Profil (1/3) ── */}
                <div className="flex-1/2 bg-white rounded-2xl shadow-sm p-6 sm:p-8 flex flex-col items-center h-fit">
                    <h3 className="text-sm font-semibold text-[#1e293b] mb-4">Photo de Profil</h3>

                    <div className="relative mb-3">
                    <div
                        className={`w-28 h-28 rounded-full border-2 border-dashed flex items-center justify-center cursor-pointer transition ${
                        photoPreviewUrl
                            ? "border-[#1e3a6e]/30 bg-[#e8edf6]"
                            : "border-gray-300 bg-[#eef1f9]"
                        }`}
                        onClick={() => fileInputRef.current?.click()}
                    >
                        {photoPreviewUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={photoPreviewUrl}
                            alt="Aperçu"
                            className="w-full h-full rounded-full object-cover"
                        />
                        ) : (
                        <CameraIcon className="w-9 h-9 text-gray-400" />
                        )}
                    </div>

                    {/* Edit button */}
                    <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#1e3a6e] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#2a4f8f] transition"
                    >
                        <PencilIcon className="w-3.5 h-3.5" />
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

                    <p className="text-xs text-gray-500 text-center mt-2 leading-relaxed">
                    Formats acceptés: JPG, PNG.
                    <br />
                    Taille max 5MB.
                    </p>
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
                className={`${inputClassName(
                    !!errors.specialty
                )} appearance-none pr-10 ${
                    !formData.specialty ? "text-gray-400" : "text-[#1e293b]"
                }`}
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
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 bg-[#1e3a6e] text-white px-8 py-3 rounded-xl font-semibold text-sm hover:bg-[#2a4f8f] transition shadow-lg shadow-[#1e3a6e]/20 disabled:opacity-60 disabled:cursor-not-allowed"
            >
                <SaveIcon className="w-5 h-5" />
                {isSubmitting ? "Enregistrement..." : "Enregistrer le profil"}
            </button>
            </div>
        </form>
    </div>
  );
}