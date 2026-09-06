import About from '@/components/About';
import Hero from '@/components/Hero';

const Home = () => {
  return (
    <div className="min-h-screen relative pb-36 sm:pb-40">
      <Hero />
      <About />
    </div>
  );
};

export default Home;
