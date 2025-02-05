// Create a simple button component that can be passed the text, click handler, and type

import PropTypes from 'prop-types';

import "./button.css";

const Button = ({ children, onClick, type = "secondary" }) => {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string, /* primary, secondary, accent */
};

export default Button;