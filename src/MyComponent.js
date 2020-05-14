import DateFnsUtils from "@date-io/moment";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment";
import React, { useState } from "react";

export default function MyComponent() {
  const [date, setDate] = useState(moment());
  return (
    <>
      Selected date:<span>{date.format("DD MM YYYY")}</span>
      <br />
      <MuiPickersUtilsProvider utils={DateFnsUtils} libInstance={moment}>
        <DatePicker
          variant="inline"
          format="DD MMM YYYY"
          label="Date"
          value={date}
          autoOk={true}
          onChange={setDate}
        />
      </MuiPickersUtilsProvider>
    </>
  );
}
