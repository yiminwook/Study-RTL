import { OrderType, PRICE_PER_ITEM } from "@/contexts/OrderContext";

export const calculateSubtotal = ({
  orderType,
  orderCounts,
}: {
  orderType: OrderType;
  orderCounts: Record<OrderType, Map<string, number>>;
}) => {
  let optionCount = 0;
  for (const count of orderCounts[orderType].values()) {
    optionCount += count;
  }
  return optionCount * PRICE_PER_ITEM[orderType];
};
