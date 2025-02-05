import PropTypes from 'prop-types';

import "./input.css";

const Input = ({ type = 'text', placeholder, value, onChange, error }) => {
  return (
    <div className="input-container">
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};


export default Input;

