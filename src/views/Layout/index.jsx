import PropTypes from "prop-types";

import Logo from "../../components/Logo";

function Layout({children, buttonContainer}) {
  return (
    <div className="container">
      <Logo />
      {children}
      <div className="button-container">
        {buttonContainer}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  buttonContainer: PropTypes,
};

export default Layout;
