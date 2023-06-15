import { useOrderContext } from "@/contexts/OrderContext";
import Items from "@/pages/Order/Items";
import Options from "@/pages/Order/Options";

const OrderPage = () => {
  const { products, totals } = useOrderContext();

  return (
    <main>
      <div>
        <h1>Travel Product</h1>
        <h2>주문 종류</h2>
        <p>하나의 가격:</p>
        <p>상품 총 가격: {totals.total} </p>
      </div>
      <Items />
      <Options />
    </main>
  );
};

export default OrderPage;
