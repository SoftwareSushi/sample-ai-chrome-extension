import PropTypes from "prop-types";

import Layout from "../Layout";
import Button from "../../components/Button";

import "./result.css";

function Result({summary, handleReset}) {
  return (
    <Layout buttonContainer={
          <>
              <Button onClick={handleReset}>
                Reset
              </Button>
          </>
        }>
        <div className="result-container">
            <p>
                {summary}
            </p>
          </div>
        </Layout>
  );
}

Result.propTypes = {
  summary: PropTypes.string.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default Result;
