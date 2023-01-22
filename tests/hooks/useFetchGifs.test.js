import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";

describe("Tests on useFetchGifs", () => {
  test("Should return the initial state", () => {
    const { result } = renderHook(() => useFetchGifs("Test"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Should return an array of images and isLoading in false", async () => {
    const { result } = renderHook(() => useFetchGifs("Test"));
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
