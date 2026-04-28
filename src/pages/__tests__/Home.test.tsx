import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@/pages/Home";

test("renders home", () => {
  render(<Home />);
  expect(screen.getByText("Home")).toBeInTheDocument();
});