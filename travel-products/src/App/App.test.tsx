import { render, screen } from "@testing-library/react";
import App from "@/App/App";

test("lint test", () => {
  render(<App />);
  const buttonEl = screen.getByRole("button", { name: "lintTest" });
  expect(buttonEl).toHaveTextContent("lintTest");
});
