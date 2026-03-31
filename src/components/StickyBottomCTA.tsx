import { useState, useEffect } from "react";
import CTAButton from "./CTAButton";

const StickyBottomCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-400 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{
        backgroundColor: "rgba(8, 8, 8, 0.96)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid #222",
        height: "64px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <p className="hidden md:block text-muted-foreground font-grotesk text-sm">
          Diagnóstico de Decisión
        </p>
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <CTAButton className="text-sm px-6 py-3 md:text-base md:px-10 md:py-3 w-[90%] md:w-auto text-center">
            Acceder por 17€
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default StickyBottomCTA;
