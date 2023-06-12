import "@/App/App.scss";
import { useState } from "react";

const App = () => {
  const [conuter, setCounter] = useState(0);
  const [isOff, setIsOff] = useState(false);

  const handleMinus = () => {
    setCounter((pre) => pre - 1);
  };

  const handlePlus = () => {
    setCounter((pre) => pre + 1);
  };

  const toggleIsOff = () => {
    setIsOff((pre) => !pre);
  };

  return (
    <div className="App">
      <main>
        <h3 data-testid="counter">{conuter}</h3>
        <div>
          <button
            data-testid="minus-button"
            onClick={handleMinus}
            disabled={isOff}
          >
            -
          </button>
          <button
            data-testid="plus-button"
            onClick={handlePlus}
            disabled={isOff}
          >
            +
          </button>
        </div>
        <div></div>
        <button
          data-testid="on/off-button"
          className="on-and-off-button"
          style={{ backgroundColor: "blue" }}
          onClick={toggleIsOff}
        >
          on/off
        </button>
      </main>
    </div>
  );
};

export default App;
