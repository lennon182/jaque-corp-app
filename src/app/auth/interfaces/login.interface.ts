export interface ILogin {
  email: string;
  password: string;
}

export interface IUserAuth {
  email: string;
  password: string;
}

export interface IAuthResp {
  msg: string;
  ok: boolean;
  token?: string;
}
