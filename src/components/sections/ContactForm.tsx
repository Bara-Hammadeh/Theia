"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

const roles = [
  "Surgeon / Surgical department",
  "Hospital innovation office",
  "Researcher / Academia",
  "Industry / Device maker",
  "Investor",
  "Other",
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-surface-2/60 px-4 py-3 text-sm text-ink placeholder:text-faint transition-colors focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/40";

const labelClass = "mb-2 block text-xs font-medium uppercase tracking-wider text-muted";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    role: roles[0],
    message: "",
  });

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `[Theia] Inquiry — ${form.name}${form.org ? ` · ${form.org}` : ""}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Organization: ${form.org}`,
      `Role: ${form.role}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Dr. Jane Okafor"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="jane@hospital.org"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="org" className={labelClass}>
            Organization
          </label>
          <input
            id="org"
            value={form.org}
            onChange={update("org")}
            placeholder="Department / hospital / institute"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="role" className={labelClass}>
            I am a
          </label>
          <select id="role" value={form.role} onChange={update("role")} className={inputClass}>
            {roles.map((r) => (
              <option key={r} value={r} className="bg-surface-2">
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          How can we help?
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about your procedure, dataset, or research question."
          className={`${inputClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="group mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 font-medium text-bg transition-all duration-300 hover:brightness-110 sm:w-auto"
      >
        Send message
        <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <p className="mt-4 text-xs leading-relaxed text-faint">
        {sent ? (
          <span className="text-accent">
            Opening your email client — if nothing happens, write to us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="underline">
              {siteConfig.email}
            </a>
            .
          </span>
        ) : (
          <>
            This form composes an email in your own mail client — nothing is stored on
            this site. Prefer email? Write to{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-accent-2 underline">
              {siteConfig.email}
            </a>
            .
          </>
        )}
      </p>
    </form>
  );
}
