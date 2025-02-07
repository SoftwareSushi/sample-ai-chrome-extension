import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Feedback from "../Feedback";

import Layout from "../Layout";
import Button from "../../components/Button";
import Input from "../../components/Input";

function Home({ changeStep }) {
  const [apiKey, setApiKey] = useState("");
  const [step, setStep] = useState(1);

  const handleApiKeyChange = (e) => {
    setApiKey(e.target.value);
    chrome.storage.local.set({ apiKey: e.target.value });
  };

  const handleConnect = () => {
    if (apiKey === "") {
      alert("Please enter your API key");
    } else {
      setStep(step + 1);
    }
  };

  useEffect(() => {
    chrome.storage.local.get("apiKey", (result) => {
      if (result.apiKey !== "") {
        setApiKey(result.apiKey);
        setStep(step + 1);
      } else {
        return;
      }
    });
  }, []);

  return (
    <>
      {step === 1 ? (
        <Layout
          buttonContainer={
            <>
              <Button onClick={handleConnect} type="primary">
                Connect
              </Button>
              <Button onClick={() => changeStep("register")}>
                I want to get one
              </Button>
            </>
          }
        >
          <div className="content">
            <p>
              Welcome to “Summarize” extension, here you can summarize your text
              with only few steps!
            </p>
            <Input
              type="text"
              value={apiKey}
              onChange={handleApiKeyChange}
              placeholder="API Token"
              name="apiKey"
              warning="Please Enter your Token API"
            />
          </div>
        </Layout>
      ) : (
        <Feedback
          buttonText="Back"
          title="Welcome User 1!"
          description="You are logged in now!"
          onButtonClick={() => changeStep("result")}
        />
      )}
    </>
  );
}

Home.propTypes = {
  changeStep: PropTypes.func.isRequired,
};

export default Home;
