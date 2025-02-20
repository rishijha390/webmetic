import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ITServicesSection from "./components/ITServiceSection";
import Opportunits from "./components/Opportunits";
import FooterComponent from "./components/FooterComponent";
import StepComponent from "./components/StepComponent";
export default function App() {
  return (
    <main className="w-full min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ITServicesSection />
      <Opportunits />
      <StepComponent />
      <FooterComponent />
    </main>
  );
}
