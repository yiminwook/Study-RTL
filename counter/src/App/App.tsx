import "@/App/App.scss";
import { useState } from "react";

const App = () => {
  const [conuter, setCounter] = useState(0);

  return (
    <div className="App">
      <main>
        <h3 data-testid="counter">{conuter}</h3>
      </main>
    </div>
  );
};

export default App;
