import "./App.css";
import { useEffect } from "react";
import { useTelegram } from "./components/hooks/useTelegram";
import Header from "./components/Header/Header";
const tg = window.Telegram.WebApp;

function App() {
  const { onClose, onToggleButton } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
