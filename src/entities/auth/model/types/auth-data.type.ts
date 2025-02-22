interface IJWTTokens {
  accessToken: string;
  refreshToken: string;
}

export interface IAuthData {
  id?: string;
  email?: string;
  tokens?: IJWTTokens;
}
