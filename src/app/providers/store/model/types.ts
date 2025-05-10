import { IAuthData } from "entities/auth";
import { authApiReducer } from "features/auth";

export interface IStore {
  AuthApi: ReturnType<typeof authApiReducer>
  AuthData: IAuthData
}
