import { render, screen } from "@testing-library/react";
import App from "@/App/App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("lint test", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "lintTest" });
  expect(buttonElement).toHaveTextContent("lintTest");
});

test("the counter starts at 0", () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toBe(0);
});
