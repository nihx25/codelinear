import './Button.css';

const Button = ({ label='hello', variant = 'primary', onClick }) => {
  return (
    <button className={`btn btn--${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
