"use client";

import { motion } from "framer-motion";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="pt-28 pb-20 px-4">

      {/* HERO */}
      <section className="text-center max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-blue-700 mb-4 leading-tight"
        >
          SavePay
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-700 text-base md:text-lg mb-6"
        >
          Primești chitanțe digitale instant, direct în aplicație prin codul tău QR.
          Rapid, modern și fără hârtie.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="savepay-btn rounded-xl px-8 py-4 text-base md:text-lg"
        >
          Descarcă aplicația
        </motion.button>
      </section>

      {/* BENEFICII */}
      <section className="mt-16 max-w-4xl mx-auto grid gap-5 md:grid-cols-3">

        <motion.div className="savepay-card text-center">
          <h3 className="font-semibold text-lg md:text-xl mb-1">✔ Fără bonuri pierdute</h3>
          <p className="text-gray-600 text-sm md:text-base">Toate chitanțele într-un singur loc.</p>
        </motion.div>

        <motion.div className="savepay-card text-center">
          <h3 className="font-semibold text-lg md:text-xl mb-1">✔ Totul digital</h3>
          <p className="text-gray-600 text-sm md:text-base">Rapid, simplu, ecologic.</p>
        </motion.div>

        <motion.div className="savepay-card text-center">
          <h3 className="font-semibold text-lg md:text-xl mb-1">✔ Mai sigur ca oricând</h3>
          <p className="text-gray-600 text-sm md:text-base">Datele tale sunt protejate.</p>
        </motion.div>

      </section>

      {/* FEATURES SECTION */}
      <Features />

    </main>
  );
}
