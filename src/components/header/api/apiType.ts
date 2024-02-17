export type ResponsrType<T> = {
  data: T;
  messages: string[];
  fieldsErrors: string[];
  resultCode: number;
};

export type AuthResponseType = {
  id: number;
  login: string;
  email: string;
};
