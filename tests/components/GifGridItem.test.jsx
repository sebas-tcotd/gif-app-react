import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components";

describe("Tests on <GifGridItem />", () => {
  const title = "Test title";
  const url = "https://www.google.com.pe/";

  test("Should match with the snapshot", () => {
    const { container } = render(<GifGridItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("Should show the gif with the indicated URL and ALT text", () => {
    render(<GifGridItem title={title} url={url} />);

    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("Should show the title of the component", () => {
    render(<GifGridItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
