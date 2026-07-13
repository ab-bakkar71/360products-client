export interface RegisterInput {
  name: string;
  email: string;
  image: string;
  password: string;
}

export interface LoginInput {
  password: string;
  email: string;
}
