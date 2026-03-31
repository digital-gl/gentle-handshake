import CTAButton from "./CTAButton";
import { Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SectionOferta = () => {
  const { ref, isVisible } = useScrollReveal(0.12);

  const benefits = [
    "Acceso inmediato a la herramienta completa. 7 bloques. Respondes con honestidad.",
    "Antes de cada bloque, sabes exactamente qué mide y qué busca. Sin ambigüedad.",
    "Al terminar sabes si debes escalar, optimizar o reconstruir. Bloque por bloque.",
    "En una o dos horas tienes el resultado. No es un método. Es una radiografía.",
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <div
          className="rounded-2xl p-8 md:p-12 space-y-8 border border-primary/20 bg-background"
          style={{
            boxShadow: "0 0 60px rgba(232, 255, 0, 0.08), 0 0 120px rgba(232, 255, 0, 0.04)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease-out",
          }}
        >
          <div className="text-center space-y-4">
            <p
              className="text-foreground/80 font-grotesk text-lg"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                transition: "all 0.7s ease-out 0.15s",
              }}
            >
              Hoy puedes acceder al DIAGNÓSTICO DE DECISIÓN por sólo:
            </p>

            <div className="relative">
              <p
                className="text-muted-foreground font-grotesk text-2xl line-through"
                style={{
                  opacity: 0,
                  animation: isVisible ? "price-slash 2.5s ease-out 0.8s forwards" : "none",
                  animationFillMode: "both",
                }}
              >
                29 euros
              </p>
              <p
                className="text-gradient-yellow glow-yellow-text font-grotesk font-bold text-6xl md:text-7xl"
                style={{
                  opacity: 0,
                  animation: isVisible ? "price-reveal 2s ease-out 1s forwards" : "none",
                  animationFillMode: "both",
                }}
              >
                17€
              </p>
            </div>

            <p
              className="text-muted-foreground font-grotesk text-base"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                transition: "all 0.7s ease-out 0.45s",
              }}
            >
              Menos de lo que cuesta un día de campaña mal optimizada.
            </p>
          </div>

          <div className="pt-4">
            <div className="space-y-3">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg bg-card/80 transition-all duration-200 hover:border-primary/40"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(32px)",
                    transition: `all 0.7s ease-out ${0.6 + i * 0.15}s`,
                  }}
                >
                  <Check className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
                  <p className="text-foreground/90 font-grotesk text-base">{b}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <CTAButton>Quiero acceso inmediato por 17€</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOferta;
