import { useOrderContext } from "@/contexts/OrderContext";
import Items from "@/pages/Order/Items";
import Options from "@/pages/Order/Options";
import { useEffect } from "react";

const OrderPage = () => {
  const { reset } = useOrderContext();

  useEffect(() => {
    reset();
  }, []);

  return (
    <main>
      <h1>Travel Product</h1>
      <Items />
      <Options />
    </main>
  );
};

export default OrderPage;
