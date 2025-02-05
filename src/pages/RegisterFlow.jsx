import { useState } from "react";
import PropTypes from "prop-types";

import Feedback from "../views/Feedback";
import Register from "../views/Register";

function RegisterFlow({changeStep}) {
  const [step, setStep] = useState(1);

  const handleSubmit = (person) => {
    console.log(person);
    setStep(step + 1);
  };

  return (
    <>
      {step === 1 ? <Register onSubmit={handleSubmit} /> : <Feedback buttonText="Back" title="Sent!" description="Thanks for submitting, in a few minutes you will receive your new token" onButtonClick={() => changeStep('start')} />}
    </>
  );
}

RegisterFlow.propTypes = {
  changeStep: PropTypes.func.isRequired,
};

export default RegisterFlow;
