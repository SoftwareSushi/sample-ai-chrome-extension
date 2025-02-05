import PropTypes from "prop-types";
import { useState } from "react";

import { summarizeText } from "../../api";

import Layout from "../Layout";
import Button from "../../components/Button";

import Feedback from "../Feedback";

import "./summarize-options.css";

function SummarizeOptions({onSummarize}) {
  const [loading, setLoading] = useState(false);

  const handleSummarizeWholePage = () => {
    setLoading(true);
                chrome.runtime.sendMessage(
              { type: "GET_PAGE_TEXT" },
              (response) => {
                summarizeText(response.content).then((summary) => {
                  onSummarize(summary);
                  setLoading(false);
                });
              }
            );
  };

  const handleSelectText = () => {
    alert("Select text button clicked");
  };
  return (
    <>
      {loading ? 
      <Feedback type="loading" buttonText="Cancel" title="Loading..." description="Please take a cup of tea your summarize is in progress..." onButtonClick={() => {}} /> : 
        <Layout buttonContainer={
          <>
            <Button onClick={handleSummarizeWholePage} type="accent">Summarize whole page</Button>
            <Button onClick={handleSelectText}>
              Select text to summarize
            </Button>
          </>
        }>
        <div className="options-container">
          <h3>
            Do you want to summarize the full page or just want to summarize a specific section?
          </h3>
          <p>
            Please select your preffered option below
          </p>
        </div>
      </Layout>
      }
      </>
  );
}

SummarizeOptions.propTypes = {
  onSummarize: PropTypes.func.isRequired,
};

export default SummarizeOptions;
