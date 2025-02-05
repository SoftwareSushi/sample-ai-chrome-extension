import { useState } from "react";

import Home from "./views/Home";
import RegisterFlow from "./pages/RegisterFlow";
import ResultFlow from "./pages/ResultFlow";

import "./App.css";

function App() {
  const [step, setStep] = useState('start');

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  return (
    <div className="app">
      {step === 'start' && <Home changeStep={handleStepChange} />}
      {step === 'register' && <RegisterFlow changeStep={handleStepChange} />}
      {step === 'result' && <ResultFlow changeStep={handleStepChange} />}
    </div>
  );
}

export default App;
