"use client";

import { contactus } from "@/content/general";
import { ContactUsPayload } from "@/utils/interfaces";
import { montserratFont, latoFont } from "@/utils/fonts";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

interface FormContactInputs {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  message: string;
}

export default function ContactUsForm() {
  const router = useRouter();

  const [contactInputs, setContactInputs] = useState<FormContactInputs>({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleContactInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const triggerToaster = (type: string, message: string) => {
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    }
  };

  const handleSendEmail = async (args: ContactUsPayload) => {
    try {
      setLoading(true);
      const response = await fetch("/api/mailing/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(args),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(data.message.message);
        triggerToaster("error", "Erreur de configuration de serveur");
        throw new Error(data.message.message);
      }
      triggerToaster("success", "Votre email a été envoyé avec succès");
      setContactInputs({
        nom: "",
        prenom: "",
        telephone: "",
        email: "",
        message: "",
      });
      setLoading(false);
      // Optional: Redirect or just clear form
      // setTimeout(() => router.replace("/"), 2750);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (
      contactInputs.nom !== "" &&
      contactInputs.email !== "" &&
      contactInputs.message !== ""
    ) {
      if (!loading) {
        await handleSendEmail(contactInputs);
      }
    } else {
      triggerToaster(
        "error",
        "Veuillez remplir les champs obligatoires (Nom, Email, Message)"
      );
    }
  };

  return (
    <div className="w-full bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
      <div className="mb-8">
        <h3
          className={`${montserratFont.className} text-2xl font-bold text-slate-900 mb-2`}
        >
          Envoyez-nous un message
        </h3>
        <p className={`${latoFont.className} text-slate-500`}>
          {contactus.description ||
            "Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais."}
        </p>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              className={`${montserratFont.className} text-sm font-semibold text-slate-900 block`}
            >
              Nom <span className="text-purple-600">*</span>
            </label>
            <input
              name="nom"
              type="text"
              placeholder="Votre nom"
              className={`${latoFont.className} w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all placeholder:text-slate-400 text-slate-900`}
              value={contactInputs.nom}
              onChange={handleContactInputChange}
            />
          </div>

          <div className="space-y-2">
            <label
              className={`${montserratFont.className} text-sm font-semibold text-slate-900 block`}
            >
              Prénom
            </label>
            <input
              name="prenom"
              type="text"
              placeholder="Votre prénom"
              className={`${latoFont.className} w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all placeholder:text-slate-400 text-slate-900`}
              value={contactInputs.prenom}
              onChange={handleContactInputChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              className={`${montserratFont.className} text-sm font-semibold text-slate-900 block`}
            >
              Email <span className="text-purple-600">*</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="votre@email.com"
              className={`${latoFont.className} w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all placeholder:text-slate-400 text-slate-900`}
              value={contactInputs.email}
              onChange={handleContactInputChange}
            />
          </div>

          <div className="space-y-2">
            <label
              className={`${montserratFont.className} text-sm font-semibold text-slate-900 block`}
            >
              Téléphone
            </label>
            <input
              name="telephone"
              type="tel"
              placeholder="06 00 00 00 00"
              className={`${latoFont.className} w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all placeholder:text-slate-400 text-slate-900`}
              value={contactInputs.telephone}
              onChange={handleContactInputChange}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            className={`${montserratFont.className} text-sm font-semibold text-slate-900 block`}
          >
            Message <span className="text-purple-600">*</span>
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Comment pouvons-nous vous aider ?"
            className={`${latoFont.className} w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all placeholder:text-slate-400 text-slate-900 resize-none`}
            value={contactInputs.message}
            onChange={handleContactInputChange}
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-purple-600/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="flex justify-center items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-75"></span>
              <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-150"></span>
            </div>
          ) : (
            <span
              className={`${montserratFont.className} tracking-wider uppercase text-sm`}
            >
              Envoyer le message
            </span>
          )}
        </button>
      </form>
    </div>
  );
}
