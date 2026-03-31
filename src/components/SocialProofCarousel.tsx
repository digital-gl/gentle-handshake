import { useScrollReveal } from "@/hooks/useScrollReveal";

const SocialProofCarousel = () => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const placeholders = Array.from({ length: 6 }, (_, i) => i);

  const Column = ({ offset = 0 }: {offset?: number;}) =>
  <div className="overflow-hidden h-[500px] relative">
      <div
      className="animate-scroll-vertical flex flex-col gap-4"
      style={{ animationDelay: `${offset}s` }}>
      
        {[...placeholders, ...placeholders].map((_, i) =>
      <div
        key={i}
        className="w-full aspect-[3/4] rounded-xl flex items-center justify-center bg-card"
        style={{
          minHeight: "200px",
          border: "2px solid transparent",
          borderImage: "linear-gradient(135deg, #E8FF00, #F5FF80, #FFFDE6, #F5FF80, #E8FF00) 1",
          boxShadow: "0 0 15px rgba(232,255,0,0.15), 0 0 30px rgba(232,255,0,0.05)"
        }}>
        
            <p className="text-muted-foreground font-grotesk text-sm">Prueba social</p>
          </div>
      )}
      </div>
    </div>;


  return (
    <section
      ref={ref}
      className="px-6 py-[8px]"
      style={{
        opacity: isVisible ? 1 : 0,
        animation: isVisible ? "cinematic-fade 1s ease-out forwards" : "none"
      }}>
      
      <div className="max-w-6xl mx-auto">
        {/* Container com efeito fumaça nas bordas */}
        <div className="relative">
          {/* Efeito fumaça superior */}
          <div
            className="absolute top-0 left-0 right-0 h-32 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, hsl(var(--background)) 0%, hsl(var(--background) / 0.8) 30%, transparent 100%)"
            }} />
          
          
          {/* Efeito fumaça inferior */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background) / 0.8) 30%, transparent 100%)"
            }} />
          
          
          {/* Gradiente adicional para suavizar mais */}
          <div
            className="absolute top-0 left-0 right-0 h-16 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 100%)"
            }} />
          
          <div
            className="absolute bottom-0 left-0 right-0 h-16 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)"
            }} />
          
          
          <div className="hidden md:grid grid-cols-3 gap-6">
            <Column offset={0} />
            <Column offset={-2} />
            <Column offset={-4} />
          </div>
          <div className="grid md:hidden grid-cols-2 gap-4">
            <Column offset={0} />
            <Column offset={-2} />
          </div>
        </div>
      </div>
    </section>);

};

export default SocialProofCarousel;