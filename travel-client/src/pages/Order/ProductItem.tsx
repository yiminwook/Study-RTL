import { useOrderContext } from "@/contexts/OrderContext";
import { ItemType } from "@/pages/Order/Items";
import { ChangeEvent, useCallback } from "react";

interface ProductItemProps extends ItemType {}

const ProductItem = ({ name, imagePath }: ProductItemProps) => {
  const { products, updateItemCount } = useOrderContext();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      updateItemCount({
        itemName: name,
        orderType: "products",
        newItemCount: e.target.value ?? "0",
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [products]
  );

  return (
    <div className="item">
      <div>
        <img
          src={`http://localhost:5000/${imagePath}`}
          alt={`${name} product`}
        />
      </div>
      <form>
        <label htmlFor="quantity">{name}</label>
        <input
          type="number"
          min={0}
          name="quantity"
          defaultValue={0}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default ProductItem;
