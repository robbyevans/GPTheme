import { useState } from "react";

function Theme() {
  const [bgColor, setBgColor] = useState<string>("");
  const [textColor, setTextColor] = useState<string>("");

  const onclick = async () => {
    const [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript<string[], void>({
      target: { tabId: tab.id! },
      args: [bgColor, textColor],
      func: (bgColor, textColor) => {
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = textColor;
        // alert("Hello from my extension!");
      },
    });
  };

  return (
    <>
      <div className="theme-container">
        <div className="theme-header">
          <h1>GPTheme</h1>
          <img src="./icon32.png" alt="theme-icon" />
        </div>

        <div className="color-picker">
          <label>
            Background Color:
            <input
              type="color"
              onChange={(e) => setBgColor(e.currentTarget.value)}
            ></input>
          </label>
          <label>
            Text Color:
            <input
              type="color"
              onChange={(e) => setTextColor(e.currentTarget.value)}
            ></input>
          </label>
        </div>
        <button className="color-selector-btn" onClick={onclick}>
          Apply Changes
        </button>
      </div>
    </>
  );
}

export default Theme;
