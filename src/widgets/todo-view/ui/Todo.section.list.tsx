import classNames from "classnames";
import { Dialog, List, ListItem, Snackbar } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { ISectionTodos, SectionItem, sectionRemoved, sectionUpdated } from "entities/todo";
import { TodoList } from "./Todo.list";
import { BaseActions } from "shared/components/actions";
import { useState } from "react";
import { useAppDispatch } from "shared/lib/hooks";
import { SnackbarAction } from "./components/SnackBar.action";
import { SectionEdit } from "features/todo-form";

interface IProps extends IDefaultComponentsProps {
  sections: ISectionTodos[];
}

export const TodoSectionList: React.FC<IProps> = (props) => {
  const { sections, className, styleCSS } = props;

  const dispatch = useAppDispatch();
  const [confirmation, setConfirmation] = useState(false);
  const [changed, setChanged] = useState(false);

  const handleToggleConfirmation = () => {
    setConfirmation(!confirmation);
  };

  const handleToggleChanged = () => {
    setChanged(!changed);
  };

  const hanldeSectionRemoveConfirmation = (sectionId: string) => {
    dispatch(sectionRemoved(sectionId));
    setConfirmation(false);
  };

  const handleSectionChanged = (id: string, changes: ISectionTodos) => {
    dispatch(sectionUpdated({ id, changes }));
    handleToggleChanged()
  };

  return (
    <List className={classNames(className)} style={styleCSS}>
      {sections.map((section) => (
        <ListItem>
          <SectionItem
            actionSlot={<BaseActions onEdit={handleToggleChanged} onRemove={handleToggleConfirmation} />}
            name={section.title}
          >
            <TodoList idSection={section.id} todos={section.todos} />
          </SectionItem>
          <Snackbar
            open={confirmation}
            onClose={handleToggleConfirmation}
            message="do you really want to delete the partition?"
            action={
              <SnackbarAction
                onClose={handleToggleConfirmation}
                onConfirm={() => hanldeSectionRemoveConfirmation(section.id)}
              />
            }
          />
          <Dialog open={changed} onClose={handleToggleChanged}>
            <SectionEdit
              isChanged
              initialSection={{ name: section.title }}
              onAddedSection={(newSection) => handleSectionChanged(section.id, newSection)}
              onClose={handleToggleChanged}
            />
          </Dialog>
        </ListItem>
      ))}
    </List>
  );
};
