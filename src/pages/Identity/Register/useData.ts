import { useState } from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";

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
      navigate("/");
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

// export async function registerAction({ request }: { request: any }) {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);
//   const response = await http.post("/users/{id}", data);
//   return response.status === 200;
// }
