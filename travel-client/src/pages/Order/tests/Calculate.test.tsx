import userEvent from "@testing-library/user-event";
import OrderPage from "@/pages/Order";
import { OrderContextProvider } from "@/contexts/OrderContext";
import { render, screen } from "@/mocks/utiles";

describe("calculate test", () => {
  test("update product's total when products change", async () => {
    render(<OrderPage />, { wrapper: OrderContextProvider });
    const productTotal = screen.getByText("총 가격: ", { exact: false });
    expect(productTotal).toHaveTextContent("0");

    // label for과 id를 매칭
    const americaInput = (await screen.findByRole("spinbutton", {
      name: "America",
    })) as HTMLInputElement;
    userEvent.clear(americaInput);
    userEvent.type(americaInput, "1");
    expect(productTotal).toHaveTextContent("1000");

    const englandInput = await screen.findByRole("spinbutton", {
      name: "England",
    });
    userEvent.clear(englandInput);
    userEvent.type(englandInput, "3");
    expect(productTotal).toHaveTextContent("4000");
  });
});
