import CTAButton from "./CTAButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PolaroidFrame = ({ isVisible }: { isVisible: boolean }) => (
  <div
    className="mx-auto max-w-xs md:max-w-sm"
    style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "rotate(-3deg) scale(1)" : "rotate(-3deg) scale(0.9)",
      transition: "opacity 1s ease-out 0.6s, transform 1s ease-out 0.6s",
    }}
  >
    <div
      className="rounded-sm p-4 pb-6"
      style={{
        backgroundColor: "hsl(0 0% 95%)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
      }}
    >
      <div className="bg-black/90 rounded-sm p-4 space-y-2">
        <p className="font-mono text-xs text-green-400/80">ROAS: 4.8 / CPL: €2.3 / Semana: buena</p>
        <p className="font-mono text-xs" style={{ color: "hsl(0 60% 50% / 0.6)" }}>
          Sistema: desconocido.
        </p>
      </div>
    </div>
  </div>
);

const HeroSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="relative py-16 md:py-24 px-6 pt-4">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: headline + subtitle ABOVE image */}
        <div
          className="md:hidden space-y-4 mb-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease-out 0.2s",
          }}
        >
          <h1 className="text-gradient-yellow glow-yellow-text font-grotesk font-bold leading-tight text-xl text-center">
            Escalar un error solo aumenta las pérdidas.
          </h1>
          <p className="text-foreground/80 font-grotesk text-base leading-relaxed text-center">
            ROAS alto no significa que sea momento de escalar. Significa que tienes una fotografía. No el sistema completo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Copy - desktop only */}
          <div
            className="hidden md:block order-2 md:order-1 space-y-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
              transition: "all 0.7s ease-out 0.3s",
            }}
          >
            <div className="rounded-2xl p-6 md:p-8 bg-card border border-border/30 space-y-6">
              <h1 className="text-gradient-yellow glow-yellow-text font-grotesk font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                Escalar un error solo aumenta las pérdidas.
              </h1>
              <p className="text-foreground/80 font-grotesk text-lg md:text-xl leading-relaxed">
                ROAS alto no significa que sea momento de escalar. Significa que tienes una fotografía. No el sistema completo.
              </p>
            </div>

            <PolaroidFrame isVisible={isVisible} />

            <div className="flex justify-center">
              <CTAButton>Validar mi estructura ahora — 17€</CTAButton>
            </div>
          </div>

          {/* Hero Image with logo overlay */}
          <div
            className="order-1 md:order-2 flex flex-col items-center gap-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
              transition: "all 0.7s ease-out 0.4s",
            }}
          >
            <div className="relative w-full max-w-md">
              <img
                src="https://i.postimg.cc/gJzJxwF1/quadrada_7_erros_INDALE_(600_x_600_px)_(3).png"
                alt="Hero"
                className="w-full rounded-2xl transition-transform duration-500 hover:scale-105"
                style={{
                  boxShadow: "0 0 60px rgba(232, 255, 0, 0.12), 0 25px 50px rgba(0, 0, 0, 0.5)",
                }}
              />
              {/* Logo bottom-right */}
              <img
                src="https://i.postimg.cc/76H65C8V/Design_sem_nome.png"
                alt="Indale Logo"
                className="absolute bottom-4 right-4 h-10 md:h-14 object-contain"
                style={{
                  animation: isVisible
                    ? "logo-pulse-in 1.5s ease-out 1s forwards, logo-gentle-pulse 3s ease-in-out 2.5s infinite"
                    : "none",
                  opacity: 0,
                  animationFillMode: "both",
                }}
              />
            </div>
            {/* CTA below image on mobile */}
            <div className="md:hidden flex justify-center w-full">
              <CTAButton>Validar mi estructura ahora — 17€</CTAButton>
            </div>
          </div>

          {/* Mobile: polaroid below image */}
          <div
            className="md:hidden order-3"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
              transition: "all 0.7s ease-out 0.5s",
            }}
          >
            <PolaroidFrame isVisible={isVisible} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
