import Button from '../Button';
import FeatureCard from '../FeatureCard';
import coreBankingIcon from '../../assets/icons/features/coreBanking.svg';
import digitalBankingIcon from '../../assets/icons/features/digitalBanking.svg';
import openBankingIcon from '../../assets/icons/features/openBanking.svg';
import loanOriginationIcon from '../../assets/icons/features/loanOrigination.svg';
import loanManagementIcon from '../../assets/icons/features/loanManagement.svg';
import './FeaturesSection.css';

const DEFAULT_CARDS = [
  {
    icon: coreBankingIcon,
    title: 'Core Banking CB7',
    description:
      'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
  },
  {
    icon: digitalBankingIcon,
    title: 'Digital Banking N7',
    description:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.',
  },
  {
    icon: openBankingIcon,
    title: 'Open Banking',
    description:
      'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
  },
  {
    icon: loanOriginationIcon,
    title: 'Loan Origination System',
    description:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.',
  },
  {
    icon: loanManagementIcon,
    title: 'Loan Management System',
    description:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.',
  },
];

const FeaturesSection = ({
  heading = 'All of our solutions are tailor-made to your needs',
  ctaLabel = 'Request Demo',
  onCtaClick,
  cards = DEFAULT_CARDS,
}) => (
  <section className="features">
    <div className="features__gradient-bg" />
    <div className="features__left">
      <h2 className="features__heading">{heading}</h2>
      <Button variant="secondary" label={ctaLabel} onClick={onCtaClick} />
    </div>
    <div className="features__grid">
      {cards.map((card) => (
        <FeatureCard key={card.title} {...card} />
      ))}
    </div>
  </section>
);

export default FeaturesSection;
