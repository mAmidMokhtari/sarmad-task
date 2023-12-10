export interface ILoginData {
  name: string;
  password: string;
}

export interface IRegisterData {
  username: string;
  password: string;
  confirmPassword?: string;
}

export interface Todo {
  id: number;
  text: string;
}
