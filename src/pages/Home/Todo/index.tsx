import { Box } from "@mui/material";

import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";

const Todo = () => {
  return (
    <Box width="100%" bgcolor="background.paper" boxShadow={10} p={2}>
      <AddTodo />
      <ListTodo />
    </Box>
  );
};

export default Todo;
