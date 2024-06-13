import { fireEvent, render, screen } from "@testing-library/react";
import { Gallery } from "./Gallery";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("Gallery", () => {
  it("should only update search input value upon user enter", async () => {
    render(<Gallery />, { wrapper: createWrapper() });

    const input = await screen.findByPlaceholderText("Search photos...");

    // TODO: Mock network call

    fireEvent.keyDown(input, { target: { value: "apple" }, key: "Enter" });

    // TODO: Check that results are displayed upon successful network call
  });
});
