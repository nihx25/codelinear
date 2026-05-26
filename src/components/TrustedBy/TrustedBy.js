import shellLogo from '../../assets/icons/companyNames/shell.svg';
import smartFinderLogo from '../../assets/icons/companyNames/smartFinder.svg';
import zoomerLogo from '../../assets/icons/companyNames/zoomer.svg';
import artVenueLogo from '../../assets/icons/companyNames/artVenue.svg';
import kontrastrLogo from '../../assets/icons/companyNames/kontrastr.svg';
import wavesMarathonLogo from '../../assets/icons/companyNames/wavesMarathon.svg';
import './TrustedBy.css';

const DEFAULT_COMPANIES = [
  { name: 'Shells', logo: shellLogo },
  { name: 'SmartFinder', logo: smartFinderLogo },
  { name: 'Zoomerr', logo: zoomerLogo },
  { name: 'ArtVenue', logo: artVenueLogo },
  { name: 'Kontrastr', logo: kontrastrLogo },
  { name: 'WavesMarathon', logo: wavesMarathonLogo },
];

const TrustedBy = ({ label = 'Trusted By:', companies = DEFAULT_COMPANIES }) => {
  return (
    <div className="trusted-by">
      <span className="trusted-by__label">{label}</span>
      <div className="trusted-by__logos">
        {companies.map(({ name, logo }) => (
          <img key={name} src={logo} alt={name} className="trusted-by__logo" />
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
