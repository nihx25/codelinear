import starIcon from '../../assets/icons/star.svg';
import './Ticker.css';

const ITEMS = [
  { text: 'N7', isLabel: true },
  { text: 'Say 👋 to the new way of banking', isLabel: false },
  { text: 'CB7', isLabel: true },
  { text: 'Say 👋 to the new way of banking', isLabel: false },
];

const Blade = () => (
  <img src={starIcon} alt="" className="ticker__blade" />
);

const TickerTrack = ({ hidden }) => (
  <div className="ticker__track" aria-hidden={hidden}>
    {ITEMS.map((item, i) =>
      item.isLabel ? (
        <span key={i} className="ticker__item ticker__item--label">
          <Blade />
          {item.text}
          <Blade />
        </span>
      ) : (
        <span key={i} className="ticker__item">
          {item.text}
        </span>
      )
    )}
  </div>
);

const Ticker = () => (
  <div className="ticker" role="marquee" aria-label="N7 Digital Banking">
    <div className="ticker__inner">
      <TickerTrack hidden={false} />
      <TickerTrack hidden={true} />
    </div>
  </div>
);

export default Ticker;
