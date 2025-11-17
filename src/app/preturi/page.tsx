"use client";

import { motion } from "framer-motion";

export default function Preturi() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-20">

      {/* TITLU */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold text-blue-700 text-center mb-6"
      >
        Planuri SavePay
      </motion.h1>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
         .
      </p>

      {/* GRID PLANURI */}
      <div className="grid md:grid-cols-3 gap-10 items-stretch">

        {/* STARTER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.04 }}
          className="savepay-card py-10 px-6 flex flex-col justify-between shadow-md hover:shadow-xl hover:border-blue-400 cursor-pointer"
        >
          <div>
            <h2 className="text-2xl font-bold text-blue-700 text-center">Starter</h2>
            <p className="text-3xl font-bold text-blue-600 mt-1 mb-6 text-center">0 RON / lună</p>

            <ul className="text-gray-700 text-left space-y-3">
              <li>• Emitere chitanțe digitale</li>
              <li>• Scanare QR pentru clienți</li>
              <li>• Istoric tranzacții de bază</li>
              <li>• Suport prin email</li>
            </ul>
          </div>

          <button className="savepay-btn w-full mt-8">Începe gratuit</button>
        </motion.div>

        {/* PRO - cel mai popular */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.07 }}
          className="relative savepay-card py-10 px-6 flex flex-col justify-between shadow-xl border-2 border-blue-600 hover:shadow-blue-300 hover:shadow-2xl cursor-pointer bg-white/90 dark:bg-[#1f2630]"
        >
          {/* BADGE */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md">
            Cel mai popular
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-700 text-center">Pro</h2>
            <p className="text-3xl font-bold text-blue-600 mt-1 mb-4 text-center">149 RON / lună</p>

            <h3 className="text-blue-600 font-semibold text-center mb-4">Include Starter +</h3>

            <ul className="text-gray-700 text-left space-y-3">
              <li>• Dashboard complet cu statistici</li>
              <li>• Recomandări inteligente (AI)</li>
              <li>• Notificări în timp real</li>
              <li>• Rapoarte lunare</li>
              <li>• Suport prioritar</li>
            </ul>
          </div>

          <button className="savepay-btn w-full mt-8">Alege Pro</button>
        </motion.div>

        {/* ENTERPRISE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.04 }}
          className="savepay-card py-10 px-6 flex flex-col justify-between shadow-md hover:shadow-xl hover:border-blue-400 cursor-pointer"
        >
          <div>
            <h2 className="text-2xl font-bold text-blue-700 text-center">Enterprise</h2>
            <p className="text-3xl font-bold text-blue-600 mt-1 mb-4 text-center">Custom</p>

            <h3 className="text-blue-600 font-semibold text-center mb-4">Include Pro +</h3>

            <ul className="text-gray-700 text-left space-y-3">
              <li>• White-label complet</li>
              <li>• Integrare cu ERP / POS</li>
              <li>• Funcționalități personalizate</li>
              <li>• Manager de cont dedicat</li>
              <li>• Suport premium 24/7</li>
            </ul>
          </div>

          <button className="savepay-btn w-full mt-8">Contactează-ne</button>
        </motion.div>
      </div>

      {/* TABEL COMPARAȚIE */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">
          Compară planurile SavePay
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-50 dark:bg-blue-900 text-gray-800 dark:text-gray-200">
                <th className="p-4 text-lg font-semibold">Funcționalitate</th>
                <th className="p-4 text-lg font-semibold text-center">Starter</th>
                <th className="p-4 text-lg font-semibold text-center">Pro</th>
                <th className="p-4 text-lg font-semibold text-center">Enterprise</th>
              </tr>
            </thead>

            <tbody className="text-gray-700 dark:text-gray-300">
              <tr className="border-b">
                <td className="p-4">Emitere chitanțe digitale</td>
                <td className="p-4 text-center">✔</td><td className="p-4 text-center">✔</td><td className="p-4 text-center">✔</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Scanare QR</td>
                <td className="p-4 text-center">✔</td><td className="p-4 text-center">✔</td><td className="p-4 text-center">✔</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Dashboard statistici</td>
                <td className="p-4 text-center">—</td><td className="p-4 text-center">✔</td><td className="p-4 text-center">✔</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Recomandări AI</td>
                <td className="p-4 text-center">—</td><td className="p-4 text-center">✔</td><td className="p-4 text-center">✔</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">White-label complet</td>
                <td className="p-4 text-center">—</td><td className="p-4 text-center">—</td><td className="p-4 text-center">✔</td>
              </tr>

              <tr>
                <td className="p-4">Suport 24/7</td>
                <td className="p-4 text-center">—</td><td className="p-4 text-center">—</td><td className="p-4 text-center">✔</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </main>
  );
}
