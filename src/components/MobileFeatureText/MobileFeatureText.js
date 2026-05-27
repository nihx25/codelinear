import tickIcon from '../../assets/icons/tick.svg';
import './MobileFeatureText.css';

const MobileFeatureText = ({ heading, description, points = [] }) => (
  <div className="mobile-feature-text">
    <h3 className="mobile-feature-text__heading">{heading}</h3>
    <p className="mobile-feature-text__desc">{description}</p>
    <ul className="mobile-feature-text__points">
      {points.map((point) => (
        <li key={point} className="mobile-feature-text__point">
          <img src={tickIcon} alt="" className="mobile-feature-text__tick" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default MobileFeatureText;
