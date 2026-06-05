"use client";

import { useEffect, useRef } from "react";

const teachers = [
  {
    name: "Ahmad",
    initials: "A",
    bio: "Native-level German speaker with years of experience teaching conversational German to students and professionals. Ahmad brings warmth, patience, and real-world context to every lesson.",
    accent: "#C4622D",
  },
  {
    name: "Ben",
    initials: "B",
    bio: "Fluent German speaker who has lived and worked in Germany. Ben specialises in helping students navigate workplace German and everyday life — from job interviews to supermarket small talk.",
    accent: "#4A6FA5",
  },
];

export default function About() {
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
    <section id="about" className="py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="reveal section-line" />
          <span className="reveal font-dm text-xs font-semibold uppercase tracking-[0.2em] text-terracotta block mb-3">
            Your Teachers
          </span>
          <h2 className="reveal font-cormorant text-5xl md:text-6xl font-semibold text-charcoal leading-tight mb-4">
            Two teachers. <br />
            <em className="italic">One mission.</em>
          </h2>
          <p className="reveal font-dm text-lg text-charcoal/60 max-w-xl leading-relaxed">
            Ahmad and Ben believe language learning should feel natural — built
            on real conversations, not grammar drills. They meet you where you
            are and get you where you need to go.
          </p>
        </div>

        {/* Teacher cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {teachers.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${i + 2} group bg-cream border border-border rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300`}
            >
              {/* Avatar */}
              <div className="flex items-start gap-5 mb-6">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                  style={{ backgroundColor: t.accent + "15" }}
                  aria-label={`Photo placeholder: ${t.name}`}
                >
                  {/* Silhouette SVG */}
                  <svg
                    viewBox="0 0 80 80"
                    className="absolute inset-0 w-full h-full"
                    aria-hidden
                  >
                    <circle cx="40" cy="28" r="14" fill={t.accent} opacity="0.3" />
                    <ellipse
                      cx="40"
                      cy="68"
                      rx="22"
                      ry="18"
                      fill={t.accent}
                      opacity="0.2"
                    />
                  </svg>
                  <span
                    className="font-cormorant text-3xl font-semibold relative z-10"
                    style={{ color: t.accent }}
                  >
                    {t.initials}
                  </span>
                  {/* Label */}
                  <span className="sr-only">Photo: {t.name} (placeholder)</span>
                </div>

                <div>
                  <h3 className="font-cormorant text-3xl font-semibold text-charcoal">
                    {t.name}
                  </h3>
                  <span className="font-dm text-sm text-muted">GermanGuru Teacher</span>
                  <div
                    className="mt-2 inline-block px-2.5 py-0.5 rounded-full text-xs font-medium font-dm"
                    style={{
                      backgroundColor: t.accent + "15",
                      color: t.accent,
                    }}
                  >
                    Photo coming soon
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="font-dm text-base text-charcoal/65 leading-relaxed">
                {t.bio}
              </p>

              {/* Divider */}
              <div
                className="mt-6 h-px w-12 group-hover:w-24 transition-all duration-500"
                style={{ backgroundColor: t.accent }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
