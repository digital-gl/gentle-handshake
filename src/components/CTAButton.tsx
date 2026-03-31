interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
}

const CHECKOUT_URL = "https://pay.hotmart.com/G104619066X?off=c7hkwf9e&checkoutMode=10";

const CTAButton = ({ children, className = "" }: CTAButtonProps) => {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-gradient-yellow text-black font-grotesk font-bold text-sm md:text-base px-8 py-4 rounded-lg 
        transition-all duration-300 hover:scale-105 glow-yellow cursor-pointer whitespace-nowrap
        hover:shadow-[0_0_30px_rgba(232,255,0,0.5)] ${className}`}
    >
      {children}
    </a>
  );
};

export default CTAButton;
