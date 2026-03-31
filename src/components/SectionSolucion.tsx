import CTAButton from "./CTAButton";
import { Search, GitBranch, Shield, FlaskConical, Brain } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";

const GrowingChart = ({ isVisible }: { isVisible: boolean }) => {
  const bars = [
    { targetHeight: 25, icon: Search, label: "Identificar" },
    { targetHeight: 45, icon: GitBranch, label: "Separar" },
    { targetHeight: 60, icon: Shield, label: "Verificar" },
    { targetHeight: 78, icon: FlaskConical, label: "Probar" },
    { targetHeight: 95, icon: Brain, label: "Decidir" },
  ];

  return (
    <div
      className="rounded-2xl p-6 md:p-8 bg-card border border-border/30"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
        transition: "all 0.7s ease-out 0.6s",
      }}
    >
      <p className="text-center text-muted-foreground font-grotesk text-sm mb-6 uppercase tracking-wider">
        Diagnóstico de Decisión · crecimiento estructurado
      </p>
      <div className="flex items-end justify-center gap-3 md:gap-6" style={{ height: "220px", perspective: "600px" }}>
        {bars.map((bar, i) => (
          <div key={i} className="flex flex-col items-center gap-2 flex-1 max-w-[80px]" style={{ height: "100%" }}>
            <div className="w-full flex-1 flex items-end">
              <div
                className="w-full relative"
                style={{
                  height: `${bar.targetHeight}%`,
                  transformOrigin: "bottom center",
                  transform: isVisible
                    ? `perspective(400px) rotateX(-8deg) rotateY(-6deg) scaleY(1)`
                    : `perspective(400px) rotateX(-8deg) rotateY(-6deg) scaleY(0)`,
                  transition: `transform 2.5s cubic-bezier(0.22, 1, 0.36, 1) ${1 + i * 0.5}s`,
                  borderRadius: "6px 6px 0 0",
                }}
              >
                <div
                  className="absolute inset-0 rounded-t-md"
                  style={{
                    background: `linear-gradient(180deg, 
                      hsl(66, 100%, ${95 - i * 8}%) 0%, 
                      hsl(66, 100%, ${70 - i * 5}%) 40%,
                      #E8FF00 100%)`,
                    boxShadow: `inset -4px 0 8px rgba(0,0,0,0.15), inset 0 2px 4px rgba(255,255,255,0.4), 0 0 ${10 + i * 4}px rgba(232,255,0,${0.15 + i * 0.05})`,
                  }}
                />
                <div
                  className="absolute top-0 left-0 h-full rounded-tl-md"
                  style={{
                    width: "10px",
                    background: `linear-gradient(180deg, 
                      hsl(66, 80%, ${80 - i * 6}%) 0%, 
                      hsl(66, 90%, ${55 - i * 5}%) 100%)`,
                    transform: "skewY(4deg)",
                    transformOrigin: "top left",
                    borderRight: "1px solid rgba(232,255,0,0.2)",
                  }}
                />
              </div>
            </div>
            <bar.icon className="w-4 h-4 text-primary/70 flex-shrink-0" />
            <span className="text-[10px] md:text-xs text-muted-foreground font-grotesk text-center leading-tight">
              {bar.label}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border/20 text-center">
        <p className="text-gradient-yellow glow-yellow-text font-grotesk text-sm font-semibold">
          Estructura → Evidencia → Escala segura
        </p>
      </div>
    </div>
  );
};

const SectionSolucion = () => {
  const { ref, isVisible } = useScrollReveal(0.12);
  const [lineProgress, setLineProgress] = useState(0);
  const [revealedItems, setRevealedItems] = useState<number[]>([]);

  const items = [
    { icon: Search, text: "Si la demanda que capturas es demanda que creaste o demanda que ya existía." },
    { icon: GitBranch, text: "Si tu estructura aguanta más presión o se fractura al escalar." },
    { icon: Shield, text: "Dónde exactamente está la fuga que las métricas no te están mostrando." },
    { icon: FlaskConical, text: "Qué arreglar primero y en qué orden." },
    { icon: Brain, text: "Cuando terminas, no tienes más datos. Tienes criterio." },
  ];

  useEffect(() => {
    if (!isVisible) return;

    const totalItems = items.length;
    const segmentDuration = 800;
    const startDelay = 700;

    const firstTimeout = setTimeout(() => {
      setRevealedItems([0]);
    }, startDelay);

    const timeouts: NodeJS.Timeout[] = [firstTimeout];

    for (let i = 1; i <= totalItems; i++) {
      const timeout = setTimeout(() => {
        setLineProgress(i / (totalItems - 1));
        if (i < totalItems) {
          setRevealedItems((prev) => [...prev, i]);
        }
      }, startDelay + i * segmentDuration);
      timeouts.push(timeout);
    }

    return () => timeouts.forEach(clearTimeout);
  }, [isVisible]);

  return (
    <section ref={ref} className="py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        <div
          className="text-center space-y-3"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease-out",
          }}
        >
          <p className="text-foreground/80 font-grotesk text-lg">Para eso existe el</p>
          <h2 className="text-gradient-yellow glow-yellow-text font-grotesk font-bold text-3xl md:text-4xl">
            DIAGNÓSTICO DE DECISIÓN
          </h2>
          <p className="text-foreground/80 font-grotesk text-lg">
            No es un curso. No es una consultoría. Es una radiografía de tu operación en 7 bloques. Al terminar, sabes exactamente en qué punto estás y cuál es tu próximo movimiento.
          </p>
        </div>

        <p
          className="text-center text-foreground/80 font-grotesk text-lg"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease-out 0.15s",
          }}
        >
          Bloque por bloque, vas a ver:
        </p>

        {/* Flow with vertical line through icons */}
        <div className="relative">
          <div
            className="absolute left-[27px] md:left-[29px] top-[28px] w-[2px] rounded-full z-0"
            style={{
              height: `calc(${lineProgress * 100}% - ${lineProgress * 56}px)`,
              maxHeight: "calc(100% - 56px)",
              background: "linear-gradient(180deg, #E8FF00, #F5FF80, #FFFDE6)",
              boxShadow: "0 0 10px rgba(232,255,0,0.6), 0 0 25px rgba(232,255,0,0.3)",
              transition: "height 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
          <div className="space-y-5 relative z-10">
            {items.map((item, i) => {
              const isRevealed = revealedItems.includes(i);
              return (
                <div
                  key={i}
                  className="flex items-center gap-4"
                  style={{
                    opacity: isRevealed ? 1 : 0,
                    transform: isRevealed ? "translateX(0)" : "translateX(-20px)",
                    transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
                  }}
                >
                  <div
                    className="w-[56px] h-[56px] min-w-[56px] rounded-full flex items-center justify-center bg-background border-2 border-primary relative z-10"
                    style={{
                      boxShadow: isRevealed
                        ? "0 0 15px rgba(232,255,0,0.5), 0 0 30px rgba(232,255,0,0.2)"
                        : "none",
                      transition: "box-shadow 0.8s ease-out",
                    }}
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div
                    className="flex-1 p-4 rounded-xl border border-primary/20"
                    style={{
                      boxShadow: isRevealed ? "0 0 12px rgba(232,255,0,0.08)" : "none",
                      transition: "box-shadow 0.8s ease-out",
                    }}
                  >
                    <p className="text-foreground/90 font-grotesk text-lg">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <GrowingChart isVisible={isVisible} />

        <div
          className="rounded-2xl p-6 md:p-8 bg-card border border-border/30 space-y-4 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease-out 0.75s",
          }}
        >
          <p className="text-gradient-yellow glow-yellow-text font-grotesk font-semibold text-xl">
            Y con criterio, cada decisión que tomes a partir de aquí va a ser diferente.
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
          <CTAButton>Quiero saber en qué punto está mi negocio</CTAButton>
        </div>
      </div>
    </section>
  );
};

export default SectionSolucion;
