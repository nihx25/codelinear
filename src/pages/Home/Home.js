import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import FeaturesSection from '../../components/FeaturesSection';
import ProductSection from '../../components/ProductSection';
import CoreBankingSection from '../../components/CoreBankingSection';
import CtaBanner from '../../components/CtaBanner';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductSection />
      <CoreBankingSection />
      <CtaBanner />
    </div>
  );
};

export default Home;
