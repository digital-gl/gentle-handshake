import CTAButton from "./CTAButton";
import { TrendingDown, BarChart3, Repeat } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SectionProblema = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  const cards = [
    {
      icon: TrendingDown,
      text: "Subes presupuesto. El coste se dispara. Cambias el creativo. El problema sigue. Porque el problema nunca fue el creativo.",
    },
    {
      icon: BarChart3,
      text: "Tus métricas tienen buena pinta. Las ventas no acompañan. No es mala racha. Es que estás viendo la mitad del sistema.",
    },
    {
      icon: Repeat,
      text: "Tu mejor semana no se repite. Porque no fue sistema. Fue un momento favorable que confundiste con estructura.",
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        <h2
          className="text-gradient-yellow glow-yellow-text font-grotesk font-bold text-3xl md:text-4xl text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease-out",
          }}
        >
          EL ERROR QUE YA TE ESTÁ COSTANDO DINERO
        </h2>

        <div className="space-y-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-xl border border-border/30 bg-card overflow-hidden transition-all duration-200 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(232,255,0,0.08)]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.7s ease-out ${0.15 * (i + 1)}s, transform 0.7s ease-out ${0.15 * (i + 1)}s, border-color 0.2s, box-shadow 0.2s`,
              }}
            >
              <card.icon className="w-6 h-6 mt-1 flex-shrink-0 text-primary" />
              <p className="text-foreground/90 font-grotesk text-lg">{card.text}</p>
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl p-6 md:p-8 bg-card border border-border/30 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease-out 0.6s",
          }}
        >
          <p className="text-foreground/85 font-grotesk text-lg leading-relaxed">
            Cada euro invertido con información incompleta no multiplica resultados. Multiplica el error.
          </p>
        </div>

        <div
          className="rounded-xl p-5 bg-card border border-primary/10 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease-out 0.75s",
          }}
        >
          <p className="text-gradient-yellow glow-yellow-text font-grotesk font-semibold text-xl">
            No veías el sistema completo. Veías una fotografía.
          </p>
        </div>

        <div
          className="flex justify-center pt-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease-out 0.9s",
          }}
        >
          <CTAButton>Ya no quiero escalar a ciegas</CTAButton>
        </div>
      </div>
    </section>
  );
};

export default SectionProblema;
