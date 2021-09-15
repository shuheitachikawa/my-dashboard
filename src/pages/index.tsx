import { TextField } from "@material-ui/core";
import Amplify from "aws-amplify";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

export default function Auth() {
  return (
    <form noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
}
