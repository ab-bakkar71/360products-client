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

export interface ProductInput {
  _id?: string;


  title: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  category: string;
  location: string;
  image: string;
  userName:string;
  userEmail: string;
}

export interface ProductResponse {
  success: boolean;
  message: string;
  insertedId:string;
  data: ProductInput;
}


export interface User {
  id: string;
  name: string;
  email: string;
  image?: string | null;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  emailVerified: boolean;
}
