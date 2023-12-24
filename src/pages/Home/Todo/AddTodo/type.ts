import { ChangeEvent } from "react";

import { UseMutationResult } from "@tanstack/react-query";

import { Todo } from "../../../../services/utils/types";

export interface IProps {
  data: {
    inputText: string;
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleAddTodo: () => void;
    addTodoMutation: UseMutationResult<Todo, Error, Todo, unknown>;
  };
}
