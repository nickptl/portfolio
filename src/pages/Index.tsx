import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}