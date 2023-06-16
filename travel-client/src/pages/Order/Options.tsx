import ErrorBanner from "@/components/ErrorBanner";
import { useOrderContext } from "@/contexts/OrderContext";
import axios from "axios";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface OptionType {
  name: string;
}

interface OptionsProps {}

const Options = ({}: OptionsProps) => {
  const [options, setOptions] = useState<OptionType[]>([]);
  const [showError, setShowError] = useState(false);
  const { totals } = useOrderContext();

  const loadOption = async () => {
    try {
      const response = await axios.get<OptionType[]>(
        "http://localhost:5000/options"
      );
      setOptions(() => response.data);
    } catch (error) {
      // console.error(error);
      setShowError(() => true);
    }
  };

  useEffect(() => {
    loadOption();
  }, []);

  return (
    <section className="order-product-option">
      <div>
        <div>
          <h2>옵션 가격: {totals.options}</h2>
        </div>
        {!showError ? (
          <ul>
            {options.map((option) => (
              <li key={`${option.name}-list`}>
                <Option {...option} />
              </li>
            ))}
          </ul>
        ) : (
          <ErrorBanner message="에러가 발생했습니다." />
        )}
      </div>
      <div>
        <h2>총 가격: {totals.total}</h2>
        <br />
        <Link to="/summary">주문</Link>
      </div>
    </section>
  );
};

export default Options;

interface OptionProps {
  name: string;
}

const Option = ({ name }: OptionProps) => {
  const { options, updateItemCount } = useOrderContext();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      updateItemCount({
        itemName: name,
        orderType: "options",
        newItemCount: e.target.checked ? "1" : "0",
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [options]
  );

  return (
    <>
      <form>
        <input type="checkbox" id={`${name} option`} onChange={handleChange} />{" "}
        <label htmlFor={`${name} option`}>{name}</label>
      </form>
    </>
  );
};
