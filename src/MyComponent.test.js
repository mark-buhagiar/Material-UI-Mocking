import { fireEvent, render } from "@testing-library/react";
import moment from "Moment";
import React from "react";
import MyComponent from "./MyComponent";

jest.mock("@material-ui/pickers");

test("Example test", () => {
  const { getByText, getByTestId } = render(<MyComponent />);
  const dateInput = getByTestId("mockedDateField");
  const newDate = moment("1990-02-02T10:00:00Z").format();

  fireEvent.change(dateInput, {
    target: { value: newDate },
  });

  expect(getByText("02 02 1990")).toBeTruthy();
});
