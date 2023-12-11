import { Link } from "react-router-dom";

import { Box, Button, Divider, TextField, Typography } from "@mui/material";

import { LOG_IN } from "../../../constants/routes";
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
        <TextField
          error={!!data.errors.password_confirmation}
          helperText={data.errors.password_confirmation?.message}
          label="Repeat password"
          type="password"
          {...data.register("password_confirmation", {
            required: true,
            validate: (value) => {
              if (data.watch("password") !== value) {
                return "Password do not match";
              }
            },
          })}
        />
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
        <Link to={LOG_IN}>Login</Link>
      </Typography>
    </Box>
  );
};

export default Register;
