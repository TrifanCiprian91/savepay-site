"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Receipt, Scan, BarChart } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Receipt size={40} className="text-blue-600" />,
      title: "Chitanțe instant",
      text: "Primești chitanța digital în câteva secunde după plată.",
    },
    {
      icon: <Scan size={40} className="text-blue-600" />,
      title: "QR unic personal",
      text: "Codul tău QR conectează automat toate cumpărăturile.",
    },
    {
      icon: <ShieldCheck size={40} className="text-blue-600" />,
      title: "Siguranță totală",
      text: "Datele tale sunt protejate cu nivel bancar de securitate.",
    },
    {
      icon: <BarChart size={40} className="text-blue-600" />,
      title: "Statistici clare",
      text: "Vezi cât cheltui, ce cumperi și primești recomandări utile.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 mt-24">

      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-12">
        Avantajele SavePay
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 + i * 0.1 }}
            className="savepay-card text-center py-8 flex flex-col items-center"
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{f.text}</p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}
