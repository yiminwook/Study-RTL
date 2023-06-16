import { rest } from "msw";

const handlers = [
  rest.get("http://localhost:5000/products", (_req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "America",
          imagePath: "images/america.jpeg",
        },
        {
          name: "England",
          imagePath: "images/england.jpeg",
        },
      ])
    );
  }),
  rest.get("http://localhost:5000/options", (_req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Insurance",
        },
        {
          name: "Dinner",
        },
      ])
    );
  }),
  rest.post("http://localhost:5000/order", (req, res, ctx) => {
    let dummyData = [{ orderNumber: 123456, price: 2000 }];
    return res(ctx.json(dummyData));
  }),
];

export default handlers;
