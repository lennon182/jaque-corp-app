export interface IResUsers {
  users: IUser[];
}

export interface IUser {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  image: string;
}
