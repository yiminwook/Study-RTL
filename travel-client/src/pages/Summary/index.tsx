import { useOrderContext } from "@/contexts/OrderContext";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { totals, options, products } = useOrderContext();
  const productsArray = Array.from(products);
  const optionArray = Array.from(options.keys());
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/complete");
  };
  return (
    <section>
      <h1>주문 확인</h1>
      <h2>{`여행 상품: ${totals.products}`}</h2>
      <ul>
        {productsArray.map(([key, value]) => (
          <li key={`${key} list`}>
            {value} {key}
          </li>
        ))}
      </ul>

      {options.size > 0 ? (
        <>
          <h2>옵션: {totals.options}</h2>
          <ul>
            {optionArray.map((key) => (
              <li key={`${key} list`}>{key}</li>
            ))}
          </ul>
        </>
      ) : null}

      <form onSubmit={onSubmit}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          id="confirm-checkbox"
        />
        <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>
        <br />
        <button disabled={isChecked === false} type="submit">
          주문 확인
        </button>
      </form>
    </section>
  );
};

export default Summary;
