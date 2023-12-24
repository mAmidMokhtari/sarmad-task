import { FC } from "react";

import { Add as AddIcon } from "@mui/icons-material";
import { Box, CircularProgress, IconButton, TextField } from "@mui/material";

import { IProps } from "./type";

const AddTodo: FC<IProps> = ({ data }) => {
  return (
    <Box display="flex" alignItems="center" mt={2}>
      <TextField
        type="text"
        value={data.inputText}
        onChange={data.handleInputChange}
        placeholder="Please insert note..."
        variant="outlined"
        fullWidth
        sx={{ marginRight: "1rem" }}
      />
      <IconButton
        color="success"
        size="large"
        onClick={data.handleAddTodo}
        disabled={data.addTodoMutation.isPending}
      >
        {data.addTodoMutation.isPending ? (
          <CircularProgress size="1.5rem" />
        ) : (
          <AddIcon />
        )}
      </IconButton>
    </Box>
  );
};

export default AddTodo;
