"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Stabilizare & Experiență",
    points: [
      "Optimizare completă UI/UX",
      "Dark mode finalizat",
      "Arhitectură stabilă pentru scalare",
    ],
    status: "completed", // 🟢
  },
  {
    title: "Parteneri & Emitere Chitanțe",
    points: [
      "Dashboard Parteneri",
      "Scanare QR → Chitanță instant",
      "Chitanțe digitale cu semnătură la descărcare",
    ],
    status: "ongoing", // 🟡
  },
  {
    title: "Funcționalități Smart",
    points: [
      "Recomandări AI",
      "Reumplere automată",
      "Comparare prețuri",
    ],
    status: "next", // 🔵
  },
  {
    title: "Integrare Wallet & Servicii",
    points: [
      "Google Wallet",
      "Apple Wallet",
      "Transport public",
    ],
    status: "next",
  },
  {
    title: "Scalare & White-Label",
    points: [
      "Integrări POS",
      "ERP retail",
      "Parteneriate naționale",
    ],
    status: "next",
  },
];

// Culoare punct status
function statusColor(status: string) {
  switch (status) {
    case "completed":
      return "bg-green-500 dark:bg-green-400 shadow-[0_0_10px_3px_rgba(34,197,94,0.7)]";
    case "ongoing":
      return "bg-yellow-400 dark:bg-yellow-300 shadow-[0_0_10px_3px_rgba(251,191,36,0.7)]";
    default:
      return "bg-blue-500 dark:bg-blue-400 shadow-[0_0_10px_3px_rgba(59,130,246,0.7)]";
  }
}

// Culoare progres general
function progressColor() {
  const completed = steps.filter(s => s.status === "completed").length;
  const ongoing = steps.filter(s => s.status === "ongoing").length;

  if (completed >= 1 && ongoing === 0) return "bg-green-500 dark:bg-green-400";
  if (ongoing >= 1) return "bg-yellow-400 dark:bg-yellow-300";
  return "bg-blue-500 dark:bg-blue-400";
}

export default function RoadmapHorizontal() {
  const completedCount = steps.filter((s) => s.status !== "next").length;
  const progressPercent = (completedCount / steps.length) * 100;

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-12">
        Roadmap SavePay 2026
      </h2>

      {/* PROGRESS BAR */}
      <div className="relative w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-full mb-14 overflow-hidden">
        <motion.div
          className={"h-2 rounded-full " + progressColor()}
          initial={{ width: 0 }}
          animate={{ width: progressPercent + "%" }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* TIMELINE ORIZONTAL */}
      <div className="flex overflow-x-auto gap-10 snap-x snap-mandatory pb-6 scrollbar-thin scrollbar-thumb-blue-500/50">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="
              min-w-[280px] snap-center 
              bg-white dark:bg-[#1a2332]
              border border-gray-200 dark:border-gray-700 
              rounded-2xl shadow-lg p-6 relative
            "
          >
            {/* STATUS DOT */}
            <div
              className={
                "w-4 h-4 rounded-full absolute -top-2 -left-2 border-2 border-white dark:border-gray-900 " +
                statusColor(step.status)
              }
            />

            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              {step.title}
            </h3>

            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {step.points.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 text-blue-600 dark:text-blue-400">•</span>
                  {p}
                </li>
              ))}
            </ul>

          </motion.div>
        ))}
      </div>

    </div>
  );
}
