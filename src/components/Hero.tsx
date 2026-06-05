"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-cream"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-24 -left-16 w-64 h-64 rounded-full bg-dusty/5" />
        <div
          className="absolute top-0 right-0 w-1/3 h-full opacity-[0.02]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #1c1c28 0px, #1c1c28 1px, transparent 1px, transparent 12px)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: text */}
        <div>
          <span
            className="inline-block font-dm text-xs font-semibold uppercase tracking-[0.2em] text-terracotta mb-6"
            style={{ animation: "heroFadeUp 0.6s ease 0.1s both" }}
          >
            Conversational German
          </span>

          <h1
            className="font-cormorant text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.0] text-charcoal mb-6"
            style={{ animation: "heroFadeUp 0.6s ease 0.25s both" }}
          >
            Speak
            <br />
            <em className="italic text-terracotta">German.</em>
            <br />
            Confidently.
          </h1>

          <p
            className="font-dm text-lg text-charcoal/60 leading-relaxed mb-10 max-w-md"
            style={{ animation: "heroFadeUp 0.6s ease 0.4s both" }}
          >
            Day-to-day German for students and professionals — taught by Ahmad
            and Ben with real conversations, practical vocabulary, and zero
            fluff.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4"
            style={{ animation: "heroFadeUp 0.6s ease 0.55s both" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 bg-terracotta text-white font-dm font-medium text-base px-7 py-3.5 rounded-full btn-pulse hover:bg-terracotta-dark transition-colors duration-200"
            >
              <WhatsAppIcon />
              Book Your Free 30-Min Trial
            </a>
            <a
              href="#courses"
              className="inline-flex items-center justify-center font-dm font-medium text-base text-charcoal/70 px-7 py-3.5 rounded-full border border-border hover:border-terracotta hover:text-terracotta transition-all duration-200"
            >
              Explore Courses
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="flex items-center gap-6 mt-10"
            style={{ animation: "heroFadeUp 0.6s ease 0.7s both" }}
          >
            <Badge icon="🌍" text="All levels" />
            <Badge icon="💬" text="Conversational focus" />
            <Badge icon="✅" text="Free trial" />
          </div>
        </div>

        {/* Right: photo frame placeholder */}
        <div
          className="hidden md:block"
          style={{ animation: "heroFadeUp 0.8s ease 0.35s both" }}
        >
          <div className="relative">
            {/* Placeholder frame */}
            <div className="relative rounded-3xl aspect-[4/5] bg-gradient-to-br from-terracotta/8 via-cream to-dusty/8 border-2 border-dashed border-terracotta/30 flex flex-col items-center justify-center gap-4 shadow-inner">
              {/* Camera icon */}
              <div className="w-16 h-16 rounded-full bg-terracotta/10 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C4622D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
              </div>
              <div className="text-center px-6">
                <p className="font-cormorant text-xl font-semibold text-charcoal/50">Team &amp; classroom photo</p>
                <p className="font-dm text-sm text-muted mt-1">Coming soon</p>
              </div>
            </div>

            {/* Terracotta accent frame behind */}
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl border-2 border-terracotta/20 -z-10" />

            {/* Floating badge */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2.5 border border-border">
              <span className="text-xl">🇩🇪</span>
              <div>
                <p className="font-dm text-xs font-semibold text-charcoal leading-none">Based in Germany</p>
                <p className="font-dm text-xs text-muted mt-0.5">Native-level fluency</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-charcoal/30">
        <span className="font-dm text-xs tracking-widest uppercase">Scroll</span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path
            d="M8 1v14M2 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}

function Badge({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-1.5 text-sm text-charcoal/60">
      <span>{icon}</span>
      <span className="font-dm">{text}</span>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
