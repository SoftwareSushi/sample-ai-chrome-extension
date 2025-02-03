import "./App.css";
import { useState } from "react";
import { summarizeText } from "./api";

function App() {
  const [summary, setSummary] = useState("");

  return (
    <>
      <div className="app">
        <header className="app__content">AI Summary Extension</header>
        <button
          className="app__button"
          onClick={() => {
            chrome.runtime.sendMessage(
              { type: "GET_PAGE_TEXT" },
              (response) => {
                summarizeText(response.content).then((summary) => {
                  setSummary(summary);
                });
              }
            );
          }}
        >
          Summarize Text!
        </button>
        <p className="app__summary">{summary === "" ? <></> : summary}</p>
      </div>
    </>
  );
}

export default App;
