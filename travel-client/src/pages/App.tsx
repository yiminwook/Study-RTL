import OrderPage from "@/pages/Order";
import "@/pages/global.scss";
import { OrderContextProvider } from "@/contexts/OrderContext";

const App = () => {
  return (
    <div id="app">
      <OrderContextProvider>
        <OrderPage />
      </OrderContextProvider>
    </div>
  );
};

export default App;
