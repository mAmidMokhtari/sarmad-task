import { Outlet } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";

import { useData } from "./useData";

const Home = () => {
  const data = useData();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
      bgcolor="background.default"
      gap={2}
      maxWidth="lg"
      margin="auto"
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
      >
        <Typography variant="h6" gutterBottom>
          Todo List
        </Typography>
        <Button variant="contained" color="warning" onClick={data.loggingOut}>
          Logout
        </Button>
      </Box>
      <Outlet />
    </Box>
  );
};

export default Home;
