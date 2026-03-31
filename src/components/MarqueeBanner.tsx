const MarqueeBanner = ({ thin = false }: { thin?: boolean }) => {
  const content = "DIAGNÓSTICO DE DECISIÓN ✦ ESCALA CON ESTRUCTURA ✦ DEJA DE DECIDIR EN LA OSCURIDAD ✦ INTERPRETA MÉTRICAS CORRECTAMENTE ✦ SISTEMAS > RESULTADOS ✦ ";

  return (
    <div
      className={`w-full overflow-hidden border-y border-primary/40 bg-card ${thin ? "py-2" : "py-3"}`}
    >
      <div
        className={`flex whitespace-nowrap ${thin ? "animate-marquee-slow" : "animate-marquee"}`}
        style={{ width: "200%" }}
      >
        <span
          className={`font-grotesk font-semibold tracking-widest uppercase ${thin ? "text-xs" : "text-sm"}`}
          style={{
            background: "linear-gradient(135deg, #E8FF00, #F5FF80, #FFFDE6, #F5FF80, #E8FF00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none",
            filter: "drop-shadow(0 0 8px rgba(232,255,0,0.4))",
          }}
        >
          {content}{content}
        </span>
        <span
          className={`font-grotesk font-semibold tracking-widest uppercase ${thin ? "text-xs" : "text-sm"}`}
          style={{
            background: "linear-gradient(135deg, #E8FF00, #F5FF80, #FFFDE6, #F5FF80, #E8FF00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none",
            filter: "drop-shadow(0 0 8px rgba(232,255,0,0.4))",
          }}
        >
          {content}{content}
        </span>
      </div>
    </div>
  );
};

export default MarqueeBanner;
