import { render, screen } from "@testing-library/react";
import App from "@/App/App";

describe("counter test", () => {
  test("counter starts at 0", () => {
    render(<App />);
    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent("0");
  });
});
