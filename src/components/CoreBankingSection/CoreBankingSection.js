import device1 from '../../assets/images/device1.png';
import tickIcon from '../../assets/icons/tick.svg';
import './CoreBankingSection.css';

const DEFAULT_POINTS = [
  'Customer-On Boarding',
  'Managing deposits and withdrawals',
  'Transaction management',
  'Interest Calculation',
  'Payments processing (cash, cheques, mandates, NEFT, RTGS etc)',
  'CRM Activities',
  'Configuring New Banking Products',
  'Loan disbursal and Loan management',
  'Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.',
];

const CoreBankingSection = ({
  heading = 'Run a more efficient, flexible, and digitally connected corebanking system',
  subheading = 'What you will get:',
  points = DEFAULT_POINTS,
  image = device1,
  imageAlt = 'Core Banking Dashboard',
}) => (
  <section className="cb-section">
    <div className="cb-section__left">
      <img src={image} alt={imageAlt} className="cb-section__image" />
    </div>
    <div className="cb-section__right">
      <h2 className="cb-section__heading">{heading}</h2>
      <p className="cb-section__subheading">{subheading}</p>
      <div className="cb-section__points">
        {points.map((point) => (
          <div key={point} className="cb-section__point">
            <img src={tickIcon} alt="" className="cb-section__tick" />
            <span className="cb-section__point-text">{point}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreBankingSection;
