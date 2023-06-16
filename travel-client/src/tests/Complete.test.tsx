import App from "@/pages/App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("complete test", () => {
  // test("render complete page test", () => {
  //   render(
  //     <MemoryRouter initialEntries={["/complete"]}>
  //       <App />
  //     </MemoryRouter>
  //   );

  //   screen.getByRole("heading", { name: "주문 확인" });
  // });

  test("from order to order completion", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    // order page
    const americaInput = (await screen.findByRole("spinbutton", {
      name: "America",
    })) as HTMLInputElement;
    userEvent.clear(americaInput);
    userEvent.type(americaInput, "2");

    const englandInput = (await screen.findByRole("spinbutton", {
      name: "England",
    })) as HTMLInputElement;
    userEvent.clear(englandInput);
    userEvent.type(englandInput, "3");

    const insuranceCheckbox = (await screen.findByRole("checkbox", {
      name: "Insurance",
    })) as HTMLInputElement;
    userEvent.click(insuranceCheckbox);

    const link = screen.getByRole("link", { name: "주문", exact: true });
    userEvent.click(link);

    // complete page
    expect(link).not.toBeInTheDocument();

    const summaryHeading = screen.getByRole("heading", { name: "주문 확인" });
    expect(summaryHeading).toBeInTheDocument();

    const productsHeading = screen.getByRole("heading", {
      name: "여행 상품: 5000",
    });
    expect(productsHeading).toBeInTheDocument();

    const optionHeading = screen.getByRole("heading", { name: "옵션: 500" });
    expect(optionHeading).toBeInTheDocument();

    expect(screen.getByText("2 America")).toBeInTheDocument();
    expect(screen.getByText("3 England")).toBeInTheDocument();
    expect(screen.getByText("Insurance")).toBeInTheDocument();

    const confirmCheckbox = screen.getByRole("checkbox", {
      name: "주문하려는 것을 확인하셨나요?",
    });
    userEvent.click(confirmCheckbox);

    const confirmOrderButton = screen.getByRole("button", {
      name: "주문 확인",
    });
    userEvent.click(confirmOrderButton);

    //summary page
    expect(confirmOrderButton).not.toBeInTheDocument();
    const loading = screen.getByText(/loading/i);
    expect(loading).toBeInTheDocument();

    const completeHeader = await screen.findByRole("heading", {
      name: "주문이 성공했습니다.",
    });
    expect(loading).not.toBeInTheDocument();
    expect(completeHeader).toBeInTheDocument();

    const loadingDisapaered = screen.queryByText("loading");
    expect(loadingDisapaered).not.toBeInTheDocument();

    const firstPageLink = screen.getByRole("link", { name: "첫페이지로" });
    userEvent.click(firstPageLink);
  });
});
