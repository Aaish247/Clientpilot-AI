// app/page.tsx
"use client";

import { useState } from "react";

export default function Home() {
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
    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>
        Choose Your Plan
      </h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
        {/* Free Plan */}
        <div style={{ border: "2px solid gray", borderRadius: "10px", padding: "1.5rem", width: "200px" }}>
          <h2>Free</h2>
          <p>$0 / forever</p>
        </div>

        {/* Monthly Plan (Highlighted Blue Border) */}
        <div style={{ border: "3px solid darkblue", borderRadius: "10px", padding: "1.5rem", width: "200px" }}>
          <h2>Monthly</h2>
          <p>$10 / month</p>
        </div>

        {/* Lifetime Plan */}
        <div style={{ border: "2px solid gray", borderRadius: "10px", padding: "1.5rem", width: "200px" }}>
          <h2>Lifetime</h2>
          <p>$99 one time</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} style={{ marginTop: "2rem", textAlign: "left", maxWidth: "400px", marginInline: "auto" }}>
        <label>Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "1rem", border: "1px solid gray", borderRadius: "5px" }}
        />

        <label>Service</label>
        <input
          type="text"
          value={service}
          onChange={(e) => setService(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "1rem", border: "1px solid gray", borderRadius: "5px" }}
        />

        <label>Client</label>
        <input
          type="text"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "1rem", border: "1px solid gray", borderRadius: "5px" }}
        />

        <label>Extra</label>
        <textarea
          value={extra}
          onChange={(e) => setExtra(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "1rem", border: "1px solid gray", borderRadius: "5px" }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "darkblue",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Start
        </button>
      </form>
    </div>
  );
}
