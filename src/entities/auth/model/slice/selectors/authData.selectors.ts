import { IStore } from "app/providers/store";

export const authDataIdSelector = (state: IStore) => state.AuthData.id;
export const authDataEmailSelector = (state: IStore) => state.AuthData.email;
export const authDataTokensSelector = (state: IStore) => state.AuthData.tokens;
