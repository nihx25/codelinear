import Button from '../Button';
import './PaperlessSection.css';

const PaperlessSection = () => (
  <section className="paperless">
    <div className="paperless__left">
      <h2 className="paperless__heading">
        Take the full advantage of going paper-less now.
      </h2>
      <p className="paperless__subtitle">
        CB7 helps your financial institution improve the client experience,
        automate and optimize procedures, simplify banking operations
      </p>
    </div>
    <div className="paperless__right">
      <Button variant="secondary" label="CONTACT US" />
      <Button variant="primary" label="REQUEST DEMO" />
    </div>
  </section>
);

export default PaperlessSection;
