import { useState } from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";

import { HOME_ROUTE } from "../../../constants/routes";
import { registerMutateFn } from "../../../services/auth/registerMutateFn";
import { IRegisterData } from "../../../services/utils/types";

const RegisterSchema = yup.object().shape({
  name: yup.string().required("name is required"),
  email: yup.string().email("email is invalid").required(" email is required"),
  password: yup.string().required("Password is required"),
  password_confirmation: yup
    .string()
    .required("Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export const useData = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IRegisterData>({
    resolver: yupResolver(RegisterSchema),
  });

  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState<Error>();

  const mutation = useMutation({
    mutationFn: registerMutateFn,
    onSuccess: (data) => {
      const token = data.token;
      localStorage.setItem("token", token);
      navigate(HOME_ROUTE);
    },
    onError: (err) => {
      setRegisterError(err);
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
    localStorage.setItem("username", data.name);
    localStorage.setItem("email", data.email);
  });

  return {
    onSubmit,
    errors,
    watch,
    register,
    registerError,
    isLoading: mutation.isPending,
  };
};
