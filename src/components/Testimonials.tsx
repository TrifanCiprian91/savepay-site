import { motion } from "framer-motion";

export default function Testimonials() {
  const items = [
    {
      name: "Andrei",
      text: "Am renunțat la bonurile fizice complet. SavePay e genial!",
    },
    {
      name: "Ioana",
      text: "Mi-am găsit toate chitanțele instant. Foarte tare ideea!",
    },
    {
      name: "Mihai",
      text: "Simplu și rapid. Exact ce lipsea în România.",
    },
  ];

  return (
    <section className="mt-24 max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-10">Ce spun utilizatorii</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 + i * 0.1 }}
            viewport={{ once: true }}
            className="savepay-card text-left"
          >
            <p className="text-gray-600 mb-4">“{t.text}”</p>
            <p className="font-semibold text-blue-700">— {t.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
