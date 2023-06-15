import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OrderPage from "@/pages/Order";

describe("calculate test", () => {
  test("update product's total when products change", async () => {
    render(<OrderPage />);
    const productTotal = screen.getByText("상품 총 가격: ", { exact: false });
    expect(productTotal).toHaveTextContent("0");

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
