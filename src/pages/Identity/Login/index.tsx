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
          error={!!data.errors.email}
          helperText={data.errors.email?.message}
          label="Email"
          {...data.register("email", {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
        />
        <TextField
          error={!!data.errors.name}
          helperText={data.errors.name?.message}
          label="Name"
          {...data.register("name", {
            required: true,
            minLength: 3,
            maxLength: 20,
          })}
        />
        <TextField
          error={!!data.errors.password}
          helperText={data.errors.password?.message}
          label="Password"
          type="password"
          {...data.register("password", { required: true })}
        />
        {data.loginError && (
          <Typography variant="body1" color="error">
            {data.loginError.message}
          </Typography>
        )}
        <Button
          type="submit"
          disabled={data.isLoading}
          variant="contained"
          color="info"
        >
          {data.isLoading ? "logging in..." : "login"}
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
