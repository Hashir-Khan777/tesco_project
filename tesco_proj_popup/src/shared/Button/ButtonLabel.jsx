import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import './buttonlable.css'
import CircularIndeterminate from "../Spinner/Spinner";
export default function ButtonLabel({
  buttonVariant,
  buttonLabel,
  setOpen,
  setDefaultlValue,
  setSize = "medium",
  loginType=true,
  styles,
  isLoading,
  handleCLick,
  disabledBtn
}) {
 
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant={buttonVariant}
        onClick={handleCLick}
        defaultValue={setDefaultlValue}
        size={setSize}
        className={"button-class-variant"}
        sx={styles}
        disabled={disabledBtn}

      >
        {isLoading?<CircularIndeterminate/>:buttonLabel}
       
      </Button>
    </Stack>
  );
}
