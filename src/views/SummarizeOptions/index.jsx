import PropTypes from "prop-types";
import { useState } from "react";

import { summarizeText } from "../../api";

import Layout from "../Layout";
import Button from "../../components/Button";

import Feedback from "../Feedback";

import "./summarize-options.css";

function SummarizeOptions({ onSummarize }) {
  const [loading, setLoading] = useState(false);

  const handleSelectText = () => {
    setLoading(true);
    chrome.runtime.sendMessage({ type: "GET_SELECTED_TEXT" }, (response) => {
      summarizeText(response.content).then((summary) => {
        onSummarize(summary);
        setLoading(false);
      });
    });
  };

  return (
    <>
      {loading ? (
        <Feedback
          type="loading"
          buttonText="Cancel"
          title="Loading..."
          description="Please take a cup of tea your summarize is in progress..."
          onButtonClick={() => {}}
        />
      ) : (
        <Layout
          buttonContainer={
            <>
              <Button onClick={handleSelectText}>
                Select text to summarize
              </Button>
            </>
          }
        >
          <div className="options-container">
            <h3>
              First select your text, and then click the button below to
              summarize it!
            </h3>
          </div>
        </Layout>
      )}
    </>
  );
}

SummarizeOptions.propTypes = {
  onSummarize: PropTypes.func.isRequired,
};

export default SummarizeOptions;
