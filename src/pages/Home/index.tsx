import { FC, useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";

const Home: FC = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
      bgcolor="background.default"
      gap={2}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        width="60%"
      >
        <Typography variant="h6" gutterBottom>
          Todo List
        </Typography>
        <Button variant="contained" color="warning">
          Logout
        </Button>
      </Box>
      <Outlet />
    </Box>
  );
};

export default Home;
