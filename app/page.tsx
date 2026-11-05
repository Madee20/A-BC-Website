import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
/*import WhyUs from "@/components/WhyUs";*/
import VisionMissionValues from "@/components/VisionMissionValues";
/*import Process from "@/components/Process";*/
import ContactBooking from "@/components/ContactBooking";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="bg-cream text-navy">
      <Header />
      <Hero />
      <StatsBar />
      <VisionMissionValues />
      <Services />
      <ContactBooking />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
