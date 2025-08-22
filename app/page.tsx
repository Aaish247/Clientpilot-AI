"use client";
import React, { useState } from "react";

export default function Home() {
  const [view, setView] = useState<"form" | "plans">("form");

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <header style={styles.header}>
          <div style={styles.logoDot} />
          <div style={styles.brand}>ClientPilot AI</div>
          {view === "form" ? (
            <button onClick={() => setView("plans")} style={styles.headerBtn}>
              See Plans & Upgrade →
            </button>
          ) : (
            <button onClick={() => setView("form")} style={styles.headerBtn}>
              ← Back to Form
            </button>
          )}
        </header>

        {view === "form" ? (
          <FormView onSeePlans={() => setView("plans")} />
        ) : (
          <PlansView />
        )}

        <footer style={styles.footer}>
          © {new Date().getFullYear()} ClientPilot AI — All Rights Reserved
        </footer>
      </div>
    </main>
  );
}

function FormView({ onSeePlans }: { onSeePlans: () => void }) {
  return (
    <>
      <section style={styles.hero}>
        <h1 style={styles.h1}>Find Clients While You Sleep</h1>
        <p style={styles.sub}>
          Tell us what you do — our AI searches the web & social platforms to bring you real leads.
        </p>
      </section>

      <section style={styles.card}>
        <h2 style={styles.h2}>Tell us what you need</h2>
        <p style={styles.muted}>Fill this once. We’ll take it from here automatically.</p>

        <div style={styles.formGrid}>
          <Field label="Your Name" placeholder="Aaish" />
          <Field label="Your Email (for outreach)" placeholder="clientpilotai247@gmail.com" type="email" />
          <Field label="What service do you offer?" placeholder="Video Editing / SMM / Web Design…" />
          <Field label="Who is your ideal client?" placeholder="Fitness influencers / DTC brands / Local biz…" />
          <Field label="From where should we search clients?" placeholder="Instagram, LinkedIn, TikTok, websites…" />
          <Field label="Target location" placeholder="USA / UK / Europe / City" />
          <Field label="Anything else (optional)" placeholder="Tone, niche details, examples…" as="textarea" />
        </div>

        <div style={styles.actionsRow}>
          <button
            onClick={() => alert("Demo only — backend hookup comes next.")}
            style={styles.primaryBtn}
          >
            Start (Demo)
          </button>
          <button onClick={onSeePlans} style={styles.ghostBtn}>
            See Plans & Upgrade
          </button>
        </div>
      </section>
    </>
  );
}

function PlansView() {
  return (
    <>
      <section style={styles.hero}>
        <h1 style={styles.h1}>Choose Your Plan</h1>
        <p style={styles.sub}>Start free. Upgrade anytime.</p>
      </section>

      <section style={styles.plansGrid}>
        <PlanCard
          title="Free"
          price="$0"
          bullets={["15 emails/week", "AI-written cold emails", "Great for testing"]}
          cta="Start Free →"
          href="https://nextjs-boilerplate-eta-flax-55.vercel.app"
        />
        <PlanCard
          title="Monthly"
          price="$49.99"
          bullets={["Unlimited outreach", "Personalized AI messages", "Priority queue"]}
          cta="Get Monthly →"
          href="https://aishmuhammad.gumroad.com/l/npihx"
        />
        <PlanCard
          title="Lifetime"
          price="$99.99"
          bullets={["One-time payment", "Unlimited forever", "All features included"]}
          cta="Buy Lifetime →"
          href="https://aishmuhammad.gumroad.com/l/rfssks"
        />
      </section>
    </>
  );
}

function Field({
  label,
  placeholder,
  as,
  type = "text",
}: {
  label: string;
  placeholder: string;
  as?: "textarea";
  type?: string;
}) {
  return (
    <label style={styles.fieldWrap}>
      <div style={styles.label}>
        <strong>{label}</strong>
      </div>
      {as === "textarea" ? (
        <textarea placeholder={placeholder} style={{ ...styles.input, minHeight: 110 }} />
      ) : (
        <input type={type} placeholder={placeholder} style={styles.input} />
      )}
    </label>
  );
}

