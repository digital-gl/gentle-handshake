import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  title: string;
  text: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Alex Rovira",
    title: "Escritor Best Seller",
    stars: 5,
    text: "Proyecto totalmente nuevo en 2024. Invertimos 130.182€ y facturamos 943.139€. Casi un x9. Cuando sabes exactamente qué estás escalando, los números cambian.",
  },
  {
    name: "Walter Risso",
    title: "Escritor Best Seller",
    stars: 4,
    text: "Primer lanzamiento: invertimos 23.003€ y facturamos 199.250€. La diferencia entre escalar con criterio y escalar por intuición es exactamente eso.",
  },
  {
    name: "Vivir de tu Pasión",
    title: "Alejandro Novás",
    stars: 5,
    text: "De 200K en 2018 a más de 10 millones en 5 años. El punto de inflexión fue entender la estructura antes de escalar el presupuesto.",
  },
  {
    name: "Andrea Redondo",
    title: "Evento Presencial",
    stars: 5,
    text: "Sold out completo. Lo que funcionó no fue subir presupuesto el día del lanzamiento. Fue construir la estructura correcta un mes antes.",
  },
  {
    name: "Jardín de las Delicias",
    title: "Festival",
    stars: 4,
    text: "Sold out en 2019, 2022 y 2023. De 20.000 a casi 50.000 entradas. Cada edición escalamos porque sabíamos exactamente qué estaba funcionando y por qué.",
  },
  {
    name: "Congresos Digitales",
    title: "Organizador",
    stars: 4,
    text: "Congreso de Inversores, Congreso Inmo, Congreso Diabetes. Más de 20 millones facturados en 5 años. El patrón fue siempre el mismo: diagnosticar antes de escalar.",
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`w-4 h-4 ${star <= count ? "fill-primary text-primary" : "text-muted-foreground/30"}`}
      />
    ))}
  </div>
);

const TestimonialSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="py-20 md:py-28 px-6 bg-card">
      <div className="max-w-5xl mx-auto space-y-10">
        <h2
          className="text-gradient-yellow glow-yellow-text font-grotesk font-bold text-3xl md:text-4xl text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease-out",
          }}
        >
          RESULTADOS REALES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-xl p-5 bg-background flex flex-col gap-3 transition-all duration-200 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(232,255,0,0.08)]"
              style={{
                border: "1px solid hsl(var(--border) / 0.3)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.7s ease-out ${0.15 * (i + 1)}s, transform 0.7s ease-out ${0.15 * (i + 1)}s, border-color 0.2s, box-shadow 0.2s`,
              }}
            >
              <StarRating count={t.stars} />
              <div>
                <h4 className="font-grotesk font-bold text-foreground text-base">{t.name}</h4>
                <p className="text-muted-foreground text-xs font-grotesk uppercase tracking-wider">{t.title}</p>
              </div>
              <p className="text-muted-foreground text-sm font-grotesk leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
