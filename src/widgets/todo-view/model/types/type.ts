export interface IHandlerCrud<T, K extends string | number> {
  handleCreated: (data: T) => void;
  handleUpdated: (id: K, data: T) => void;
  handleRemoved: (id: K) => void;
}

type IHandlerCrudWithExtraArg<T, K extends string | number, A> = {
  [P in keyof IHandlerCrud<T, K>]: (section: A, ...args: Parameters<IHandlerCrud<T, K>[P]>) => void;
};
export interface IHandlerCrudTodo<T, K extends string | number, A> extends IHandlerCrudWithExtraArg<T, K, A> {
  handleToggleChecked: (section: A, id: K) => void;
}
