import { fireEvent, render, screen } from "@testing-library/react";
import App from "@/App/App";

describe("counter test", () => {
  test("counter started at 0", () => {
    render(<App />);
    const counterElement = screen.getByTestId("counter") as HTMLDivElement;
    expect(counterElement).toHaveTextContent("0");
  });

  test("minus button existed", () => {
    render(<App />);
    const minusButtonElement = screen.getByTestId(
      "minus-button"
    ) as HTMLButtonElement;
    expect(minusButtonElement).toHaveTextContent("-");
  });

  test("plus button existed", () => {
    render(<App />);
    const plusButtonElement = screen.getByTestId("plus-button");
    expect(plusButtonElement).toHaveTextContent("+");
  });

  test("when minus button click, counter change to -1", async () => {
    render(<App />);
    const counterElement = screen.getByTestId("counter") as HTMLDivElement;
    const minusButtonElement = screen.getByTestId(
      "minus-button"
    ) as HTMLButtonElement;
    fireEvent.click(minusButtonElement);
    expect(counterElement).toHaveTextContent("-1");
  });

  test("when plus button click twice, counter change to 2", () => {
    render(<App />);
    const counterElement = screen.getByTestId("counter") as HTMLDivElement;
    const plusButtonElement = screen.getByTestId(
      "plus-button"
    ) as HTMLButtonElement;
    fireEvent.click(plusButtonElement);
    fireEvent.click(plusButtonElement);
    expect(counterElement).toHaveTextContent("2");
  });

  test("on/off button has blue color", () => {
    render(<App />);
    const onAndOffButton = screen.getByTestId(
      "on/off-button"
    ) as HTMLButtonElement;
    expect(onAndOffButton).toHaveStyle({ backgroundColor: "blue" });
  });

  test("when click on/off button, minus and plus buttons disabled", () => {
    render(<App />);
    const onAndOffButton = screen.getByTestId("on/off-button");
    fireEvent.click(onAndOffButton);
    const minusButton = screen.getByTestId("minus-button") as HTMLButtonElement;
    const plusButton = screen.getByTestId("plus-button") as HTMLButtonElement;
    expect(minusButton.disabled && plusButton.disabled).toBeTruthy();
  });
});
