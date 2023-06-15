import { useOrderContext } from "@/contexts/OrderContext";
import Items from "@/pages/Order/Items";
import Options from "@/pages/Order/Options";
import { useEffect } from "react";

const OrderPage = () => {
  const { products, updateItemCount, totals } = useOrderContext();

  useEffect(() => {
    updateItemCount({
      itemName: "test",
      newItemCount: "3",
      orderType: "products",
    });

    updateItemCount({
      itemName: "test12",
      newItemCount: "5",
      orderType: "options",
    });
  }, []);
  console.log("test", products);
  console.log("total", totals);
  return (
    <main>
      <h1>Travel Product</h1>
      <Items />
      <Options />
    </main>
  );
};

export default OrderPage;
