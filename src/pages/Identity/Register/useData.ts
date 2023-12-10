import { useState } from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";

import { HOME_ROUTE } from "../../../constants/routes";
import { registerMutateFn } from "../../../services/auth/registerMutateFn";
import { IRegisterData } from "../../../services/utils/types";

export const useData = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<IRegisterData>();

  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState<Error>();

  const mutation = useMutation({
    mutationFn: registerMutateFn,
    onSuccess: () => {
      navigate(HOME_ROUTE);
    },
    onError: (err) => {
      setRegisterError(err);
    },
  });

  const onSubmit = handleSubmit((data) => {
    const { confirmPassword, ...userData } = data;
    mutation.mutate(userData);
    console.log(confirmPassword);
  });

  return {
    isSubmitting,
    onSubmit,
    errors,
    watch,
    register,
    registerError,
  };
};
