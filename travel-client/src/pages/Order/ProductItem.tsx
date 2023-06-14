import { ItemType } from "@/pages/Order/Items";

interface ProductItemProps extends ItemType {}

const ProductItem = ({ name, imagePath }: ProductItemProps) => {
  return (
    <div>
      <div>
        <img
          src={`http://localhost:5000/${imagePath}`}
          alt={`${name} product`}
        />
      </div>
      <form>
        <label htmlFor="quantity">{name}</label>
        <input type="number" min={0} name="quantity" defaultValue={0} />
      </form>
    </div>
  );
};

export default ProductItem;
