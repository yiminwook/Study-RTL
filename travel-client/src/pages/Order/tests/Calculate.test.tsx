import userEvent from "@testing-library/user-event";
import OrderPage from "@/pages/Order";
import { OrderContextProvider } from "@/contexts/OrderContext";
import { render, screen } from "@/mocks/utiles";
import { useEffect } from "react";

describe("calculate test", () => {
  test("update product's total when products change", async () => {
    render(<OrderPage />, { wrapper: OrderContextProvider });
    const productTotal = screen.getByText("상품 가격: ", { exact: false });
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

  test("update options's total when options change", async () => {
    render(<OrderPage />);

    const optionsTotal = screen.getByText("옵션 가격: ", { exact: false });
    expect(optionsTotal).toHaveTextContent("0");

    const insuraceCheckbox = (await screen.findByRole("checkbox", {
      name: "Insurance",
    })) as HTMLInputElement;
    userEvent.clear(insuraceCheckbox);
    userEvent.click(insuraceCheckbox);
    expect(optionsTotal).toHaveTextContent("500");

    const dinnerCheckbox = await screen.findByRole("checkbox", {
      name: "Dinner",
    });
    userEvent.clear(dinnerCheckbox);
    userEvent.click(dinnerCheckbox);

    expect(optionsTotal).toHaveTextContent("1000");

    userEvent.click(dinnerCheckbox);
    expect(optionsTotal).toHaveTextContent("500");
  });
});

describe("total price of goods and options", () => {
  test("total price starts with 0 and updating total price when adding one product", async () => {
    render(<OrderPage />);
    const total = screen.getByText("총 가격: ", { exact: false });

    expect(total).toHaveTextContent("0");

    const americaInput = (await screen.findByRole("spinbutton", {
      name: "America",
    })) as HTMLInputElement;
    userEvent.clear(americaInput);
    userEvent.type(americaInput, "1");
    expect(total).toHaveTextContent("1000");
  });

  test("updating total price when adding one option", async () => {
    render(<OrderPage />);
    const total = screen.getByText("총 가격:", { exact: false });

    const insuranceCheckbox = await screen.findByRole("checkbox", {
      name: "Insurance",
    });
    userEvent.clear(insuranceCheckbox);
    userEvent.click(insuranceCheckbox);
    expect(total).toHaveTextContent("500");
  });

  test("updating total price when removing option and product", async () => {
    render(<OrderPage />);
    const total = screen.getByText("총 가격:", { exact: false });

    const insuranceCheckbox = await screen.findByRole("checkbox", {
      name: "Insurance",
    });

    const americaInput = await screen.findByRole("spinbutton", {
      name: "America",
    });

    userEvent.clear(insuranceCheckbox);
    userEvent.click(insuranceCheckbox);

    userEvent.clear(americaInput);
    userEvent.type(americaInput, "3");

    userEvent.clear(americaInput);
    userEvent.type(americaInput, "1");

    expect(total).toHaveTextContent("1500");
  });
});
