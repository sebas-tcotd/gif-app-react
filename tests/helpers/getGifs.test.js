import { getGifs } from "../../src/helpers/getGifs";

describe("Test in GetGifs.js", () => {
  test("Should return a gifs array", async () => {
    const gifs = await getGifs("Test");

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
