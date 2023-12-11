import { useEffect, useState } from "react";

import { useMutation } from "@tanstack/react-query";

import { useTodo } from "../../../hooks/useTodo";
import { Todo } from "../../../services/utils/types";

export const useData = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState("");
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  const { data, error, isLoading, postTodo, deleteTodo, editTodo } = useTodo();

  useEffect(() => {
    data && setTodos(data.slice(0, 20));
  }, [data]);

  const addTodoMutation = useMutation({
    mutationFn: postTodo,
    onSuccess: (data: Todo) => {
      data && setTodos((prevState) => [data, ...prevState]);

      setInputText("");
    },
  });

  const editTodoMutation = useMutation({
    mutationFn: editTodo,
    onSuccess: (data) => {
      data.id &&
        setTodos((prevState) => {
          return prevState.map((todo) => {
            return todo.id === data.id
              ? { title: editingText, id: data.id }
              : todo;
          });
        });

      setEditingTodoId(null);
      setEditingText("");
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: (_, id) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    },
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() === "") {
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      title: inputText,
    };

    addTodoMutation.mutate(newTodo);
  };

  const handleDeleteTodo = (id: number) => {
    deleteTodoMutation.mutate(id);
  };

  const handleEditTodo = (id: number) => {
    const todoToEdit = todos?.find((todo) => todo.id === id);

    if (todoToEdit) {
      setEditingTodoId(id);
      setEditingText(todoToEdit.title);
    }
  };

  const handleUpdateTodo = () => {
    if (editingTodoId !== null) {
      const todo: Todo = { title: editingText, id: editingTodoId };

      editTodoMutation.mutate(todo);
    }
  };
  return {
    todos,
    error,
    isLoading,
    inputText,
    editingTodoId,
    editingText,
    editTodoMutation,
    addTodoMutation,
    deleteTodoMutation,
    setEditingText,
    handleInputChange,
    handleAddTodo,
    handleDeleteTodo,
    handleEditTodo,
    handleUpdateTodo,
  };
};
