import CTAButton from "./CTAButton";
import { Brain, Search, Shield, GitBranch } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";

const SectionOperadores = () => {
  const { ref, isVisible } = useScrollReveal(0.12);
  const [revealedCards, setRevealedCards] = useState<number[]>([]);

  const items = [
    { icon: Search, text: "Antes de subir presupuesto, preguntan: ¿de dónde viene esta demanda? ¿Es demanda que he creado o demanda que he capturado?" },
    { icon: Shield, text: "¿Aguanta el sistema más presión o se va a fracturar?" },
    { icon: GitBranch, text: "No suben por emoción. Suben cuando tienen evidencia. No cortan cuando algo baja. Entienden primero por qué bajó." },
    { icon: Brain, text: "No optimizan lo que se ve. Arreglan lo que no se ve pero que está moviendo los resultados." },
  ];

  useEffect(() => {
    if (!isVisible) return;
    const timeouts: NodeJS.Timeout[] = [];
    items.forEach((_, i) => {
      const timeout = setTimeout(() => {
        setRevealedCards(prev => [...prev, i]);
      }, 800 + i * 700);
      timeouts.push(timeout);
    });
    return () => timeouts.forEach(clearTimeout);
  }, [isVisible]);

  return (
    <section ref={ref} className="py-20 md:py-28 px-6 bg-card">
      <div className="max-w-4xl mx-auto space-y-10">
        <h2
          className="text-gradient-yellow glow-yellow-text font-grotesk font-bold text-3xl md:text-4xl text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease-out",
          }}
        >
          LO QUE SEPARA A QUIEN ESCALA BIEN DE QUIEN ESCALA MAL
        </h2>

        <div
          className="rounded-2xl p-6 md:p-10 border border-border/30 bg-background space-y-6 transition-all duration-200 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(232,255,0,0.08)]"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.7s ease-out 0.15s, transform 0.7s ease-out 0.15s, border-color 0.2s, box-shadow 0.2s",
          }}
        >
          <p className="font-grotesk text-lg text-foreground/85 leading-relaxed">
            Los que escalan bien no tienen mejores creativos ni más presupuesto. Tienen un sistema de decisión diferente.
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, i) => {
            const isRevealed = revealedCards.includes(i);
            return (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl border border-border/30 bg-background overflow-hidden transition-all duration-200 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(232,255,0,0.08)]"
                style={{
                  opacity: isRevealed ? 1 : 0,
                  transform: isRevealed ? "translateY(0) scale(1)" : "translateY(20px) scale(0.98)",
                  transition: `all 1.2s cubic-bezier(0.22, 1, 0.36, 1)`,
                }}
              >
                <item.icon className="w-6 h-6 mt-1 flex-shrink-0 text-primary" />
                <p className="text-foreground/90 font-grotesk text-lg">{item.text}</p>
              </div>
            );
          })}
        </div>

        <div
          className="rounded-2xl p-6 md:p-8 bg-background border border-primary/20 space-y-4 text-center"
          style={{
            boxShadow: "0 0 40px rgba(232, 255, 0, 0.05)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease-out 0.6s",
          }}
        >
          <p className="text-gradient-yellow glow-yellow-text font-grotesk font-semibold text-xl">
            La diferencia no es técnica. Es criterio. Y el criterio empieza cuando dejas de leer métricas como resultados y empiezas a leerlas como síntomas.
          </p>
        </div>

        <div
          className="flex justify-center pt-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease-out 0.75s",
          }}
        >
          <CTAButton>Quiero operar con criterio</CTAButton>
        </div>
      </div>
    </section>
  );
};

export default SectionOperadores;
