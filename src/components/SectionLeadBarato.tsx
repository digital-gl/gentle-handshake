import CTAButton from "./CTAButton";
import { AlertTriangle, TrendingDown, Target, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SectionLeadBarato = () => {
  const { ref, isVisible } = useScrollReveal(0.12);

  return (
    <section ref={ref} className="py-20 md:py-28 px-6 bg-card">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2
          className="text-gradient-yellow glow-yellow-text font-grotesk font-bold text-3xl md:text-4xl text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? "cinematic-blur-in 1.5s ease-out forwards" : "none",
          }}
        >
          POR QUÉ EL LEAD BARATO PUEDE SER PELIGROSO
        </h2>

        <div
          className="rounded-2xl p-6 md:p-10 border border-border/30 bg-background space-y-6"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? "cinematic-rotate-in 1.5s ease-out 0.5s forwards" : "none",
            animationFillMode: "both",
          }}
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 mt-1 flex-shrink-0 text-primary" />
            <div className="space-y-4 font-grotesk text-lg text-foreground/85 leading-relaxed">
              <p>Hay una métrica que genera una falsa sensación de seguridad en publicidad digital:</p>
              <p className="font-semibold text-foreground">El coste por lead bajo.</p>
              <p>Cuando el CPL baja, parece que todo funciona. Parece que el sistema es sólido. Parece el momento de escalar.</p>
              <p>Pero ese número no muestra toda la realidad.</p>
            </div>
          </div>
        </div>

        <div
          className="rounded-2xl p-6 md:p-10 border border-primary/20 bg-background space-y-6"
          style={{
            boxShadow: "0 0 40px rgba(232, 255, 0, 0.05)",
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? "cinematic-clip-reveal 1.8s ease-out 1s forwards" : "none",
            animationFillMode: "both",
          }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Target className="w-6 h-6 text-primary" />
            <p className="text-gradient-yellow glow-yellow-text font-semibold text-xl font-grotesk">
              Un CPL bajo no significa que hayas creado demanda nueva.
            </p>
          </div>
          <div className="h-px w-full bg-border/20" />
          <div className="space-y-4 font-grotesk text-lg text-foreground/85 leading-relaxed">
            <p>Muchas veces solo capturaste demanda que ya existía.</p>
            <p>Personas que ya conocían tu marca. Que ya estaban cerca de comprar.</p>
            <p className="font-semibold text-foreground">No creaste demanda. Solo recogiste la que estaba madura.</p>
            <p>Y cuando intentas escalar eso con presupuesto nuevo…</p>
            <p>El sistema no aguanta.</p>
            <p>El CPL sube. El ROAS cae.</p>
            <p>Y lo que parecía funcionar… deja de funcionar.</p>
          </div>
        </div>

        <div
          className="rounded-xl p-5 bg-card border border-primary/10 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? "cinematic-blur-in 1.2s ease-out 2s forwards" : "none",
            animationFillMode: "both",
          }}
        >
          <p className="text-gradient-yellow glow-yellow-text font-grotesk font-semibold text-xl">
            Lo que pasó es que nunca fue un sistema. Era una fotografía estática. No veías la película en movimiento.
          </p>
        </div>

        <div
          className="flex justify-center pt-8"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? "cinematic-up 1s ease-out 2.8s forwards" : "none",
            animationFillMode: "both",
          }}
        >
          <CTAButton>Quiero dejar de tomar decisiones equivocadas</CTAButton>
        </div>
      </div>
    </section>
  );
};

export default SectionLeadBarato;
