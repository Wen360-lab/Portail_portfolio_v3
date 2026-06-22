export type User = {
  id: number;
  email: string;
  password: string;
  firstname?: string;
  lastname: string;
};

export const users: User[] = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123456",
    lastname: "Admin",
  },
  {
    id: 2,
    email: "john@gmail.com",
    password: "password",
    lastname: "Doe",
    firstname: "Jhone"
  },
];