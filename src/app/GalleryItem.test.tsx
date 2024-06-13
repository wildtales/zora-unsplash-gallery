import { render, screen } from "@testing-library/react";
import { GalleryItem } from "./GalleryItem";

describe("GalleryItem", () => {
  it("should render an item with the alternative text set", async () => {
    const item = {
      alt_description:
        "white and black penguin on snow covered ground during daytime",
      id: "Ak81Vc-kCf4",
      urls: {
        regular:
          "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjI0MzV8MHwxfHNlYXJjaHwxfHxwZW5ndWlufGVufDB8fHx8MTcxODI3Mjg5Nnww&ixlib=rb-4.0.3&q=80&w=1080",
      },
    };

    render(<GalleryItem item={item} />);

    const imageElem = await screen.findByAltText(
      "white and black penguin on snow covered ground during daytime"
    );

    expect(imageElem).toBeTruthy();
  });
});
