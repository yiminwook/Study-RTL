import { render, screen } from "@testing-library/react";
import Summary from "@/pages/Summary";

describe("summary page test", () => {
  test("주문확인 체크박스를 눌러야 버튼이 활성화", () => {
    render(<Summary />);

    const checkbox = screen.getByRole("checkbox", {
      name: "주문하려는 것을 확인하셨나요?",
    }) as HTMLInputElement;
    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByRole("button", {
      name: "주문 확인",
    }) as HTMLButtonElement;
    expect(confirmButton).toBeDisabled();
  });
});
