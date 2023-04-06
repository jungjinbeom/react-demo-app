import { render, screen, waitFor } from "@testing-library/react";

import App from "./App";

jest.mock("./hooks/useFetchProducts.ts");

test("App", async () => {
  render(<App />);
  await waitFor(() => {
    screen.getByText("Apple");
  });

  //expect(useFetchProducts).toBeCalled();
});
