import { ITodo, todoAdded, todoRemoved, todoToggleChecked, todoUpdated } from "entities/todo";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks";
import { IHandlerCrudTodo } from "widgets/todo-view/model/types/type";


// Определите ваш хук
export function useLocalCrudTodo(): IHandlerCrudTodo<ITodo, string, string>{
  const dispatch = useAppDispatch();

  const handleAddedTodo = useCallback((idSection: string, data: ITodo) => {
    dispatch(todoAdded({ idSection, data }));
  }, []);

  const handleUpdateTodo = useCallback((idSection: string, idTodo: string, newData: ITodo) => {
    dispatch(todoUpdated({ idSection, idTodo, newData }));
  }, []);

  const handleTodoRemoved = useCallback((idSection: string, idTodo: string) => {
    dispatch(todoRemoved({ idSection, idTodo }));
  }, []);

  const handleTodoChecked = useCallback((idSection: string, id: string) => {
    dispatch(todoToggleChecked({ idSection, id }));
  }, []);

  return {
    handleCreated: handleAddedTodo,
    handleUpdated: handleUpdateTodo,
    handleRemoved: handleTodoRemoved,
    handleToggleChecked: handleTodoChecked,
  };
};
