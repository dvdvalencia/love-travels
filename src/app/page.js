import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-greenblue">
      <NavBar />
      <HeroSection />
      {/* Footer */}
      <Footer />
    </main>
  );
}