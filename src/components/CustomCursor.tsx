import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.transform = `translate(${cursorX - 4}px, ${cursorY - 4}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    requestAnimationFrame(animate);

    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
      style={{
        backgroundColor: "#E8FF00",
        boxShadow: "0 0 8px rgba(232,255,0,0.6)",
        mixBlendMode: "difference",
      }}
    />
  );
};

export default CustomCursor;
