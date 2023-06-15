import ErrorBanner from "@/components/ErrorBanner";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "@/pages/Order/ProductItem";
import { PRICE_PER_ITEM, useOrderContext } from "@/contexts/OrderContext";

export interface ItemType {
  name: string;
  imagePath: string;
}

const Items = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [showError, setShowError] = useState(false);
  const { totals } = useOrderContext();

  const loadItems = async () => {
    try {
      const response = await axios.get<ItemType[]>(
        `http://localhost:5000/products`
      );
      setItems(() => response.data);
    } catch (error) {
      // console.error(error);
      setShowError(() => true);
    }
  };

  useEffect(() => {
    loadItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="order-product-item">
      <div>
        <h2>주문 종류 PRODUCT</h2>
        <p>하나의 가격: {PRICE_PER_ITEM.products}</p>
        <p>상품 가격: {totals.products}</p>
      </div>
      <div>
        {!showError ? (
          items.map((item) => (
            <ProductItem key={`${item.name} product`} {...item} />
          ))
        ) : (
          <ErrorBanner message="에러가 발생했습니다." />
        )}
      </div>
    </section>
  );
};

export default Items;
