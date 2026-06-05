"use client";

import { useEffect, useRef } from "react";

const plans = [
  {
    name: "1-on-1 Sessions",
    price: "€20",
    unit: "/ hour",
    description: "Fully personalised sessions built around your schedule and goals.",
    features: [
      "Dedicated to your level & goals",
      "Flexible scheduling",
      "Direct feedback every session",
      "WhatsApp support between lessons",
    ],
    cta: "Book a Trial",
    highlight: false,
    accent: "dusty",
  },
  {
    name: "Group Monthly",
    price: "€50",
    unit: "/ month",
    description: "Up to 8 group sessions per month — the most cost-effective way to learn.",
    features: [
      "Up to 8 sessions per month",
      "Max 5 students per group",
      "Weekly structured lessons",
      "WhatsApp group for practice",
      "Best value",
    ],
    cta: "Get Started",
    highlight: true,
    accent: "terracotta",
    badge: "Best Value",
  },
  {
    name: "Group Sessions",
    price: "€10",
    unit: "/ session",
    description: "Drop into group sessions at your pace — no monthly commitment needed.",
    features: [
      "Max 5 students per group",
      "Pay as you go",
      "All levels welcome",
      "WhatsApp group access",
    ],
    cta: "Book a Trial",
    highlight: false,
    accent: "dusty",
  },
];

export default function Pricing() {
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
    <section id="pricing" className="py-28 bg-cream relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-dusty/5 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="reveal section-line mx-auto" />
          <span className="reveal font-dm text-xs font-semibold uppercase tracking-[0.2em] text-terracotta block mb-3">
            Pricing
          </span>
          <h2 className="reveal font-cormorant text-5xl md:text-6xl font-semibold text-charcoal leading-tight mb-4">
            Simple, honest pricing.
          </h2>
          <p className="reveal font-dm text-lg text-charcoal/60">
            Start with a free trial. No credit card required.
          </p>
        </div>

        {/* Cards — reordered for visual emphasis: 1-on-1, Monthly (highlighted), Group */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {[plans[0], plans[1], plans[2]].map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal reveal-delay-${i + 1} rounded-3xl p-8 flex flex-col relative transition-shadow duration-300
                ${
                  plan.highlight
                    ? "bg-charcoal text-cream shadow-2xl scale-[1.03] border border-charcoal"
                    : "bg-white border border-border hover:shadow-lg"
                }`}
            >
              {/* Best value badge */}
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-terracotta text-white text-xs font-dm font-semibold px-4 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              <div className="mb-6">
                <h3
                  className={`font-cormorant text-2xl font-semibold mb-1 ${
                    plan.highlight ? "text-cream" : "text-charcoal"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`font-dm text-sm leading-relaxed ${
                    plan.highlight ? "text-cream/60" : "text-charcoal/60"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8 flex items-baseline gap-1">
                <span
                  className={`font-cormorant text-5xl font-bold ${
                    plan.highlight ? "text-terracotta-light" : "text-terracotta"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`font-dm text-sm ${
                    plan.highlight ? "text-cream/50" : "text-muted"
                  }`}
                >
                  {plan.unit}
                </span>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.highlight ? "text-terracotta-light" : "text-terracotta"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={`font-dm text-sm ${
                        plan.highlight ? "text-cream/80" : "text-charcoal/70"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`inline-flex items-center justify-center font-dm font-medium text-sm px-6 py-3 rounded-full transition-all duration-200
                  ${
                    plan.highlight
                      ? "bg-terracotta text-white hover:bg-terracotta-dark"
                      : "bg-cream border border-border text-charcoal hover:border-terracotta hover:text-terracotta"
                  }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="reveal text-center font-dm text-sm text-muted mt-10">
          All lessons conducted online via video call. Scheduling is flexible
          and agreed directly with your teacher.
        </p>
      </div>
    </section>
  );
}
