"use client";

import { useState } from "react";

export default function Contact() {
  const [ok, setOk] = useState(false);

  async function send(e) {
    e.preventDefault();

    const form = new FormData(e.target);

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        message: form.get("message"),
      }),
    });

    setOk(true);
  }

  return (
    <main className="max-w-xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">
        Contactează-ne
      </h1>

      {ok ? (
        <p className="text-green-600 savepay-card text-center">
          Mesaj trimis cu succes!
        </p>
      ) : (
        <form onSubmit={send} className="savepay-card space-y-4">
          <div>
            <label className="font-medium">Nume</label>
            <input name="name" className="w-full border p-2 rounded" required />
          </div>

          <div>
            <label className="font-medium">Email</label>
            <input
              name="email"
              type="email"
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="font-medium">Mesaj</label>
            <textarea
              name="message"
              className="w-full border p-2 rounded h-32"
              required
            ></textarea>
          </div>

          <button className="savepay-btn w-full">Trimite</button>
        </form>
      )}
    </main>
  );
}
