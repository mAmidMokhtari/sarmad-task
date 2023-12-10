import { Link } from "react-router-dom";

import { Box, Button, Divider, TextField, Typography } from "@mui/material";

import { REGISTER } from "../../../constants/routes";
import { useData } from "./useData";

const Login = () => {
  const data = useData();

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Box
        component="form"
        onSubmit={data.onSubmit}
        display="flex"
        flexDirection="column"
        width="100%"
        gap={2}
      >
        <TextField
          label="Name"
          {...data.register("name", {
            required: true,
            minLength: 3,
            maxLength: 20,
          })}
        />
        {data.errors.name && data.errors.name.type === "required" && (
          <Typography variant="body1" color="error">
            Name is required
          </Typography>
        )}
        <TextField
          label="Password"
          type="password"
          {...data.register("password", { required: true })}
        />
        {data.errors.password && data.errors.password.type === "required" && (
          <Typography variant="body1" color="error">
            Password is required
          </Typography>
        )}
        {data.loginError && (
          <Typography variant="body1" color="error">
            {data.loginError.message}
          </Typography>
        )}
        <Button
          type="submit"
          disabled={data.isSubmitting}
          variant="contained"
          color="info"
        >
          {data.isSubmitting ? "logging in..." : "login"}
        </Button>
      </Box>
      <Divider />
      <Typography textAlign="center">
        Already registered? &nbsp;
        <Link to={REGISTER}>Register</Link>
      </Typography>
    </Box>
  );
};

export default Login;
