console.log("Service worker working");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "PAGE_TEXT") {
    chrome.storage.local.set({ pageText: message.payload }, () => {
      sendResponse({
        status: "Service worker received page text",
        length: message.payload.length,
      });
    });

    return true;
  } else if (message.type === "GET_PAGE_TEXT") {
    chrome.storage.local.get("pageText", (result) => {
      sendResponse({
        status: "Service worker sent page text",
        content: result.pageText,
      });
    });

    return true;
  }
});
