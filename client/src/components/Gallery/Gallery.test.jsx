import { render, screen } from "@testing-library/react";
import { RightArrow } from "./rightArrow.jsx";
import { LeftArrow } from "./leftArrow.jsx";
import { GallerySlider } from "./gallerySlider.jsx";

describe("Gallery", () => {
  it("renders", async () => {
    const props = {
      pictures: ["first", "second", "third", "fourth"],
      currentIndex: 1,
    };
    const { rightArrowRender } = render(<RightArrow {...props} />);

    expect(screen.getByRole("test")).toBeInTheDocument();
    expect(screen.getByRole("test")).toHaveClass("gallery__arrow-right");
  });

  it("renders", async () => {
    const props = {
      pictures: ["first", "second", "third", "fourth"],
      currentIndex: 3,
    };
    const { rightArrowRender } = render(<RightArrow {...props} />);

    expect(screen.queryByRole("test")).toBeNull();
  });

  it("renders", async () => {
    const leftArrowRender = render(<LeftArrow currentIndex={0} />);

    expect(leftArrowRender.container.firstChild).toBeNull();
  });

  it("renders", async () => {
    const gallerySliderRender = render(
      <GallerySlider
        currentIndex={0}
        pictures={["first", "second", "third", "fourth"]}
      />
    );
    expect(
      gallerySliderRender.container.firstChild.classList.contains(
        "gallery__slider"
      )
    ).toBe(true);
    expect(
      screen.getAllByAltText(/Slider with apartment's images/i)[0]
    ).toHaveClass("gallery__slider_img");
  });
});
