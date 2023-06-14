import { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "@/pages/Order/ProductItem";

export interface ItemType {
  name: string;
  imagePath: string;
}

interface OrderSectionProps {
  optionType: string;
}

const OrderSection = ({ optionType }: OrderSectionProps) => {
  const [items, setItems] = useState<ItemType[]>([]);

  const loadItems = async (optionType: string) => {
    try {
      const response = await axios.get<ItemType[]>(
        `http://localhost:5000/${optionType}`
      );
      setItems(() => response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadItems(optionType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      {items.map((item) => (
        <ProductItem key={`${item.name} product`} {...item} />
      ))}
    </section>
  );
};

export default OrderSection;
