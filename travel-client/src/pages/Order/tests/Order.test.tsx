import { render, screen } from "@/mocks/utiles";
import mockServer from "@/mocks/server";
import { rest } from "msw";
import OrderPage from "@/pages/Order";

describe("order page test", () => {
  test("display product images form server", async () => {
    render(<OrderPage />);

    const productImages = (await screen.findAllByAltText(
      /product$/i
    )) as HTMLImageElement[];

    expect(productImages).toHaveLength(2);

    const altText = productImages.map((element) => element.alt);
    expect(altText).toEqual(["America product", "England product"]);
  });

  test("when fetching product datas, face and error", async () => {
    mockServer.resetHandlers(
      rest.get("http://localhost:5000/products", (_req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    render(<OrderPage />);
    const errorBanner = await screen.findByTestId("error-banner");
    expect(errorBanner).toHaveTextContent("에러가 발생했습니다.");
  });

  test("fetch option information from server", async () => {
    render(<OrderPage />);
    const optionCheckboxes = (await screen.findAllByRole(
      "checkbox"
    )) as HTMLInputElement[];
    expect(optionCheckboxes).toHaveLength(2);
  });
});
