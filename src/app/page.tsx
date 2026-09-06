import About from '@/components/About';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen relative pb-36 sm:pb-40 bg-black text-white selection:bg-white selection:text-black">
      <Hero />
      <About />
    </main>
  );
}
