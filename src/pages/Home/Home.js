import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import FeaturesSection from '../../components/FeaturesSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
