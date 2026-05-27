import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import FeaturesSection from '../../components/FeaturesSection';
import ProductSection from '../../components/ProductSection';
import CoreBankingSection from '../../components/CoreBankingSection';
import MobileShowcaseSection from '../../components/MobileShowcaseSection';
import CtaBanner from '../../components/CtaBanner';
import InsightsSection from '../../components/InsightsSection';
import CaseStudiesSection from '../../components/CaseStudiesSection';
import PaperlessSection from '../../components/PaperlessSection';
import FooterSection from '../../components/FooterSection';
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
      <MobileShowcaseSection />
      <InsightsSection />
      <CaseStudiesSection />
      <PaperlessSection />
      <FooterSection />
    </div>
  );
};

export default Home;
