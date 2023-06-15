/* eslint-disable react-hooks/exhaustive-deps */
import { calculateSubtotal } from "@/utils/calculate";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const PRICE_PER_ITEM = {
  products: 1000,
  options: 500,
};

export type OrderType = "products" | "options";

/**
 * create context
 *
 * provider value가 없을때 초기값
 *
 */
const OrderContext = createContext({
  products: new Map<string, number>(),
  options: new Map<string, number>(),
  updateItemCount: ({
    itemName,
    newItemCount,
    orderType,
  }: {
    itemName: string;
    newItemCount: string;
    orderType: OrderType;
  }) => {},
  totals: {
    products: 0,
    options: 0,
    total: 0,
  },
});

/** useContext */
export const useOrderContext = () => useContext(OrderContext);

/** context provider */
export const OrderContextProvider = (props: any) => {
  const [orderCounts, setOrderCounts] = useState<
    Record<OrderType, Map<string, number>>
  >({
    products: new Map<string, number>(),
    options: new Map<string, number>(),
  });

  //돈
  const [totals, setTotals] = useState({
    products: 0,
    options: 0,
    total: 0,
  });

  const updateItemCount = useCallback(
    ({
      itemName,
      newItemCount,
      orderType,
    }: {
      itemName: string;
      newItemCount: string;
      orderType: OrderType;
    }) => {
      setOrderCounts((pre) => {
        try {
          const newOrderCounts = { ...pre };
          newOrderCounts[orderType].set(itemName, Number(newItemCount));
          return newOrderCounts;
        } catch (error) {
          console.error(error);
          return pre;
        }
      });
    },
    [orderCounts]
  );

  useEffect(() => {
    setTotals((pre) => {
      try {
        //금액에 따른 subtotal 계산
        const productsTotal = calculateSubtotal({
          orderType: "products",
          orderCounts,
        });
        const optionsTotal = calculateSubtotal({
          orderType: "options",
          orderCounts,
        });

        return {
          products: productsTotal,
          options: optionsTotal,
          total: productsTotal + optionsTotal,
        };
      } catch (error) {
        console.error(error);
        return pre;
      }
    });
  }, [orderCounts]);

  const value = useMemo(() => {
    return { ...orderCounts, totals, updateItemCount };
  }, [orderCounts, totals]);

  return <OrderContext.Provider value={value} {...props} />;
};
