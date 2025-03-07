import { ISectionTodos, sectionAdded, sectionRemoved, sectionUpdated } from "entities/todo";
import { useAppDispatch } from "shared/lib/hooks";

interface IProps {
  onCloseFormChanged: () => void;
  onCloseFormCreated: () => void;
  onCloseFormRemoving?: () => void;
}

export const useCrudSection = (props?: IProps) => {
  const dispatch = useAppDispatch();

  const handleSectionRemoveConfirmation = (sectionId: string) => {
    dispatch(sectionRemoved(sectionId));
    props?.onCloseFormRemoving?.();
  };

  const handleSectionChanged = (id: string, changes: ISectionTodos) => {
    dispatch(sectionUpdated({ id, changes }));
    props?.onCloseFormChanged();
  };

  const handleAddedSection = (data: ISectionTodos) => {
    dispatch(sectionAdded(data));
    props?.onCloseFormCreated();
  };

  return {
    handleSectionRemoveConfirmation,
    handleSectionChanged,
    handleAddedSection,
  };
};
