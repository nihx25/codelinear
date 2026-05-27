import Ticker from '../Ticker';
import Button from '../Button';
import CtaBanner from '../CtaBanner';
import MobileFeatureText from '../MobileFeatureText';
import mobile1 from '../../assets/images/mobile-1.png';
import mobile2 from '../../assets/images/mobile-2.png';
import mobile3 from '../../assets/images/mobile-3.png';
import n7Image from '../../assets/icons/N7.png';
import n7BgImage from '../../assets/icons/N7_bg.png';
import bladesImage from '../../assets/icons/blades.png';
import './MobileShowcaseSection.css';

const ROWS = [
  {
    image: mobile1,
    imageAlt: 'Banking app home screen',
    imagePosition: 'left',
    bgImage: n7BgImage,
    heading: 'Fully compliant with regulatory requirement',
    description:
      "The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.",
    points: [
      'Pre-Integrated Security System',
      'Fully Compliant With Regulatory Requirement',
      'Digitally Connected Core',
    ],
  },
  {
    image: mobile2,
    imageAlt: 'Banking app transactions',
    imagePosition: 'right',
    heading: 'No legacy IT systems',
    description:
      'Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.',
    points: [
      'Adaptive & Intelligent API monetization',
      'Ambient User Experience',
      'Cloud-native With lower TCO',
    ],
  },
  {
    image: mobile3,
    imageAlt: 'Banking app profile',
    imagePosition: 'left',
    heading: 'No traditional branches',
    description:
      'Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.',
    points: [
      'Branchless & Paperless Banking',
      'Digital Transformation Capability',
      'Optimized, Adoptable and Scalable',
    ],
  },
];

const MobileShowcaseSection = ({
  heading = 'Digital banking out-of-the-box',
  subtitle = 'N7 helps your financial institution improve the client experience, automate and optimize procedures',
  ctaLabel = 'Request Demo',
  onCtaClick,
  rows = ROWS,
}) => (
  <section className="mobile-showcase">
<Ticker />
    <div className="mobile-showcase__content">
      <div className="mobile-showcase__left">
        <h2 className="mobile-showcase__heading">{heading}</h2>
        <p className="mobile-showcase__subtitle">{subtitle}</p>
        <Button variant="primary" label={ctaLabel} onClick={onCtaClick} />
        <img src={bladesImage} alt="" className="mobile-showcase__blades" aria-hidden="true" />
      </div>
      <div className="mobile-showcase__rows">
        {rows.map((row) => (
          <div
            key={row.heading}
            className={`mobile-showcase__row${row.imagePosition === 'right' ? ' mobile-showcase__row--reverse' : ''}`}
          >
            <div className="mobile-showcase__image-wrapper">
              {row.bgImage && <img src={row.bgImage} alt="" className="mobile-showcase__image-bg" aria-hidden="true" />}
              <img src={row.image} alt={row.imageAlt} className="mobile-showcase__image" />
            </div>
            <MobileFeatureText
              heading={row.heading}
              description={row.description}
              points={row.points}
            />
          </div>
        ))}
      </div>
    </div>
    <div className="mobile-showcase__cta">
      <CtaBanner
        subtitle="N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations"
        watermarkSrc={n7Image}
      />
    </div>
  </section>
);

export default MobileShowcaseSection;
