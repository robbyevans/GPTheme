import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const onclick = async () => {
    const [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => {
        alert("Hello from my extension!");
      },
    });
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Donut GPT</h1>
      <div className="card">
        <button onClick={onclick}>Click</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
