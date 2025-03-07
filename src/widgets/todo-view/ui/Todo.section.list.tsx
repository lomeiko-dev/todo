import { useState } from "react";
import classNames from "classnames";
import { useCrudSection } from "../model/lib/hooks/useCrudSection";
import { useCrudTodo } from "../model/lib/hooks/useCrudTodo";
import { Box, Button, Dialog, List, ListItem, Snackbar, Typography } from "@mui/material";
import { TodoList } from "./Todo.list";
import { SectionEdit, TodoEdit } from "features/todo-form";
import { SnackbarAction } from "./components/Snackbar.action";
import { BaseActions } from "shared/components/actions";
import { ISectionTodos, SectionItem } from "entities/todo";
import { IDefaultComponentsProps } from "shared/types/props.types";
import AddIcon from "@mui/icons-material/Add";

interface IProps extends IDefaultComponentsProps {
  sections: ISectionTodos[];
}

export const TodoSectionList: React.FC<IProps> = (props) => {
  const { sections, className, styleCSS } = props;

  const [confirmation, setConfirmation] = useState(false);
  const [changed, setChanged] = useState(false);
  const [showForm, setShow] = useState(false);

  const handleToggleConfirmation = () => {
    setConfirmation(!confirmation);
  };

  const handleToggleChanged = () => {
    setChanged(!changed);
  };

  const handleToggleForm = () => {
    setShow(!showForm);
  };

  const { handleAddedSection, handleSectionChanged, handleSectionRemoveConfirmation } = useCrudSection({
    onCloseFormChanged: handleToggleChanged,
    onCloseFormCreated: handleToggleForm,
    onCloseFormRemoving: handleToggleConfirmation,
  });

  const {handleAddedTodo} = useCrudTodo('new-section')

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
              onClose={() => setConfirmation(false)}
              message="do you really want to delete the partition?"
              action={
                <SnackbarAction
                  onClose={(handleToggleConfirmation)}
                  onConfirm={() => handleSectionRemoveConfirmation(section.id)}
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
      <Button
        onClick={handleToggleForm}
        color="secondary"
        sx={{ height: "50px" }}
        size="large"
        fullWidth
        endIcon={<AddIcon />}
        variant="outlined"
      >
        <Typography>section</Typography>
      </Button>
      <Dialog open={showForm} onClose={handleToggleForm}>
        <SectionEdit onClose={handleToggleForm} onAddedSection={handleAddedSection} />
      </Dialog>
    </Box>
  );
};
