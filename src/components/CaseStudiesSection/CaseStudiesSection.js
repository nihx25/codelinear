import { useState, useRef, useEffect } from 'react';
import caseStudyImg from '../../assets/images/caseStudy.png';
import zoomerIcon from '../../assets/icons/companyNames/zoomer.svg';
import leftIcon from '../../assets/icons/leftIcon.svg';
import rightIcon from '../../assets/icons/right.svg';
import './CaseStudiesSection.css';

const SIDE = 160;
const GAP = 20;

const caseStudies = [
  {
    id: 1,
    category: 'GETTING STARTED',
    title: 'How we help brand reach out to more people',
    company: 'Zoomerr',
    companyIcon: zoomerIcon,
    image: caseStudyImg,
  },
  {
    id: 2,
    category: 'GETTING STARTED',
    title: 'How we help brand reach out to more people',
    company: 'Zoomerr',
    companyIcon: zoomerIcon,
    image: caseStudyImg,
  },
  {
    id: 3,
    category: 'GETTING STARTED',
    title: 'How we help brand reach out to more people',
    company: 'Zoomerr',
    companyIcon: zoomerIcon,
    image: caseStudyImg,
  },
  {
    id: 4,
    category: 'GETTING STARTED',
    title: 'How we help brand reach out to more people',
    company: 'Zoomerr',
    companyIcon: zoomerIcon,
    image: caseStudyImg,
  },
];

const CaseStudiesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(
    () => Math.max(600, window.innerWidth - 100)
  );
  const containerRef = useRef(null);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const cardWidth = Math.max(400, containerWidth - 2 * SIDE - GAP);
  // leading spacer puts card 0 at x=SIDE, so translate is unchanged
  const translate = activeIndex * (cardWidth + GAP);

  const prev = () => setActiveIndex(i => Math.max(0, i - 1));
  const next = () => setActiveIndex(i => Math.min(caseStudies.length - 1, i + 1));

  return (
    <section className="case-studies">
      <h2 className="case-studies__heading">Our Case Studies</h2>

      <div className="case-studies__carousel" ref={containerRef}>
        <div
          className="case-studies__track"
          style={{ transform: `translateX(-${translate}px)` }}
        >
          {/* leading spacer so card 0 starts at SIDE and prev card peeks left */}
          <div style={{ width: SIDE, flexShrink: 0 }} />

          {caseStudies.map((cs, i) => (
            <div
              key={cs.id}
              className={`case-studies__card${i !== activeIndex ? ' case-studies__card--behind' : ''}`}
              style={{ width: cardWidth, minWidth: cardWidth }}
            >
              <div className="case-studies__card-image">
                <img src={cs.image} alt={cs.title} />
              </div>
              <div className="case-studies__card-content">
                <span className="case-studies__category">{cs.category}</span>
                <h3 className="case-studies__title">{cs.title}</h3>
                <div className="case-studies__company">
                  <img
                    src={cs.companyIcon}
                    alt={cs.company}
                    className="case-studies__company-icon"
                  />
                </div>
                <button className="case-studies__read-more">READ MORE</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="case-studies__footer">
        <div className="case-studies__nav">
          <button className="case-studies__nav-btn" onClick={prev} aria-label="Previous">
            <img src={leftIcon} alt="" />
          </button>
          <div className="case-studies__dots">
            {caseStudies.map((_, i) => (
              <button
                key={i}
                className={`case-studies__dot${i === activeIndex ? ' case-studies__dot--active' : ''}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button className="case-studies__nav-btn" onClick={next} aria-label="Next">
            <img src={rightIcon} alt="" />
          </button>
        </div>
        <a href="#case-studies" className="case-studies__view-all">
          <span className="case-studies__view-all-underline">VIEW</span>
          {' '}ALL  →
        </a>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
