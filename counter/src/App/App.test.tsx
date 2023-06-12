import { fireEvent, render, screen } from "@testing-library/react";
import App from "@/App/App";

describe("counter test", () => {
  test("counter started at 0", () => {
    render(<App />);
    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent("0");
  });

  test("minus button existed", () => {
    render(<App />);
    const minusButtonElement = screen.getByTestId("minus-button");
    expect(minusButtonElement).toHaveTextContent("-");
  });

  test("plus button existed", () => {
    render(<App />);
    const plusButtonElement = screen.getByTestId("plus-button");
    expect(plusButtonElement).toHaveTextContent("+");
  });

  test("when minus button click, counter change to -1", async () => {
    render(<App />);
    const counterElement = screen.getByTestId("counter");
    const minusButtonElement = screen.getByTestId("minus-button");
    fireEvent.click(minusButtonElement);
    expect(counterElement).toHaveTextContent("-1");
  });

  test("when plus button click twice, counter change to 2", () => {
    render(<App />);
    const counterElement = screen.getByTestId("counter");
    const plusButtonElement = screen.getByTestId("plus-button");
    fireEvent.click(plusButtonElement);
    fireEvent.click(plusButtonElement);
    expect(counterElement).toHaveTextContent("2");
  });
});
