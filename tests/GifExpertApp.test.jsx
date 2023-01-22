import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Tests on <GifExpertApp />", () => {
  const setup = () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form", { name: "form" });
    return {
      input,
      form,
    };
  };

  test("Should show the app title", () => {
    render(<GifExpertApp />);
    expect(screen.getByText("GifExpert App")).toBeTruthy();
  });

  test("Should add a category if receives a value", () => {
    const { form, input } = setup();

    fireEvent.input(input, { target: { value: "Gordon Freeman" } });
    fireEvent.submit(form);

    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(2);
  });

  test("Should not add a category if its value is duplicated", () => {
    const { form, input } = setup();

    fireEvent.input(input, { target: { value: "" } });
    fireEvent.submit(form);

    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(1);
  });
});
