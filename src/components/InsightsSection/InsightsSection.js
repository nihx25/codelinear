import caseStudyImg from '../../assets/images/caseStudy.png';
import Button from '../Button';
import './InsightsSection.css';

const insightData = {
  category: 'GETTING STARTED',
  title: 'How to transition from a traditional to a digital bank',
  author: 'David Grohl',
  date: '17/08/24',
};

const InsightsSection = () => {
  return (
    <section className="insights-section">
      <div className="insights-section__inner">
        <div className="insights-section__left">
          <h2 className="insights-section__heading">
            Get yourself up-to-speed on all the things happening in fintech
          </h2>
          <div className="insights-section__btn-wrapper">
            <div className="insights-section__glow" />
            <Button label="INSIGHTS" variant="secondary" />
          </div>
        </div>

        <div className="insights-section__right">
          <div className="insights-card insights-card--featured">
            <div className="insights-card__image-wrapper">
              <img src={caseStudyImg} alt="Featured insight" className="insights-card__image" />
            </div>
            <div className="insights-card__content">
              <span className="insights-card__category">{insightData.category}</span>
              <h3 className="insights-card__title">{insightData.title}</h3>
              <div className="insights-card__meta">
                <span>{insightData.author}</span>
                <span>{insightData.date}</span>
              </div>
              <button className="insights-card__read-more">READ MORE</button>
            </div>
          </div>

          <div className="insights-cards-row">
            {[0, 1].map(i => (
              <div key={i} className="insights-card insights-card--small">
                <span className="insights-card__category">{insightData.category}</span>
                <h3 className="insights-card__title">{insightData.title}</h3>
                <div className="insights-card__meta">
                  <span>{insightData.author}</span>
                  <span>{insightData.date}</span>
                </div>
                <button className="insights-card__read-more">READ MORE</button>
              </div>
            ))}
          </div>

          <div className="insights-section__footer">
            <a href="#insights" className="insights-section__read-all">
              <span className="insights-section__read-all-underline">READ</span>
              {' '}ALL INSIGHTS  →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
