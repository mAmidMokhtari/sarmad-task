import { FC } from "react";

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

import { IProps } from "./type";

const ListTodo: FC<IProps> = ({
  data: {
    isLoading,
    todos,
    editingTodoId,
    editingText,
    setEditingText,
    handleUpdateTodo,
    handleEditTodo,
    editTodoMutation,
    handleDeleteTodo,
    deleteTodoMutation,
  },
}) => {
  return (
    <List sx={{ marginTop: "1rem" }}>
      {isLoading && <LinearProgress />}
      {todos?.map((todo) => (
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
          {editingTodoId === todo.id ? (
            <>
              <TextField
                type="text"
                value={editingText}
                onChange={(event) => setEditingText(event.target.value)}
                variant="outlined"
                fullWidth
                sx={{ marginRight: "1rem" }}
              />
              <IconButton
                color="primary"
                size="large"
                onClick={handleUpdateTodo}
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
                onClick={() => handleEditTodo(todo.id)}
                disabled={editTodoMutation.isPending}
              >
                <CreateIcon />
              </IconButton>
              <IconButton
                color="error"
                size="large"
                onClick={() => handleDeleteTodo(todo.id)}
                disabled={deleteTodoMutation.isPending}
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
