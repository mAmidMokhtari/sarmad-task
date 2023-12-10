import { useState } from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";

import { loginMutateFn } from "../../../services/auth/loginMutationFn";
import { ILoginData } from "../../../services/utils/types";

export const useData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILoginData>();

  const navigate = useNavigate();

  const [loginError, setLoginError] = useState<Error>();

  const mutation = useMutation({
    mutationFn: loginMutateFn,
    onSuccess: () => {
      navigate("/");
    },
    onError: (err) => {
      setLoginError(err);
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    loginError,
  };
};

// export async function loginAction({ request }: { request: any }) {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);
//   const response = await http.post("/users", data);
//   if (response.status === 200) {
//     localStorage.setItem("token", response?.data.token);
//     return redirect(HOME_ROUTE);
//   }
// }
