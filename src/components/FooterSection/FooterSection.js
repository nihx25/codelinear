import maskGroup from '../../assets/icons/Mask group.png';
import rightArrow from '../../assets/icons/rightArrow.svg';
import './FooterSection.css';

const addresses = [
  {
    id: 'london',
    country: 'London',
    address: 'Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.',
  },
  {
    id: 'dubai',
    country: 'Dubai',
    address: 'Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates',
  },
  {
    id: 'india',
    country: 'India',
    address: 'Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India',
  },
];

const navColumns = [
  {
    heading: 'Solutions',
    links: [
      'Core Banking CB7',
      'Digital Banking N7',
      'Open Banking',
      'Loan Origination System',
      'Loan Management System',
      'Digital Transformation',
    ],
  },
  {
    heading: 'N7 Banking',
    links: [
      'About Us',
      'Solutions',
      'Contact',
      'Company',
      'Careers',
      'Insights',
      'Core Team',
      'Brand Center',
    ],
  },
  {
    heading: 'Our Socials',
    links: ['LinkedIn', 'X'],
  },
];

const AddressCard = ({ country, address }) => (
  <div className="footer__address-card">
    <p className="footer__country">{country}</p>
    <p className="footer__address">{address}</p>
  </div>
);

const NavColumn = ({ heading, links }) => (
  <div className="footer__nav-column">
    <p className="footer__nav-heading">{heading}</p>
    <ul className="footer__nav-list">
      {links.map((link) => (
        <li key={link} className="footer__nav-item">
          <span>{link}</span>
          <img src={rightArrow} alt="" className="footer__nav-arrow" />
        </li>
      ))}
    </ul>
  </div>
);

const FooterSection = () => (
  <footer className="footer">
    <div className="footer__main">
      <div className="footer__logo-wrap">
        <img src={maskGroup} alt="N7" className="footer__logo" />
      </div>
      <div className="footer__right">
        <div className="footer__addresses">
          {addresses.map((a) => (
            <AddressCard key={a.id} country={a.country} address={a.address} />
          ))}
        </div>
        <div className="footer__nav">
          {navColumns.map((col) => (
            <NavColumn key={col.heading} heading={col.heading} links={col.links} />
          ))}
        </div>
        <p className="footer__copyright">
          Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
