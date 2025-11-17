"use client";

import { Facebook, Instagram, Linkedin, Send, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0f1623] border-t border-gray-200 dark:border-gray-800 mt-32">
      
      {/* GRID 3 COLOANE */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* COLOANA 1 – BRAND */}
        <div>
          <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">SavePay</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
            Chitanțe digitale inteligente. Rapid. Modern. Fără hârtie.
          </p>

          <div className="flex gap-4 mt-6">
            <a href="#" className="footer-social"><Facebook size={22} /></a>
            <a href="#" className="footer-social"><Instagram size={22} /></a>
            <a href="#" className="footer-social"><Linkedin size={22} /></a>
          </div>
        </div>

        {/* COLOANA 2 – NAVIGARE */}
        <div>
          <h4 className="footer-title">Navigare</h4>
          <ul className="footer-list">
            <li><a href="/" className="footer-link">Acasă</a></li>
            <li><a href="/cum-functioneaza" className="footer-link">Cum funcționează</a></li>
            <li><a href="/preturi" className="footer-link">Prețuri</a></li>
            <li><a href="/parteneri" className="footer-link">Parteneri</a></li>
            <li><a href="/roadmap" className="footer-link">Roadmap</a></li>
            <li><a href="/despre" className="footer-link">Despre</a></li>
          </ul>

          <h4 className="footer-title mt-8">Legal</h4>
          <ul className="footer-list">
            <li><a href="/termeni" className="footer-link">Termeni și condiții</a></li>
            <li><a href="/confidentialitate" className="footer-link">Politica de confidențialitate</a></li>
            <li><a href="/cookies" className="footer-link">Politica de cookies</a></li>
          </ul>
        </div>

        {/* COLOANA 3 – NEWSLETTER */}
        <div>
          <h4 className="footer-title">Newsletter</h4>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Primește noutăți despre SavePay și funcționalitățile viitoare.
          </p>

          <div className="flex items-center bg-gray-100 dark:bg-[#1a2332] border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Emailul tău"
              className="flex-1 px-3 py-2 bg-transparent text-gray-700 dark:text-gray-200 outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">
              <Send size={18} />
            </button>
          </div>

          <div className="mt-8 space-y-3 text-gray-600 dark:text-gray-400 text-sm">
            <p className="flex items-center gap-2"><Mail size={18}/> contact@savepay.ro</p>
            <p className="flex items-center gap-2"><MapPin size={18}/> Ploiești, România</p>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <p className="text-center text-gray-500 dark:text-gray-500 pb-8 mt-2 border-t border-gray-200 dark:border-gray-800 pt-6">
        © 2025 SavePay Technologies — Toate drepturile rezervate
      </p>
    </footer>
  );
}
