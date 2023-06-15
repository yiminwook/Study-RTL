import {
  OrderType,
  PRICE_PER_ITEM,
  useOrderContext,
} from "@/contexts/OrderContext";

interface DescProps {
  type: OrderType;
}

const Desc = ({ type }: DescProps) => {
  const { totals } = useOrderContext();
  return (
    <div>
      <h2>주문 종류 {type}</h2>
      <p>하나의 가격: {PRICE_PER_ITEM[type]}</p>
      <p>총 가격: {totals.total}</p>
    </div>
  );
};

export default Desc;
