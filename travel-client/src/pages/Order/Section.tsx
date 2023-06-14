import { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "@/pages/Order/ProductItem";
import ErrorBanner from "@/components/ErrorBanner";

export interface ItemType {
  name: string;
  imagePath: string;
}

interface OrderSectionProps {
  optionType: string;
}

const OrderSection = ({ optionType }: OrderSectionProps) => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [showError, setShowError] = useState(false);

  const loadItems = async (optionType: string) => {
    try {
      const response = await axios.get<ItemType[]>(
        `http://localhost:5000/${optionType}`
      );
      console.log("test", response);
      setItems(() => response.data);
    } catch (error) {
      console.error(error);
      setShowError(() => true);
    }
  };

  useEffect(() => {
    loadItems(optionType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionType]);

  return (
    <section>
      {!showError ? (
        items.map((item) => (
          <ProductItem key={`${item.name} product`} {...item} />
        ))
      ) : (
        <ErrorBanner message="에러가 발생했습니다." />
      )}
    </section>
  );
};

export default OrderSection;
