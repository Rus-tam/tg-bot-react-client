import "./App.css";
import { useEffect } from "react";
import { useTelegram } from "./components/hooks/useTelegram";
const tg = window.Telegram.WebApp;

function App() {
  const { onClose, onToggleButton } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
