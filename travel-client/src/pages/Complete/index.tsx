import ErrorBanner from "@/components/ErrorBanner";
import { useOrderContext } from "@/contexts/OrderContext";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Complete = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<{ orderNumber: number; price: number }[]>(
    []
  );
  const { totals } = useOrderContext();

  const getOrder = async () => {
    try {
      setIsLoading(() => true);
      const { data } = await axios.post<
        { orderNumber: number; price: number }[]
      >("http://localhost:5000/order", { totals });
      setData(() => data);
    } catch {
      setIsError(() => true);
    } finally {
      setIsLoading(() => false);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  if (isLoading) {
    return (
      <section>
        <div>loading... </div>
      </section>
    );
  }

  return (
    <section>
      {!isError ? (
        <>
          <h1>주문이 성공했습니다.</h1>
          <h3>지금까지의 모든 주문</h3>
          <br />
          <table>
            <thead>
              <tr>
                <th>number</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ orderNumber, price }) => (
                <tr key={`oriderNumber ${orderNumber}`}>
                  <th>{orderNumber}</th>
                  <th>{price}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <ErrorBanner message="에러가 발행했습니다." />
      )}
      <Link to="/">첫페이지로</Link>
    </section>
  );
};

export default Complete;
