import { Link } from "react-router-dom";

import { Box, Button, Divider, TextField, Typography } from "@mui/material";

import { useData } from "./useData";

const Register = () => {
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
          label="Username"
          {...data.register("username", {
            required: true,
            minLength: 3,
            maxLength: 20,
          })}
        />
        {data.errors.username && data.errors.username.type === "required" && (
          <Typography variant="body1" color="error">
            Username is required
          </Typography>
        )}
        {data.errors.username &&
          (data.errors.username.type === "minLength" ||
            data.errors.username.type === "maxLength") && (
            <Typography variant="body1" color="error">
              Username must be 3 digits at least
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
        <TextField
          label="Repeat password"
          type="password"
          {...data.register("confirmPassword", {
            required: true,
            validate: (value) => {
              if (data.watch("password") !== value) {
                return "Password do not match";
              }
            },
          })}
        />
        {data.errors.confirmPassword &&
          data.errors.confirmPassword.type === "required" && (
            <Typography variant="body1" color="error">
              Repeat password is required
            </Typography>
          )}
        {data.errors.confirmPassword &&
          data.errors.confirmPassword.type === "validate" && (
            <Typography variant="body1" color="error">
              {data.errors.confirmPassword?.message}
            </Typography>
          )}

        {data.registerError && (
          <Typography variant="body1" color="error">
            {data.registerError.message}
          </Typography>
        )}
        <Button
          type="submit"
          disabled={data.isSubmitting}
          variant="contained"
          color="info"
        >
          {data.isSubmitting ? "Saving ..." : "Register"}
        </Button>
      </Box>
      <Divider />
      <Typography textAlign="center">
        Already registered? &nbsp;
        <Link to="/login">Login</Link>
      </Typography>
    </Box>
  );
};

export default Register;
