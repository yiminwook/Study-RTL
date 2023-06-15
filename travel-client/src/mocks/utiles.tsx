import { PropsWithChildren, ReactElement } from "react";
import { OrderContextProvider } from "@/contexts/OrderContext";
import { render, RenderOptions } from "@testing-library/react";

const AllProviders = ({ children }: PropsWithChildren) => {
  return <OrderContextProvider>{children}</OrderContextProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => {
  return render(ui, { wrapper: AllProviders, ...options });
};

export * from "@testing-library/react";
//override
export { customRender as render };
