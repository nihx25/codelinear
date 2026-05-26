import Button from '../Button';
import TrustedBy from '../TrustedBy';
import girlImage from '../../assets/images/girl.png';
import recentActivityImage from '../../assets/images/recentActivity.png';
import totalBalanceImage from '../../assets/images/totalBalance.png';
import './HeroSection.css';

const HeroSection = ({
  title = <>The new foundation <br /> of modern banking</>,
  subtitle = <>We drive innovation and growth, provide seamless <br /> customer experience and operational excellence</>,
  primaryLabel = 'Request Demo',
  secondaryLabel = 'Contact Us',
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <section className="hero">
      <div className="hero__left">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        <div className="hero__actions">
          <Button variant="primary" label={primaryLabel} onClick={onPrimaryClick} />
          <Button variant="secondary" label={secondaryLabel} onClick={onSecondaryClick} />
        </div>
        <TrustedBy />
      </div>

      <div className="hero__right">
        <div className="hero__image-group">
          <div className="hero__gradient-bg" />
          <img src={girlImage} alt="Banking" className="hero__girl-img" />
          <img src={totalBalanceImage} alt="" className="hero__card hero__card--balance" />
          <img src={recentActivityImage} alt="" className="hero__card hero__card--activity" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
