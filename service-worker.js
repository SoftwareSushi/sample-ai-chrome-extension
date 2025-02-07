chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "SELECTED_TEXT") {
    console.log("Received selected text from content script");
    chrome.storage.local.set({ selectedText: message.payload }, () => {
      sendResponse({
        status: "Service worker received selected text",
        length: message.payload.length,
      });
    });

    return true;
  } else if (message.type === "GET_SELECTED_TEXT") {
    console.log("Received get selected text request from SummarizeOptions");
    chrome.storage.local.get("selectedText", (result) => {
      sendResponse({
        status: "Service worker sent selected text to button on extension",
        content: result.selectedText,
      });
    });

    return true;
  }
});
