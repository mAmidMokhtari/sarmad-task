import { UseMutationResult } from "@tanstack/react-query";

import { Todo } from "../../../../services/utils/types";

export interface IProps {
  data: {
    isLoading: boolean;
    todos: Todo[];
    editingTodoId: number | null;
    editingText: string;
    setEditingText: (value: string) => void;
    handleUpdateTodo: () => void;
    handleEditTodo: (id: number) => void;
    handleDeleteTodo: (id: number) => void;
    deleteTodoMutation: UseMutationResult<
      {
        id: number;
      },
      Error,
      number,
      unknown
    >;
    editTodoMutation: UseMutationResult<
      {
        id: number;
      },
      Error,
      Todo,
      unknown
    >;
  };
}
