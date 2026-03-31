import CTAButton from "./CTAButton";
import { Ghost, Zap, DollarSign, TrendingDown, BarChart3, Target, AlertTriangle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import FotografiaVsSistema from "./FotografiaVsSistema";

const DecliningChart = ({ isVisible }: { isVisible: boolean }) => {
  const bars = [
    { targetScale: 1, icon: DollarSign, label: "Confianza" },
    { targetScale: 0.75, icon: TrendingDown, label: "Decisión" },
    { targetScale: 0.50, icon: BarChart3, label: "Escala" },
    { targetScale: 0.30, icon: Target, label: "Rendimiento" },
    { targetScale: 0.12, icon: AlertTriangle, label: "Fractura" },
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
        Escala por fotografía · el declive inevitable
      </p>
      <div className="flex items-end justify-center gap-3 md:gap-6" style={{ height: "220px", perspective: "600px" }}>
        {bars.map((bar, i) => (
          <div key={i} className="flex flex-col items-center gap-2 flex-1 max-w-[80px]" style={{ height: "100%" }}>
            <div className="w-full flex-1 flex items-end">
              <div
                className="w-full relative"
                style={{
                  height: `${bar.targetScale * 100}%`,
                  transformOrigin: "bottom center",
                  transform: isVisible
                    ? `perspective(400px) rotateX(-8deg) rotateY(6deg) scaleY(1)`
                    : `perspective(400px) rotateX(-8deg) rotateY(6deg) scaleY(0)`,
                  transition: `transform 2.5s cubic-bezier(0.22, 1, 0.36, 1) ${1 + i * 0.5}s`,
                  borderRadius: "6px 6px 0 0",
                }}
              >
                <div
                  className="absolute inset-0 rounded-t-md"
                  style={{
                    background: `linear-gradient(180deg, 
                      hsl(0, 0%, ${95 - i * 18}%) 0%, 
                      hsl(0, 0%, ${75 - i * 14}%) 50%,
                      hsl(0, 0%, ${55 - i * 10}%) 100%)`,
                    boxShadow: `inset -4px 0 8px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.2)`,
                  }}
                />
                <div
                  className="absolute top-0 right-0 h-full rounded-tr-md"
                  style={{
                    width: "10px",
                    background: `linear-gradient(180deg, 
                      hsl(0, 0%, ${80 - i * 16}%) 0%, 
                      hsl(0, 0%, ${50 - i * 10}%) 100%)`,
                    transform: "skewY(-4deg)",
                    transformOrigin: "top right",
                    borderLeft: "1px solid rgba(0,0,0,0.15)",
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
          Más presupuesto ≠ Más resultado
        </p>
      </div>
    </div>
  );
};

const SectionEnemigo = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2
          className="text-gradient-yellow glow-yellow-text font-grotesk font-bold text-3xl md:text-4xl text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease-out",
          }}
        >
          EL ENEMIGO INVISIBLE
        </h2>

        <div
          className="rounded-2xl p-6 md:p-10 border border-border/30 bg-card space-y-6 transition-all duration-200 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(232,255,0,0.08)]"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.7s ease-out 0.15s, transform 0.7s ease-out 0.15s, border-color 0.2s, box-shadow 0.2s",
          }}
        >
          <div className="flex items-start gap-4">
            <Ghost className="w-6 h-6 mt-1 flex-shrink-0 text-primary" />
            <div className="space-y-4 font-grotesk text-lg text-foreground/85 leading-relaxed">
              <p>Detrás de cada resultado que se rompe al escalar hay un mecanismo concreto. No es el algoritmo. No es Andromeda. No es mala racha.</p>
            </div>
          </div>
        </div>

        <div
          className="rounded-2xl p-6 md:p-10 border border-primary/20 bg-card space-y-6 transition-all duration-200 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(232,255,0,0.08)]"
          style={{
            boxShadow: "0 0 40px rgba(232, 255, 0, 0.05)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.7s ease-out 0.3s, transform 0.7s ease-out 0.3s, border-color 0.2s, box-shadow 0.2s",
          }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-6 h-6 text-primary" />
            <p className="text-gradient-yellow glow-yellow-text font-semibold text-xl font-grotesk">
              Ese mecanismo tiene nombre: Escala por Fotografía.
            </p>
          </div>
          <div className="h-px w-full bg-border/20" />
          <div className="space-y-4 font-grotesk text-lg text-foreground/85 leading-relaxed">
            <p>Primero genera confianza. El CPL baja. El ROAS sube.</p>
            <p>Entonces decides escalar.</p>
            <p>Subes presupuesto… y el resultado cambia.</p>
            <p>¿Por qué?</p>
            <p>Porque tomaste una decisión estructural basada en un resultado momentáneo.</p>
            <p className="font-semibold text-foreground">Viste el número. No viste el sistema. Y escalaste una fotografía creyendo que era el proceso completo.</p>
          </div>
        </div>

        <FotografiaVsSistema />

        <DecliningChart isVisible={isVisible} />

        <div
          className="flex justify-center pt-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease-out 0.75s",
          }}
        >
          <CTAButton>Quiero ver el sistema completo</CTAButton>
        </div>
      </div>
    </section>
  );
};

export default SectionEnemigo;
