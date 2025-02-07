import "./logo.css";
import logo from "../../assets/extensionLogo.png";

const Logo = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <p>Summarize</p>
    </div>
  );
};

export default Logo;
