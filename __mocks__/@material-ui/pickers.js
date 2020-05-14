import React from "react";

const actual = jest.requireActual("@material-ui/pickers");
const moment = jest.requireActual("moment");

export default {
  ...actual,
  DatePicker: (() => (props) => {
    console.log("I am a mock!");

    return (
      <input
        data-testid="mockedDateField"
        onChange={(e) => {
          props.onChange(moment(e.target.value));
        }}
      />
    );
  })(),
};
