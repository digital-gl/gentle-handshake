import MarqueeBanner from "@/components/MarqueeBanner";
import HeroSection from "@/components/HeroSection";
import SectionProblema from "@/components/SectionProblema";
import SectionEnemigo from "@/components/SectionEnemigo";
import SectionOperadores from "@/components/SectionOperadores";
import SectionSolucion from "@/components/SectionSolucion";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import SectionOferta from "@/components/SectionOferta";
import SectionGarantia from "@/components/SectionGarantia";
import SectionDivider from "@/components/SectionDivider";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <StickyBottomCTA />
      <MarqueeBanner />
      <HeroSection />
      <SectionDivider />
      <SectionProblema />
      <SectionDivider />
      <SectionEnemigo />
      <SectionDivider />
      <SectionOperadores />
      <SectionDivider />
      <SectionSolucion />
      <SectionDivider />
      <TestimonialCarousel />
      <SectionDivider />
      <SectionOferta />
      <SectionDivider />
      <SectionGarantia />
      <SectionDivider />
      <Footer />
    </div>
  );
};

export default Index;
