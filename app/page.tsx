import Brands from "./_components/Brands";
import HeroSection from "./_components/HeroSection";
import Services from "./_components/Services";
import VisionMision from "./_components/VisionMision";
import { AppleCardsCarouselDemo } from "./_components/Carousel";
import Popup from "./_components/Layout/Popup";

export default function Home() {
  return (
    <>
      <Popup />
      <HeroSection />
      <Brands />
      <Services />
      <VisionMision />
      <AppleCardsCarouselDemo />

    </>
  );
}
