"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// Countdown – Permanent Black Friday Extension (auto-refreshing)
function useCountdown(hours = 12) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const target = new Date();
      target.setHours(now.getHours() + hours);

      const diff = target.getTime() - now.getTime();

      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(`${h}h ${m}m ${s}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [hours]);

  return timeLeft;
}

export default function Page() {
  const countdown = useCountdown(12);

  // Shopify checkout (tu changeras plus tard)
  const checkoutUrl = "https://ton-shopify-checkout.com";

  const handleBuy = () => {
    window.location.href = checkoutUrl;
  };

  return (
    <main className="bg-slate-950 text-white min-h-screen">
      {/* 🔥 BANNIÈRE BLACK FRIDAY */}
      <div className="w-full bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 py-2 text-center text-xs font-semibold tracking-wide shadow-lg shadow-pink-500/30">
        🎁 BLACK FRIDAY EXTENSION — Offre exceptionnelle : 
        <span className="font-bold"> 538€ → 14,99€</span> — Accès instantané + 2 volumes physiques inclus
      </div>

      {/* 🌐 NAVBAR */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image 
  src="/logo.jpg" 
  alt="Neurology Master Pack Logo" 
  width={42} 
  height={42} 
  priority
            />
            <div>
              <p className="font-semibold text-sm">Neurology Master Pack</p>
              <p className="text-[11px] text-slate-400">
                Ebook + Physique + Podcasts
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs text-slate-300">
            <a href="#pack" className="hover:text-white">Le Pack</a>
            <a href="#sommaire" className="hover:text-white">Sommaire</a>
            <a href="#fonctionnement" className="hover:text-white">Comment ça marche</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>

          <button
            onClick={handleBuy}
            className="hidden md:inline-flex bg-pink-500 px-4 py-2 rounded-md text-xs font-semibold text-white hover:bg-pink-400 transition"
          >
            Obtenir l’offre — 14,99€
          </button>
        </div>
      </header>

      {/* 💥 HERO PREMIUM */}
      <section className="relative overflow-hidden border-b border-slate-800">
        {/* Dégradé premium */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-fuchsia-900 to-black opacity-60"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 flex flex-col md:flex-row gap-12 items-center">
          {/* Texte Hero */}
          <div className="flex-1 space-y-6">
            <p className="text-xs tracking-wider uppercase text-pink-300 font-semibold">
              Pack Neurologie Complet — Edition 2024
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              L’offre Neurologie la plus complète :  
              <span className="text-pink-400"> 538€ → 14,99€</span>
            </h1>

            <p className="text-slate-300 text-sm md:text-base max-w-xl leading-relaxed">
              Accédez immédiatement aux <strong>2 volumes PDF</strong>, 
              recevez les <strong>2 volumes physiques</strong> chez vous, 
              et débloquez les <strong>200 podcasts audio</strong> de neurologie clinique.
            </p>

            {/* Points clés */}
            <ul className="space-y-2 text-sm text-slate-200">
              <li>✔ 2 volumes PDF — Accès instantané</li>
              <li>✔ 200 podcasts — Résumés audio</li>
              <li>✔ 2 volumes physiques — Envoi postal</li>
              <li>✔ Valeur réelle : 538€ → Aujourd'hui 14,99€</li>
            </ul>

            {/* CTA */}
            <button
              onClick={handleBuy}
              className="mt-4 bg-pink-500 hover:bg-pink-400 transition px-8 py-3 text-sm font-bold rounded-md shadow-lg shadow-pink-500/40"
            >
              Obtenir le Pack — 14,99€
            </button>

            {/* Countdown */}
            <p className="text-xs text-pink-300 mt-2">
              ⏳ Offre Black Friday Extension — expire dans : 
              <span className="font-bold"> {countdown}</span>
            </p>
          </div>

          {/* Mockup */}
          <div className="flex-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-pink-500/30 border border-slate-800">
              <Image
                src="/hero-book.png"
                alt="Neurology Book"
                width={500}
                height={700}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* 🎁 SECTION PACK COMPLET */}
      <section id="pack" className="border-b border-slate-800 bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image + Badge */}
          <div className="relative">
            <Image
              src="/hero-book.png"
              width={600}
              height={800}
              alt="Pack Neurologie"
              className="rounded-2xl shadow-2xl shadow-pink-500/30 object-cover"
            />
            <span className="absolute top-4 left-4 bg-pink-500 text-xs font-bold px-3 py-1 rounded-md shadow-lg">
              -97% BLACK FRIDAY EXTENSION
            </span>
          </div>

          {/* Texte */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Le <span className="text-pink-400">Pack Neurologie</span> le plus complet jamais créé
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              Vous recevez : <br />
              ✔ Les 2 volumes PDF (accès immédiat) <br />
              ✔ Les 2 volumes physiques (expédiés chez vous) <br />
              ✔ Les 200 podcasts audio (accès instantané)
            </p>

            {/* Prix */}
            <div className="space-y-1">
              <p className="text-xs text-slate-400">Valeur réelle :</p>
              <p className="text-3xl font-bold">
                <span className="line-through text-slate-500">538€</span>
                <span className="text-pink-400 ml-3">14,99€</span>
              </p>
            </div>

            <button
              onClick={handleBuy}
              className="bg-pink-500 hover:bg-pink-400 transition px-8 py-3 text-sm font-bold rounded-md shadow-lg shadow-pink-500/30"
            >
              Obtenir le Pack — 14,99€
            </button>

            {/* Logos paiement */}
            <div className="flex gap-4 items-center pt-3">
              <Image src="/visa.png" width={40} height={40} alt="Visa" />
              <Image src="/mastercard.png" width={40} height={40} alt="Mastercard" />
              <Image src="/secure.png" width={40} height={40} alt="Secure" />
            </div>
          </div>
        </div>
      </section>


      {/* 📚 SOMMAIRE */}
      <section id="sommaire" className="border-b border-slate-800 bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Sommaire des 2 volumes</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-pink-400">Volume 1</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Approche des symptômes neurologiques</li>
                <li>• Neurologie d’urgence</li>
                <li>• Troubles du mouvement</li>
                <li>• Epilepsie et crises</li>
                <li>• Neuropathies périphériques</li>
                <li>• Maladies démyélinisantes</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-pink-400">Volume 2</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Neuro-oncologie</li>
                <li>• Myopathies et pathologies musculaires</li>
                <li>• AVC — diagnostics et protocoles</li>
                <li>• Neurologie intensive</li>
                <li>• Troubles cognitifs</li>
                <li>• Neuroradiologie clinique</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* 📘 CONTENU DU PACK */}
      <section id="contenu" className="border-b border-slate-800 bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Voici tout ce que vous recevez</h2>

            <ul className="space-y-3 text-sm text-slate-300">
              <li>✔ Les 2 volumes PDF (plus de 3000 pages)</li>
              <li>✔ Les 2 volumes physiques envoyés chez vous</li>
              <li>✔ 200 podcasts audio exclusifs</li>
              <li>✔ Mises à jour gratuites</li>
              <li>✔ Accès illimité</li>
              <li>✔ Garantie satisfaction</li>
            </ul>

            <button
              onClick={handleBuy}
              className="mt-2 bg-pink-500 hover:bg-pink-400 transition px-8 py-3 text-sm font-bold rounded-md"
            >
              Obtenir tout le Pack — 14,99€
            </button>
          </div>

          <div>
            <Image
              src="/doctor-team.jpg"
              width={600}
              height={400}
              alt="Team doctor"
              className="rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </section>


      {/* 🔍 AVANT / APRÈS */}
      <section className="border-b border-slate-800 bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">Avant / Après votre Pack</h2>

          <div className="grid md:grid-cols-2 gap-12">
            
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-pink-400">Avant</h3>
              <ul className="space-y-2 text-sm text-slate-400 mt-4">
                <li>✘ Informations éparpillées</li>
                <li>✘ Pas de format audio</li>
                <li>✘ Pas de support physique</li>
                <li>✘ Difficulté à réviser efficacement</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-pink-400">Après</h3>
              <ul className="space-y-2 text-sm text-slate-300 mt-4">
                <li>✔ Un pack complet PDF + Physique + Audio</li>
                <li>✔ Révisions rapides et efficaces</li>
                <li>✔ Support premium expédié chez vous</li>
                <li>✔ Compréhension renforcée avec les podcasts</li>
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* 📊 COMPARATIF */}
      <section className="border-b border-slate-800 bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">Comparatif</h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm">

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="font-semibold mb-3">Autres livres</h3>
              <ul className="space-y-2 text-slate-400">
                <li>✘ Aucun format audio</li>
                <li>✘ Souvent 1 seul volume</li>
                <li>✘ Pas de version physique incluse</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-pink-500">
              <h3 className="font-semibold text-pink-400 mb-3">Notre Pack</h3>
              <ul className="space-y-2 text-white">
                <li>✔ PDF + Physique + Audio</li>
                <li>✔ 538€ → 14,99€</li>
                <li>✔ Mises à jour</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="font-semibold mb-3">Autres formations</h3>
              <ul className="space-y-2 text-slate-400">
                <li>✘ Prix souvent 150–300€</li>
                <li>✘ Sans support physique</li>
                <li>✘ Pas de podcasts</li>
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* 🚀 COMMENT ÇA MARCHE */}
      <section id="fonctionnement" className="bg-slate-900 py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Comment ça marche ?</h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-3">
              <span className="text-pink-400 text-4xl font-bold">1</span>
              <h3 className="text-xl font-semibold">Vous commandez</h3>
              <p className="text-sm text-slate-400">
                Paiement sécurisé — 14,99€
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-pink-400 text-4xl font-bold">2</span>
              <h3 className="text-xl font-semibold">Accès instantané</h3>
              <p className="text-sm text-slate-400">
                PDF + Podcasts débloqués immédiatement
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-pink-400 text-4xl font-bold">3</span>
              <h3 className="text-xl font-semibold">Livraison physique</h3>
              <p className="text-sm text-slate-400">
                Les 2 volumes vous sont expédiés chez vous
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 🖼️ MINI CARROUSEL */}
      <section className="bg-slate-950 py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Aperçu du Pack</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Image
              src="/hero-book.png"
              width={400}
              height={500}
              alt="Book 1"
              className="rounded-xl shadow-xl object-cover"
            />
            <Image
              src="/doctor-team.jpg"
              width={400}
              height={500}
              alt="Doctors"
              className="rounded-xl shadow-xl object-cover"
            />
            <Image
              src="/device-mockup.png"
              width={400}
              height={500}
              alt="Mockup"
              className="rounded-xl shadow-xl object-cover"
            />
          </div>
        </div>
      </section>


      {/* 💬 TÉMOIGNAGES */}
      <section className="bg-slate-900 py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Ils recommandent le Pack</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 p-6 rounded-xl shadow-xl">
              <p className="text-slate-300 text-sm leading-relaxed">
                “Ce pack m’a accompagné pendant toutes mes gardes. Les podcasts sont incroyablement utiles pour revoir les points clés rapidement.”
              </p>
              <p className="mt-4 text-xs text-slate-500 font-semibold">— Dr. Karim M., Neurologue</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl shadow-xl">
              <p className="text-slate-300 text-sm leading-relaxed">
                “Les 2 volumes en PDF et le support physique, c’est juste parfait. La réduction est incroyable pour la valeur reçue.”
              </p>
              <p className="mt-4 text-xs text-slate-500 font-semibold">— Amina S., Résidente en neurologie</p>
            </div>
          </div>
        </div>
      </section>


      {/* ❓ FAQ */}
      <section id="faq" className="bg-slate-950 py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Questions fréquentes</h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            <details className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <summary className="cursor-pointer text-sm font-semibold">Quand vais-je recevoir les PDF ?</summary>
              <p className="text-xs text-slate-400 mt-2">
                Immédiatement après le paiement. Vous recevez un lien de téléchargement instantané.
              </p>
            </details>

            <details className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <summary className="cursor-pointer text-sm font-semibold">Les volumes physiques sont-ils vraiment inclus ?</summary>
              <p className="text-xs text-slate-400 mt-2">
                Oui, les 2 volumes physiques sont inclus et envoyés directement à votre adresse.
              </p>
            </details>

            <details className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <summary className="cursor-pointer text-sm font-semibold">Les podcasts sont-ils accessibles hors-ligne ?</summary>
              <p className="text-xs text-slate-400 mt-2">
                Oui, vous pouvez les télécharger ou les écouter à tout moment depuis votre appareil.
              </p>
            </details>

            <details className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <summary className="cursor-pointer text-sm font-semibold">Pourquoi une réduction aussi importante ?</summary>
              <p className="text-xs text-slate-400 mt-2">
                Il s’agit d’une offre Black Friday Extension : un tarif exceptionnel prolongé.
              </p>
            </details>
          </div>
        </div>
      </section>


      {/* 🧱 FOOTER */}
      <footer className="bg-slate-950 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-slate-500 space-y-3">
          <p>© {new Date().getFullYear()} Neurology Master Pack — Tous droits réservés</p>
          <p>Contact : support@neurologypack.com</p>
          <p>Mentions légales • Politique de confidentialité</p>
        </div>
      </footer>


      {/* 🔥 STICKY FOOTER CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-pink-600 to-purple-600 py-4 px-4 flex items-center justify-between shadow-xl md:hidden">
        <p className="text-xs font-semibold">
          Pack Neurologie — <span className="text-white">14,99€</span>
        </p>
        <button
          onClick={handleBuy}
          className="bg-white text-pink-600 font-bold text-xs px-4 py-2 rounded-md"
        >
          Acheter →
        </button>
      </div>

    </main>
  );
}
