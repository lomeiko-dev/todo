import classNames from "classnames";
import { Box, Dialog, List, ListItem, Snackbar } from "@mui/material";
import { TodoList } from "./Todo.list";
import { useState } from "react";
import { useAppDispatch } from "shared/lib/hooks";
import { SectionEdit, TodoEdit } from "features/todo-form";
import { SnackbarAction } from "./components/Snackbar.action";
import { BaseActions } from "shared/components/actions";
import { ISectionTodos, ITodo, SectionItem, sectionRemoved, sectionUpdated, todoAdded } from "entities/todo";
import { IDefaultComponentsProps } from "shared/types/props.types";

interface IProps extends IDefaultComponentsProps {
  sections: ISectionTodos[];
}

export const TodoSectionList: React.FC<IProps> = (props) => {
  const { sections, className, styleCSS } = props;

  const dispatch = useAppDispatch();
  const [confirmation, setConfirmation] = useState(false);
  const [changed, setChanged] = useState(false);

  const handleAddedTodo = (data: ITodo, idSection?: string) => {
    dispatch(todoAdded({ idSection: idSection === undefined ? "new-todo" : idSection, data }));
  };

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
    handleToggleChanged();
  };

  return (
    <Box className={classNames(className)} style={styleCSS}>
      {sections.length === 0 && <TodoEdit className="todo-edit-full-width" onAddedTodo={handleAddedTodo} />}
      <List>
        {sections.map((section) => (
          <ListItem key={section.id}>
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
    </Box>
  );
};