function PlanCard({
  title,
  price,
  bullets,
  cta,
  href,
}: {
  title: string;
  price: string;
  bullets: string[];
  cta: string;
  href: string;
}) {
  return (
    <div
      style={styles.planCard}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <div style={styles.planHeader}>
        <h3 style={styles.planTitle}>{title}</h3>
        <div style={styles.price}>{price}</div>
      </div>
      <ul style={styles.bullets}>
        {bullets.map((b, i) => (
          <li key={i} style={{ marginBottom: 8 }}>
            {b}
          </li>
        ))}
      </ul>
      <a href={href} target="_blank" style={{ textDecoration: "none" }}>
        <button style={styles.planBtn}>{cta}</button>
      </a>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(1200px 600px at -10% -10%, rgba(37,99,235,0.14), transparent 60%), radial-gradient(1200px 600px at 110% -10%, rgba(99,102,241,0.12), transparent 60%), #F7F9FC",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "28px 18px",
    fontFamily: "Inter, ui-sans-serif, system-ui, Arial, sans-serif",
    color: "#0F172A",
  },
  container: { width: "100%", maxWidth: 1000 },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  logoDot: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
    boxShadow: "0 0 0 3px rgba(37,99,235,0.12)",
  },
  brand: { fontWeight: 800, letterSpacing: 0.2 },
  headerBtn: {
    background: "transparent",
    border: "1px solid #2563EB",
    padding: "8px 12px",
    borderRadius: 10,
    cursor: "pointer",
    fontWeight: 700,
    color: "#2563EB",
  },
  hero: {
    background: "linear-gradient(135deg, rgba(226,235,255,0.7), rgba(255,255,255,0.9))",
    border: "1px solid #E6EAF2",
    borderRadius: 18,
    padding: "22px 18px",
    boxShadow: "0 10px 28px rgba(15,23,42,0.06)",
    marginBottom: 14,
    textAlign: "center",
  },
  h1: { margin: 0, fontSize: 34, lineHeight: 1.18 },
  sub: { marginTop: 6, color: "#475569", fontSize: 16 },
  card: {
    background: "#FFFFFF",
    border: "1px solid #E6EAF2",
    borderRadius: 18,
    padding: 18,
    boxShadow: "0 12px 32px rgba(15,23,42,0.08)",
  },
  h2: { margin: 0, fontSize: 20 },
  muted: { color: "#64748B", marginTop: 6 },
  formGrid: { display: "grid", gap: 14, marginTop: 16 },
  fieldWrap: { display: "grid", gap: 6 },
  label: { fontSize: 14, color: "#0F172A" },
  input: {
    width: "100%",
    padding: "12px 12px",
    borderRadius: 12,
    border: "1px solid #DCE3EF",
    outline: "none",
    background: "#fff",
  },
  actionsRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
    marginTop: 14,
  },
  primaryBtn: {
    padding: "12px 16px",
    borderRadius: 12,
    border: "none",
    background: "linear-gradient(135deg,#2563EB,#1D4ED8)",
    color: "#fff",
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "0 6px 16px rgba(37,99,235,0.25)",
    width: "100%",
  },
  ghostBtn: {
    padding: "12px 16px",
    borderRadius: 12,
    border: "1px solid #2563EB",
    background: "#fff",
    color: "#2563EB",
    fontWeight: 800,
    cursor: "pointer",
    width: "100%",
  },
  plansGrid: {
    display: "grid",
    gap: 16,
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  },
  planCard: {
    background: "#fff",
    borderRadius: 16,
    padding: 20,
    border: "2px solid #2563EB", // Dark blue border
    boxShadow: "0 12px 28px rgba(15,23,42,0.08)",
    transform: "translateY(0)",
    transition: "transform 0.2s ease",
  },
  planHeader: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  planTitle: { margin: 0, fontSize: 18, fontWeight: 800 },
  price: { fontSize: 26, fontWeight: 900, color: "#0F172A" },
  bullets: { margin: "6px 0 12px", paddingLeft: 18, color: "#475569" },
  planBtn: {
    padding: "12px 16px",
    borderRadius: 12,
    border: "none",
    background: "linear-gradient(135deg,#2563EB,#1D4ED8)",
    color: "#fff",
    fontWeight: 800,
    cursor: "pointer",
    width: "100%",
    boxShadow: "0 6px 16px rgba(37,99,235,0.25)",
  },
  footer: {
    textAlign: "center",
    color: "#94A3B8",
    fontSize: 13,
    marginTop: 18,
  },
};
