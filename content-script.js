document.addEventListener("mouseup", () => {
  const selectedText = window.getSelection().toString().trim();

  if (selectedText.length > 0) {
    chrome.runtime.sendMessage(
      {
        type: "SELECTED_TEXT",
        payload: selectedText,
      },
      (response) => {
        console.log(
          "Content Script received response from service worker",
          response
        );
      }
    );
  }
});
