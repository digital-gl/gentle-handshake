import { Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-card border-t border-border/30">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/indale.delafuente/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary/80 hover:text-primary hover:border-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.youtube.com/@Indale.delafuente"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary/80 hover:text-primary hover:border-primary transition-colors"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>

        {/* Text */}
        <div className="text-center space-y-1 font-grotesk text-sm text-muted-foreground">
          <p>Copy por <span className="font-semibold text-foreground">Indale de La Fuente</span></p>
          <p>Lanzado por <span className="font-semibold text-foreground">BM Coproducciones</span></p>
          <p>Todos los derechos reservados © {new Date().getFullYear()}</p>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 pt-4 border-t border-border/20 w-full">
          <p className="text-center text-xs text-muted-foreground/60 font-grotesk leading-relaxed">
            Este site no está afiliado a Facebook o a cualquier entidad de Facebook. Después de salir de Facebook, la responsabilidad no es de Facebook, sino de nuestro sitio. Hacemos todos los esfuerzos para indicar claramente y mostrar todas las pruebas del producto y usamos resultados reales. No garantizamos que vayas a tener los mismos resultados debido a que estos dependen del trabajo y dedicación de cada uno. Este producto no garantiza la obtención de resultados. Cualquier referencia al desempeño de una estrategia no debe ser interpretada como una garantía de resultados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
