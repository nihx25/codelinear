import Button from '../Button';
import cb7Image from '../../assets/icons/CB7.png';
import './CtaBanner.css';

const CtaBanner = ({
  heading = 'Take the full advantage of going paper-less now.',
  subtitle = 'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations',
  primaryLabel = 'Request Demo',
  secondaryLabel = 'Contact Us',
  onPrimaryClick,
  onSecondaryClick,
}) => (
  <div className="cta-banner">
    <img src={cb7Image} alt="" className="cta-banner__watermark" aria-hidden="true" />
    <div className="cta-banner__left">
      <h2 className="cta-banner__heading">{heading}</h2>
      <p className="cta-banner__subtitle">{subtitle}</p>
    </div>
    <div className="cta-banner__right">
      <div className="cta-banner__actions">
        <Button variant="secondary" label={secondaryLabel} onClick={onSecondaryClick} />
        <Button variant="primary" label={primaryLabel} onClick={onPrimaryClick} />
      </div>
    </div>
  </div>
);

export default CtaBanner;
