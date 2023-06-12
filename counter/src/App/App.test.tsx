import { fireEvent, render, screen } from "@testing-library/react";
import App from "@/App/App";
import { wait } from "@testing-library/user-event/dist/utils";

describe("counter test", () => {
  test("counter started at 0", () => {
    render(<App />);
    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent("0");
  });

  test("minus button existed test", () => {
    render(<App />);
    const minusButtonElement = screen.getByTestId("minus-button");
    expect(minusButtonElement).toHaveTextContent("-");
  });

  test("plus button existed test", () => {
    render(<App />);
    const plusButtonElement = screen.getByTestId("plus-button");
    expect(plusButtonElement).toHaveTextContent("+");
  });
});
