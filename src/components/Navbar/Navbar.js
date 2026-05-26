import Button from '../Button/Button';
import chevronDown from '../../assets/icons/chevronDown.svg';
import './Navbar.css';

const DEFAULT_NAV_LINKS = [
  { label: 'Solutions', href: '#', hasDropdown: true },
  { label: 'Resources', href: '#', hasDropdown: true },
  { label: 'About Us', href: '#', hasDropdown: false },
];

const Navbar = ({
  logo = 'N7',
  navLinks = DEFAULT_NAV_LINKS,
  ctaLabel = 'Request Demo',
  onCtaClick,
}) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">{logo}</div>
      <ul className="navbar__links">
        {navLinks.map(({ label, href, hasDropdown }) => (
          <li key={label} className="navbar__link-item">
            <a href={href} className="navbar__link">
              {label}
              {hasDropdown && <img src={chevronDown} alt="" className="navbar__dropdown-icon" />}
            </a>
          </li>
        ))}
      </ul>
      <Button label={ctaLabel} variant="secondary" onClick={onCtaClick} />
    </nav>
  );
};

export default Navbar;
