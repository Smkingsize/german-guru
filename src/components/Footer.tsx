// UPDATE: replace YOURNUMBER and @germanguru before going live
const WHATSAPP_NUMBER = "4915231359326";
const INSTAGRAM_HANDLE = "@guru_german";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-cream/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Wordmark */}
          <div>
            <a
              href="#"
              className="font-cormorant text-2xl font-semibold text-cream"
            >
              German<span className="text-terracotta">Guru</span>
            </a>
            <p className="font-dm text-sm text-cream/40 mt-1">
              Conversational German for everyone.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div>
              <p className="font-dm text-xs font-semibold uppercase tracking-widest text-cream/30 mb-2">
                WhatsApp
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm text-sm text-cream/60 hover:text-cream transition-colors"
              >
                wa.me/{WHATSAPP_NUMBER}
              </a>
            </div>
            <div>
              <p className="font-dm text-xs font-semibold uppercase tracking-widest text-cream/30 mb-2">
                Instagram
              </p>
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm text-sm text-cream/60 hover:text-cream transition-colors"
              >
                {INSTAGRAM_HANDLE}
              </a>
            </div>
            <div>
              <p className="font-dm text-xs font-semibold uppercase tracking-widest text-cream/30 mb-2">
                Pages
              </p>
              <nav className="flex flex-col gap-1">
                {["About", "Courses", "Pricing", "Contact"].map((l) => (
                  <a
                    key={l}
                    href={`#${l.toLowerCase().replace(" ", "-")}`}
                    className="font-dm text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    {l}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-dm text-xs text-cream/30">
            © 2025 GermanGuru. All rights reserved.
          </p>
          <p className="font-dm text-xs text-cream/20">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
