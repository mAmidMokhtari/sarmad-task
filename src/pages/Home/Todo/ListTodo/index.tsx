import {
  CheckBox,
  Close as CloseIcon,
  Create as CreateIcon,
} from "@mui/icons-material";
import {
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";

import { useData } from "../useData";

const ListTodo = () => {
  const data = useData();

  return (
    <List sx={{ marginTop: "1rem" }}>
      {data.isLoading && <LinearProgress />}
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
              <ListItemText sx={{ flex: "1 1 50%" }}>{todo.title}</ListItemText>
              <IconButton
                color="info"
                size="large"
                onClick={() => data.handleEditTodo(todo.id)}
                disabled={data.editTodoMutation.isPending}
              >
                <CreateIcon />
              </IconButton>
              <IconButton
                color="error"
                size="large"
                onClick={() => data.handleDeleteTodo(todo.id)}
                disabled={data.deleteTodoMutation.isPending}
              >
                <CloseIcon />
              </IconButton>
            </>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default ListTodo;
