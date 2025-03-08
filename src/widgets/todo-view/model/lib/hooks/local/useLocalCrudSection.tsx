import { ISectionTodos, sectionAdded, sectionRemoved, sectionUpdated } from "entities/todo";
import { useAppDispatch } from "shared/lib/hooks";
import { IHandlerCrud } from "widgets/todo-view/model/types/type";

export const useLocalCrudSection = (): IHandlerCrud<ISectionTodos, string> => {
  const dispatch = useAppDispatch();

  const handleSectionRemoved = (sectionId: string) => {
    dispatch(sectionRemoved(sectionId));
  };

  const handleSectionChanged = (id: string, changes: ISectionTodos) => {
    dispatch(sectionUpdated({ id, changes }));
  };

  const handleSectionAdded = (data: ISectionTodos) => {
    dispatch(sectionAdded(data));
  };

  return {
    handleCreated: handleSectionAdded,
    handleRemoved: handleSectionRemoved,
    handleUpdated: handleSectionChanged
  };
};
