import { useState } from "react";

const Summary = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleIsChecked = () => {
    setIsChecked((pre) => !pre);
  };
  return (
    <section>
      <form>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleIsChecked}
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
