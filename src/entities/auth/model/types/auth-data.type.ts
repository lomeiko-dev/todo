export interface IJWTTokens {
    accessToken: string;
    refreshToken: string;
}

export interface IAuthData {
    isAuth: boolean;
    id?: string;
    login?: string
    tokens?: IJWTTokens;
}