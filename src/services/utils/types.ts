export interface ILoginData {
  name: string;
  email: string;
  password: string;
}

export interface IRegisterData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface Todo {
  id: number;
  title: string;
}
