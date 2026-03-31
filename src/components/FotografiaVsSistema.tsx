import { Camera } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FotografiaVsSistema = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 items-stretch my-8">
      {/* Left panel */}
      <div
        className="rounded-xl p-5 border space-y-3"
        style={{
          backgroundColor: "hsl(0 0% 5%)",
          borderColor: "hsl(0 60% 40% / 0.4)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateX(0)" : "translateX(-40px)",
          transition: "all 0.8s ease-out",
        }}
      >
        <p className="text-xs font-grotesk font-bold uppercase tracking-widest" style={{ color: "hsl(15 80% 55%)" }}>
          LO QUE VES
        </p>
        <div className="font-mono text-sm space-y-2 text-foreground/80">
          <p>ROAS <span className="text-foreground/50">→</span> <span className="text-foreground">4.8</span></p>
          <p>CPL <span className="text-foreground/50">→</span> <span className="text-foreground">€2.1</span></p>
          <p>Ventas <span className="text-foreground/50">→</span> <span className="text-foreground">47</span></p>
        </div>
      </div>

      {/* Camera icon */}
      <div className="flex items-center justify-center px-4">
        <Camera
          className="w-6 h-6"
          style={{
            color: "hsl(var(--muted-foreground))",
            animation: "camera-flash 2s ease-in-out infinite",
          }}
        />
      </div>

      {/* Right panel */}
      <div
        className="rounded-xl p-5 border space-y-3"
        style={{
          backgroundColor: "hsl(0 0% 5%)",
          borderColor: "hsl(72 100% 50% / 0.3)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateX(0)" : "translateX(40px)",
          transition: "all 0.8s ease-out 0.1s",
        }}
      >
        <p className="text-xs font-grotesk font-bold uppercase tracking-widest text-primary">
          LO QUE NO VES
        </p>
        <div className="font-mono text-sm space-y-2 text-foreground/80">
          <p>Origen de demanda <span className="text-foreground/50">→</span> <span className="text-primary/60">???</span></p>
          <p>Presión soportada <span className="text-foreground/50">→</span> <span className="text-primary/60">???</span></p>
          <p>Demanda creada vs capturada <span className="text-foreground/50">→</span> <span className="text-primary/60">???</span></p>
        </div>
      </div>
    </div>
  );
};

export default FotografiaVsSistema;
