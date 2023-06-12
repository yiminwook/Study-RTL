import "@/App/App.scss";
import { useState } from "react";

const App = () => {
  const [conuter, setCounter] = useState(0);
  const handleMinus = () => {
    setCounter((pre) => pre - 1);
  };

  const handlePlus = () => {
    setCounter((pre) => pre + 1);
  };

  return (
    <div className="App">
      <main>
        <h3 data-testid="counter">{conuter}</h3>
        <button data-testid="minus-button" onClick={handleMinus}>
          -
        </button>
        <button data-testid="plus-button" onClick={handlePlus}>
          +
        </button>
      </main>
    </div>
  );
};

export default App;
