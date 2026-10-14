import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TechSection from './components/TechSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* navbar */}
      <Navbar />
      <main className="flex-1">
        <Banner />
        <TechSection />
      </main>
      <Footer />
    </div>
  );
}
