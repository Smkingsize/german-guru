"use client";

import { useEffect, useRef } from "react";

// ── UPDATE THESE BEFORE GOING LIVE ──────────────────────────────────────────
const WHATSAPP_NUMBER = "+4915231359326";
const INSTAGRAM_HANDLE = "@guru_german";
// ────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="py-28 bg-charcoal relative overflow-hidden"
      ref={ref}
    >
      {/* Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta/10 rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-dusty/10 rounded-full -translate-x-1/3 translate-y-1/3" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 14px)",
          }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* Kicker */}
        <span className="reveal font-dm text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-light block mb-4">
          Ready to start?
        </span>

        <h2 className="reveal font-cormorant text-5xl md:text-6xl font-semibold text-cream leading-tight mb-6">
          Just send us a message.
        </h2>

        <p className="reveal font-dm text-lg text-cream/60 leading-relaxed mb-12 max-w-xl mx-auto">
          No forms, no fuss. Reach out on WhatsApp and we&apos;ll reply within a
          few hours. Your free 30-minute trial is just one message away.
        </p>

        {/* WhatsApp CTA */}
        <div className="reveal mb-8">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-dm font-semibold text-lg px-9 py-4 rounded-full btn-pulse hover:bg-[#1ebe5d] transition-colors duration-200 shadow-lg shadow-[#25D366]/30"
          >
            <WhatsAppIcon />
            Message us on WhatsApp
          </a>
        </div>

        {/* Instagram */}
        <div className="reveal flex items-center justify-center gap-2 text-cream/50">
          <InstagramIcon />
          <a
            href={`https://instagram.com/${INSTAGRAM_HANDLE.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm text-sm hover:text-cream transition-colors"
          >
            {INSTAGRAM_HANDLE}
          </a>
          <span className="font-dm text-sm text-cream/30">on Instagram</span>
        </div>

        {/* Quote */}
        <div className="reveal mt-16 border-t border-cream/10 pt-12">
          <blockquote className="font-cormorant text-2xl md:text-3xl italic text-cream/70 leading-relaxed">
            &ldquo;The limits of my language mean the limits of my world.&rdquo;
          </blockquote>
          <cite className="block font-dm text-sm text-cream/30 mt-3">
            — Ludwig Wittgenstein
          </cite>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
