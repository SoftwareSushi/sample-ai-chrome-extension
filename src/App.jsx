import "./App.css";
import { useState } from "react";
import { summarizeText } from "./api";

const sampleText =
  "And now, I said, let me show in a figure how far our nature is enlightened or unenlightened. Behold, human beings living in an underground den, which has a mouth open towards the light and reaching all along the den; here they have been from their childhood, and have their legs and necks chained so that they cannot move, and can only see before them, being prevented by the chains from turning round their heads. Above and behind them a fire is blazing at a distance, and between the fire and the prisoners there is a raised way; and you will see, if you look, a low wall built along the way, like the screen which marionette players have in front of them, over which they show the puppets. I see, he said. And do you see, I said, men passing along the wall carrying all sorts of vessels, and statues and figures of animals made of wood and stone and various materials, which appear over the wall? Some of them are talking, others silent. You have shown me a strange image, and they are strange prisoners. Like ourselves, I replied; and they see only their own shadows, or the shadows of one another, which the fire throws on the opposite wall of the cave? True, he said; how could they see anything but the shadows if they were never allowed to move their heads?";

function App() {
  const [summary, setSummary] = useState("");

  return (
    <>
      <div className="app">
        <header className="app__content">AI Summary Extension</header>
        <button
          className="app__button"
          onClick={() => {
            summarizeText(sampleText).then((summary) => {
              setSummary(summary);
            });
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
