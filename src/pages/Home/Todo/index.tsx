import {
  Add as AddIcon,
  CheckBox,
  Close as CloseIcon,
  Create as CreateIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";

import { useData } from "./useData";

const Todo = () => {
  const data = useData();

  return (
    <Box width="100%" bgcolor="background.paper" boxShadow={10} p={2}>
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
        <Button
          variant="contained"
          color="success"
          size="large"
          onClick={data.handleAddTodo}
        >
          <AddIcon />
        </Button>
      </Box>
      <List sx={{ marginTop: "1rem" }}>
        {data.todos?.map((todo) => (
          <ListItem
            key={todo.id}
            sx={{
              my: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "0.5rem",
              backgroundColor: "lightblue",
              boxShadow: 4,
              p: 2,
            }}
          >
            {data.editingTodoId === todo.id ? (
              <>
                <TextField
                  type="text"
                  value={data.editingText}
                  onChange={(event) => data.setEditingText(event.target.value)}
                  variant="outlined"
                  fullWidth
                  sx={{ marginRight: "1rem" }}
                />
                <IconButton
                  color="primary"
                  size="large"
                  onClick={data.handleUpdateTodo}
                >
                  <CheckBox />
                </IconButton>
              </>
            ) : (
              <>
                <ListItemText sx={{ flex: "1 1 50%" }}>
                  {todo.title}
                </ListItemText>
                <IconButton
                  color="info"
                  size="large"
                  onClick={() => data.handleEditTodo(todo.id)}
                >
                  <CreateIcon />
                </IconButton>
                <IconButton
                  color="error"
                  size="large"
                  onClick={() => data.handleDeleteTodo(todo.id)}
                >
                  <CloseIcon />
                </IconButton>
              </>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Todo;
