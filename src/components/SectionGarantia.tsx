import CTAButton from "./CTAButton";
import Shield3D from "./Shield3D";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SectionGarantia = () => {
  const { ref, isVisible } = useScrollReveal(0.12);

  return (
    <section ref={ref} className="py-20 md:py-28 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <div
          className="rounded-2xl p-8 md:p-12 space-y-6 border border-primary/20 text-center bg-background"
          style={{
            boxShadow: "0 0 60px rgba(232, 255, 0, 0.06), 0 0 120px rgba(232, 255, 0, 0.03)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease-out",
          }}
        >
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
              transition: "all 0.7s ease-out 0.15s",
            }}
          >
            <Shield3D />
          </div>

          <h3
            className="text-gradient-yellow glow-yellow-text font-grotesk font-bold text-2xl md:text-3xl"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
              transition: "all 0.7s ease-out 0.3s",
            }}
          >
            Tienes 15 días para comprobarlo.
          </h3>

          <div
            className="space-y-4 font-grotesk text-lg text-foreground/85 leading-relaxed text-left"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
              transition: "all 0.7s ease-out 0.45s",
            }}
          >
            <p>Accede al Diagnóstico, aplícalo con honestidad y analiza tu operación.</p>
            <p>Si sientes que no ha cambiado nada en cómo interpretas tus métricas, pides el reembolso. Sin preguntas. Sin complicaciones.</p>
            <p>Pero considera esto antes de decidir:</p>
            <p className="font-semibold text-foreground">El riesgo real no son 17€.</p>
            <p>El riesgo real es seguir aumentando presupuesto sin saber si tu estructura lo aguanta. Seguir tomando decisiones viendo solo la fotografía.</p>
            <p className="text-gradient-yellow glow-yellow-text font-semibold">Ese error se paga en cada campaña.</p>
          </div>

          <div
            className="pt-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
              transition: "all 0.7s ease-out 0.6s",
            }}
          >
            <CTAButton>Quiero detener la escalada de errores</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionGarantia;
