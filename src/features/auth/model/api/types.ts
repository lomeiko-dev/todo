export type typeLoginBody = Required<Pick<IFormSignUp, "email" | "password" | "rememberMe">>;

export type typeRegisterBody = Required<IFormSignUp>