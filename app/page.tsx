"use client";
import { useState } from "react";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [client, setClient] = useState("");
  const [extra, setExtra] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = { email, service, client, extra };

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("✅ Success! Your details were sent.");
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("⚠️ Network error. Please check your connection.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
        Welcome to ClientPilot AI
      </h1>
      <p className="text-lg text-gray-600 mb-10 text-center max-w-xl">
        Automate your client outreach and grow your business effortlessly.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-4 border border-gray-200"
      >
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="What service do you offer?"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Target client (e.g. realtors, doctors)"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Any extra notes..."
          value={extra}
          onChange={(e) => setExtra(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          🚀 Start
        </button>
      </form>

      {/* Plans Button */}
      <a
        href="/plans"
        className="mt-8 inline-block text-blue-600 font-semibold hover:underline"
      >
        See Plans & Upgrade →
      </a>
    </div>
  );
}
