import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxLabels({
  checked,
  handleChange,
  checkBoxLabel,
}) {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
            color="success"
            sx={{
              color: "white",
            }}
          />
        }
        label={checkBoxLabel}
        sx={{ color: "white" }}
      />
    </FormGroup>
  );
}
