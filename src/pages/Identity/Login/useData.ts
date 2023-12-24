import { useState } from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";

import { HOME_ROUTE } from "../../../constants/routes";
import { loginMutateFn } from "../../../services/auth/loginMutationFn";
import { ILoginData } from "../../../services/utils/types";

export const useData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>();

  const navigate = useNavigate();

  const [loginError, setLoginError] = useState<Error>();

  const mutation = useMutation({
    mutationFn: loginMutateFn,
    onSuccess: (data) => {
      const token = data.token;
      localStorage.setItem("token", token);
      navigate(HOME_ROUTE);
    },
    onError: (err) => {
      setLoginError(err);
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
    localStorage.setItem("username", data.name);
    localStorage.setItem("email", data.email);
  });

  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
    loginError,
    isLoading: mutation.isPending,
  };
};
