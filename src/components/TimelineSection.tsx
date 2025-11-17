"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    title: "Stabilizare & UX Upgrade",
    period: "Luna 1",
    items: [
      "Optimizare design aplicație (Flutter)",
      "Dark mode complet pentru mobil & website",
      "Refactorizare Home, Profil, Chitanțe",
      "Stabilizarea backend NestJS + PostgreSQL",
    ],
  },
  {
    title: "Lansare Parteneri",
    period: "Luna 2",
    items: [
      "Dashboard Parteneri",
      "Emitere chitanțe prin API cu semnătură digitală la descărcare",
      "Integrare QR scan → user receipt",
    ],
  },
  {
    title: "Funcționalități Smart",
    period: "Lunile 3–4",
    items: [
      "Recomandări AI pentru utilizatori",
      "Comparare prețuri produse",
      "Reumplere automată (auto-refill)",
      "Notificări push inteligente",
    ],
  },
  {
    title: "Wallet + Integrări",
    period: "Luna 5",
    items: [
      "Google Wallet",
      "Apple Wallet",
      "Integrare transport public",
      "Integrare reciclare cu bon digital",
    ],
  },
  {
    title: "Scalare & White-Label",
    period: "Luna 6",
    items: [
      "White-label pentru parteneri mari",
      "Integrare POS & ERP",
      "Planuri corporate",
      "Parteneriate naționale",
    ],
  },
];

export default function TimelineSection() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-16 text-blue-600 dark:text-blue-400">
        Roadmap SavePay 2025
      </h2>

      <div className="relative border-l-4 border-blue-500 dark:border-blue-400 ml-4">
        {timelineData.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="mb-16 ml-6"
          >
            {/* Punctul animat */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full absolute -left-3"
            />

            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {step.title}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
              {step.period}
            </p>

            <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
              {step.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
