import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Calculator from '@/components/Calculator';
import PricingExplained from '@/components/PricingExplained';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <Hero />
      <div className="relative">
        <Calculator />
        <PricingExplained />
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
