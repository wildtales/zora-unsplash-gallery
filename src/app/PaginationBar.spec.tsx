import { render, screen } from "@testing-library/react";
import { getPageNumbers, PaginationBar } from "./PaginationBar";

describe("PaginationBar", () => {
  it("should render the previous button", async () => {
    render(
      <PaginationBar currentPage={1} totalPages={3} setPage={jest.fn()} />
    );

    const node = await screen.findByText("Previous");

    expect(node).toBeDefined();
  });

  it("should render the next button", async () => {
    render(
      <PaginationBar currentPage={1} totalPages={3} setPage={jest.fn()} />
    );

    const node = await screen.findByText("Next");

    expect(node).toBeDefined();
  });

  it("should render three PaginationLink components when user is not on last page", async () => {
    render(
      <PaginationBar currentPage={1} totalPages={3} setPage={jest.fn()} />
    );

    const nodes = await screen.findAllByTestId("page-count");

    expect(nodes.length).toEqual(3);
  });

  it("should render only two PaginationLink components when on last page", async () => {
    render(
      <PaginationBar currentPage={3} totalPages={3} setPage={jest.fn()} />
    );

    const nodes = await screen.findAllByTestId("page-count");

    expect(nodes.length).toEqual(2);
  });

  it("should change the page to the 2nd page when clicked", async () => {
    const setPageMock = jest.fn();

    const wrapper = render(
      <PaginationBar currentPage={1} totalPages={3} setPage={setPageMock} />
    );

    const paginationItem = await wrapper.findByText(2);

    paginationItem.click();

    expect(setPageMock).toHaveBeenCalledWith(2);
  });
});

describe("getPageNumbers", () => {
  test.each([
    [1, 3, [1, 2, 3]],
    [2, 3, [1, 2, 3]],
    [2, 3, [1, 2, 3]],
    [3, 3, [2, 3]],
  ])(
    "should return list of pages based on current page %s and total pages %s",
    (currentPage, totalPages, expectedResult) => {
      const result = getPageNumbers(currentPage, totalPages);
      expect(result).toEqual(expectedResult);
    }
  );
});
