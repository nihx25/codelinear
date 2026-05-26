import './FeatureCard.css';

const FeatureCard = ({
  icon,
  title,
  description,
  badge,
  learnMoreHref = '#',
}) => (
  <div className="feature-card">
    <div className="feature-card__header">
      <img src={icon} alt="" className="feature-card__icon" />
      {badge && <span className="feature-card__badge">{badge}</span>}
    </div>
    <h3 className="feature-card__title">{title}</h3>
    <p className="feature-card__description">{description}</p>
    <a href={learnMoreHref} className="feature-card__link">
      Learn More <span className="feature-card__arrow">→</span>
    </a>
  </div>
);

export default FeatureCard;
