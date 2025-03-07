import { ITodo, todoAdded, todoRemoved, todoToggleChecked, todoUpdated } from "entities/todo";
import { useAppDispatch } from "shared/lib/hooks";

interface IProps {
  onCloseFormChanged: () => void;
  onCloseFormCreated: () => void;
  onCloseFormRemoving?: () => void;
}

export const useCrudTodo = (idSection: string, props?: IProps) => {
  const dispatch = useAppDispatch();

  const handleAddedTodo = (data: ITodo) => {
    dispatch(todoAdded({ idSection, data }));
    props?.onCloseFormCreated();
  };

  const handleUpdateTodo = (idTodo: string, newData: ITodo) => {
    dispatch(todoUpdated({ idSection, idTodo, newData }));
    props?.onCloseFormChanged();
  };

  const handleTodoRemoved = (idTodo: string) => {
    dispatch(todoRemoved({ idSection, idTodo }));
    props?.onCloseFormRemoving?.();
  };

  const handleTodoChecked = (id: string) => {
    dispatch(todoToggleChecked({ idSection, id }));
  };

  return {
    handleAddedTodo,
    handleUpdateTodo,
    handleTodoRemoved,
    handleTodoChecked,
  };
};
