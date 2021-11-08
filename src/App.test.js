import { render, screen } from "@testing-library/react";
import App from "./App";
/* 
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

describe("App", () => {
  test("should render initital page", () => {
    const { getByAltText, getByText } = render(<App />);

    const imageEl = getByAltText("logo");
    const introEl = getByText(/edit/i);
    const linkEl = getByText(/learn/i);

    expect(imageEl).toBeInTheDocument();
    expect(introEl).toBeInTheDocument();
    expect(linkEl).toBeInTheDocument();
  });
});
