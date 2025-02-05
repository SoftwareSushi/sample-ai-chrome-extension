import PropTypes from "prop-types";

import Layout from "../Layout";
import Button from "../../components/Button";

import ConfirmationIcon from "../../assets/confirmationIcon.png";

import "./feedback.css";

function Feedback({type = "success", buttonText, title, description, onButtonClick}) {

  return (
    <Layout buttonContainer={
          <>
            <Button onClick={onButtonClick} type="secondary">{buttonText}</Button>
          </>
        }>
        <div className="feedback-container">
          {type === "success" ? <img src={ConfirmationIcon} alt="Confirmation" /> : <div className="spinner"/>}
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
    </Layout>
  );
}

Feedback.propTypes = {
  type: PropTypes.string,
  buttonText: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default Feedback;
