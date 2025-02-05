import { useState } from "react";

import SummarizeOptions from "../views/SummarizeOptions";
import Result from "../views/Result";

function ResultFlow() {
  const [summary, setSummary] = useState("");

  const handleSummarize = (summary) => {
    setSummary(summary);
  };

  const handleReset = () => {
  setSummary("");
  };

  return (
    <>
      {summary === "" ? <SummarizeOptions onSummarize={handleSummarize}/> : <Result summary={summary} handleReset={handleReset}/>}
    </>
  );
}

export default ResultFlow;
