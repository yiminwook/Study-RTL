import { render, screen } from "@testing-library/react";
import OrderSection from "@/pages/Order/Section";

describe("order page test", () => {
  test("display product images form server", async () => {
    render(<OrderSection optionType="products" />);

    const productImages = (await screen.findAllByAltText(
      /product$/i
    )) as HTMLImageElement[];
    expect(productImages).toHaveLength(2);

    const altText = productImages.map((element) => element.alt);
    expect(altText).toEqual(["America product", "England product"]);
  });
});
