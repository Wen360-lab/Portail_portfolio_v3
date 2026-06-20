"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa6";
import { VscSaveAll } from "react-icons/vsc";
import { CiCamera } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import Link from "next/link"





/**
 * genere les input elements du formulaires
 * 
 * @param  
 * @returns 
 */
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

/**
 * Tableaux de toutes les spécialités des dévloppeurs
 */
const SPECIALTIES = [
  "Développeur Frontend",
  "Développeur Backend",
  "Développeur Fullstack",
  "Designer UI/UX",
  "Chef de Projet",
  "DevOps",
  "Data Scientist",
];


/**
 * composant creant la checkbox switchable
 * @param param  
 * @returns 
 */
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
            checked ? "translate-x-4.5]" : "translate-x-3.75"
          }`}
        />
      </button>
      <span className="text-[#1e293b] text-sm font-medium">{label}</span>
    </label>
  );
}

/**
 * Genere les class tailwind css dynamiquement pour les select elements
 * @param {boolean} hasError
 * @returns
 */
function inputClassName(hasError: boolean) {
    return `w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-primary
        ${
        hasError ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"
    }`;
}


/**
 * Page creation d'un portfolio
 * @returns 
 */
export default function EditProfilePage() {
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

  /**
   * Renisialize les champs du formulaire
   */
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
        <nav className="flex items-center gap-1 text-sm mb-6"> <Link href="/dashboard" className="font-semibold  text-primary">Dashboard</Link> <IoIosArrowForward /><span className="text-gray-700 ">Modifier le profil</span>
        </nav>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6 sm:mb-8">
            Modifier le portfolio
        </h1>

        {/* Success message */}
        {submitSuccess && (
            <div className="mb-6 bg-green-50 border border-green-200 text-green-700 rounded-xl px-5 py-3 text-sm font-medium">
            ✅ Profil enregistré avec succès !
            </div>
        )}

        <form onSubmit={handleSubmit}>
            
            <div className="flex flex-col md:flex-row justify-between gap-6">

                <div className=" bg-white rounded-2xl shadow-sm p-5 md:flex-1/2">
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
                <div className="md:flex-1/2 bg-white rounded-2xl shadow-sm p-6 sm:p-8 flex flex-col items-center h-fit">
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
                        <CiCamera className="w-9 h-9 text-gray-400" />
                        )}
                    </div>

                    {/* Edit button */}
                    <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#1e3a6e] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#2a4f8f] transition"
                    >
                        <FaRegEdit className="w-3.5 h-3.5" />
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

        

            {/* specilaites select */}
            <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-[#e8edf6] rounded-xl flex items-center justify-center text-[#1e3a6e]">
                   <HiOutlineBriefcase />
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
                <FaChevronDown className="text-gray-400  absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {errors.specialty && (
                <p className="text-red-500 text-xs mt-1">{errors.specialty}</p>
            )}


            {/* checkbox */}
            <div className="border-t border-gray-100 my-6" />
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
                    type="reset"
                    onClick={handleCancel}
                    className="px-6 py-3 text-sm font-semibold text-gray-600 hover:text-primary bg-white
                    transition rounded-xl cursor-pointer"
                >
                    Annuler
                </button>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 
                    rounded-xl font-semibold text-sm hover:opacity-90 transition shadow-lg  cursor-pointer
                    shadow-[#1e3a6e]/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    <VscSaveAll />
                    Modifier le profil
                </button>
            </div>
        </form>
    </div>
  );
}