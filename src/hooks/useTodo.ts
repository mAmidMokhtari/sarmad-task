import { useQuery } from "@tanstack/react-query";

import { http } from "../providers/api/http";
import { Todo } from "../services/utils/types";

const getTodos = () => http.get("/todos").then((res) => res.data);

const postTodo = (newTodo: Todo): Promise<Todo> =>
  http.post("/todos", newTodo).then((res) => res.data);

const deleteTodo = (id: number): Promise<{ id: number }> =>
  http.delete(`/todos/${id}`).then((res) => res.data);

const editTodo = (todo: Todo): Promise<{ id: number }> =>
  http.put(`/todos/${todo.id}`).then((res) => res.data);

export const useTodo = () => {
  const { isLoading, error, data } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  return {
    isLoading,
    error,
    data,
    deleteTodo,
    postTodo,
    editTodo,
  };
};
