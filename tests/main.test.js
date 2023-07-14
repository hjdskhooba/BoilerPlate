import { render, screen } from "@testing-library/react";
import Title from "../src/Sections/Title";
import React from "react";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe("Title Component", () => {
  test("renders the title correctly", () => {
    render(<Title />);
    const titleElement = screen.getByText("sections.title.title");
    expect(titleElement).toBeInTheDocument();
  });
});
