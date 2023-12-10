import { Outlet } from "react-router-dom";

import { Box, Paper } from "@mui/material";

const IdentityLayout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      bgcolor="background.default"
      width="100%"
    >
      <Paper elevation={10} sx={{ padding: 3 }}>
        <Outlet />
      </Paper>
    </Box>
  );
};

export default IdentityLayout;
