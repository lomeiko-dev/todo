import { authApiReducer } from "features/auth";

export interface IStore {
  AuthApi: ReturnType<typeof authApiReducer>
}
