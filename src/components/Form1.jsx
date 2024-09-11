import { Button, Stack, TextField } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context";
import { isPalindrome } from "../utils/isPalindrome";

const Form1 = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <div>
      <Stack gap={2}>
        <TextField
          value={state.inputForm1}
          onChange={(e) => {
            setState((prev) => ({
              ...prev,
              inputForm1: e.target.value,
            }));
          }}
          label="Input String"
        />
        <Button
          onClick={() => {
            if (!state.inputForm1) return;

            const isSubmittedStrPalindrome = isPalindrome(state.inputForm1);

            setState((prev) => ({
              ...prev,
              submittedForm1: state.inputForm1,
              isSubmittedStrPalindrome,
              isForm2Open: true,
            }));
          }}
          variant="contained"
        >
          Submit
        </Button>
      </Stack>
    </div>
  );
};

export default Form1;
