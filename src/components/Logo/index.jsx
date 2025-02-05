import "./logo.css";
import logo from "../../assets/extensionLogo.png";

const Logo = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <p>Sumarize</p>
    </div>
  );
};

export default Logo;
