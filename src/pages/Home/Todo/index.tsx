import { Box } from "@mui/material";

import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";
import { useData } from "./useData";

const Todo = () => {
  const data = useData();

  return (
    <Box width="100%" bgcolor="background.paper" boxShadow={10} p={2}>
      <AddTodo data={data} />
      <ListTodo data={data} />
    </Box>
  );
};

export default Todo;
