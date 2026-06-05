"use client";

import { useEffect, useRef } from "react";

const pillars = [
  {
    icon: "💬",
    title: "Conversation First",
    desc: "Every session is built around speaking. We skip rote memorisation and go straight to real dialogue.",
  },
  {
    icon: "🎯",
    title: "All Levels Welcome",
    desc: "Complete beginner or intermediate student — we place you in the right group or tailor your 1-on-1 plan.",
  },
  {
    icon: "👥",
    title: "Small Groups or 1-on-1",
    desc: "Max 5 people per group so everyone gets speaking time. Or go fully personalised with private sessions.",
  },
  {
    icon: "🏢",
    title: "Practical & Real-World",
    desc: "Job interviews, apartment hunting, ordering coffee, workplace meetings — German you'll actually use.",
  },
];

export default function Courses() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="courses" className="py-28 bg-cream relative overflow-hidden" ref={ref}>
      {/* Bg accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta/5 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <span className="reveal section-line" />
            <span className="reveal font-dm text-xs font-semibold uppercase tracking-[0.2em] text-terracotta block mb-3">
              Our Approach
            </span>
            <h2 className="reveal font-cormorant text-5xl md:text-6xl font-semibold text-charcoal leading-tight">
              German that sticks — <br />
              <em className="italic">because you use it.</em>
            </h2>
          </div>
          <div className="flex items-center">
            <p className="reveal font-dm text-lg text-charcoal/60 leading-relaxed">
              We built GermanGuru around one belief: you learn to speak by
              speaking. Our lessons are structured but flexible, rigorous but
              human. No textbook monotony — just guided, meaningful
              conversation practice from day one.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`reveal reveal-delay-${i + 1} bg-white border border-border rounded-2xl p-6 hover:border-terracotta/30 hover:shadow-md transition-all duration-300 group`}
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="font-cormorant text-xl font-semibold text-charcoal mb-2 group-hover:text-terracotta transition-colors">
                {p.title}
              </h3>
              <p className="font-dm text-sm text-charcoal/60 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
