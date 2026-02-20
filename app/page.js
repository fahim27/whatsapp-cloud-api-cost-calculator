import Hero from "@/components/Hero";
import Calculator from "@/components/Calculator";
import Explanation from "@/components/Explanation";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Page Content */}
      <Hero />
      <div id="calculator-section">
        <Calculator />
      </div>
      <div id="explanation">
        <Explanation />
      </div>
      <Footer />
    </main>
  );
}
