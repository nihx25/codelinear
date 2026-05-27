import Button from '../Button';
import device1 from '../../assets/images/device1.png';
import './ProductSection.css';

const ProductSection = ({
  heading = 'A complete cloud-based core banking.',
  subtitle = 'Faster time to market with our cloud-based core banking services',
  ctaLabel = 'Request Demo',
  learnMoreLabel = 'Learn More',
  onCtaClick,
  learnMoreHref = '#',
  image = device1,
  imageAlt = 'Core Banking Dashboard',
}) => (
  <section className="product-section">
    <div className="product-section__left">
      <h2 className="product-section__heading">{heading}</h2>
      <p className="product-section__subtitle">{subtitle}</p>
      <Button variant="primary" label={ctaLabel} onClick={onCtaClick} />
      <a href={learnMoreHref} className="product-section__learn-more">
        {learnMoreLabel} <span>→</span>
      </a>
    </div>
    <div className="product-section__right">
      <img src={image} alt={imageAlt} className="product-section__image" />
    </div>
  </section>
);

export default ProductSection;
