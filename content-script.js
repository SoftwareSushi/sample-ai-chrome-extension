import { Readability } from "@mozilla/readability";

console.log("Content Script loaded");

const workingDocument = document.cloneNode(true);
const pageText = new Readability(workingDocument)
  .parse()
  .textContent.substring(0, 2500);

chrome.runtime.sendMessage(
  { type: "PAGE_TEXT", payload: pageText },
  (response) => {
    console.log(
      "Content script received response from Service worker",
      response
    );
  }
);
