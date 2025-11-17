"use client";

import { motion } from "framer-motion";

export default function Despre() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">

      {/* TITLU */}
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 text-center mb-12">
        Despre SavePay Technologies
      </h1>

      {/* INTRO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="savepay-card text-lg leading-relaxed space-y-4"
      >
        <p>
          SavePay Technologies este o inițiativă românească dedicată 
          digitalizării chitanțelor și modernizării experienței de cumpărături.
          Scopul nostru este să îți oferim o platformă rapidă, sigură și 
          complet digitală, care elimină hârtia și îți organizează automat 
          istoricul cumpărăturilor.
        </p>

        <p>
          SavePay a apărut ca răspuns la o nevoie reală: lipsa unei soluții 
          digitale unitare pentru chitanțe și pierderea frecventă a bonurilor. 
          Într-o lume modernă, informația trebuie să fie instantă, sigură și 
          accesibilă oricând.
        </p>
      </motion.div>

      {/* CE AM REALIZAT */}
      <h2 className="text-3xl font-bold text-blue-700 mt-16 mb-6">
        Ce am realizat până acum
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="savepay-card text-lg leading-relaxed space-y-3"
      >
        <ul className="space-y-3">
          <li>• Dezvoltarea aplicației SavePay în variantă beta complet funcțională.</li>
          <li>• Implementarea autentificării și crearea profilului utilizatorului.</li>
          <li>• Generarea și scanarea codurilor QR unice pentru fiecare utilizator.</li>
          <li>• Sistem complet de chitanțe digitale și vizualizarea detaliată a acestora.</li>
          <li>• Interfață modernă pe Android și iOS, inclusiv dark mode.</li>
          <li>• Integrarea cu backend NestJS + PostgreSQL.</li>
          <li>• Dezvoltarea unui API pentru comercianți pentru emiterea chitanțelor.</li>
          <li>• Site SavePay cu design fintech modern, responsive și baby-blue theme.</li>
        </ul>
      </motion.div>

      {/* MISIUNE */}
      <h2 className="text-3xl font-bold text-blue-700 mt-16 mb-6">
        Misiunea noastră
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="savepay-card text-lg leading-relaxed"
      >
        <p>
          Misiunea SavePay este să transforme felul în care oamenii își gestionează 
          cumpărăturile prin oferirea unei soluții sigure, rapide și intuitive 
          pentru păstrarea și organizarea chitanțelor.
        </p>
      </motion.div>

      {/* VIZIUNE */}
      <h2 className="text-3xl font-bold text-blue-700 mt-16 mb-6">
        Viziunea SavePay
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="savepay-card text-lg leading-relaxed"
      >
        <p>
          Ne dorim ca SavePay să devină standardul digital pentru chitanțe 
          în România, o platformă sigură, scalabilă și adoptată la scară 
          largă de comercianți și utilizatori.
        </p>
      </motion.div>

    </main>
  );
}
