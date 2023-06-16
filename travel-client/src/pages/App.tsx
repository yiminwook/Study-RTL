import "@/pages/global.scss";
import OrderPage from "@/pages/Order";
import { OrderContextProvider } from "@/contexts/OrderContext";
import { Route, Routes } from "react-router-dom";
import Complete from "@/pages/Complete";
import Summary from "@/pages/Summary";

const App = () => {
  return (
    <div id="app">
      <OrderContextProvider>
        <Routes>
          <Route path="/" element={<OrderPage />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/complete" element={<Complete />} />
        </Routes>
      </OrderContextProvider>
    </div>
  );
};

export default App;
