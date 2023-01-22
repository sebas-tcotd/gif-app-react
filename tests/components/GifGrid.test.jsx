import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Tests on <GifGrid />", () => {
  const category = "Test";
  test("Should show the loading text in the begginning", () => {
    useFetchGifs.mockReturnValue({ images: [], isLoading: true });
    render(<GifGrid category={category} />);

    expect(screen.getByText("Cargando...")).toBeTruthy();
    expect(screen.getByText(category));
  });

  test("Should show the items when the gifs are loaded through useFetchGifs", () => {
    const gifs = [
      { id: "ABC", title: "Test", url: "https://google.com.pe/" },
      { id: "DEF", title: "Test 1", url: "https://google.com.co/" },
    ];
    useFetchGifs.mockReturnValue({ images: gifs, isLoading: false });
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBeGreaterThanOrEqual(1);
  });
});
