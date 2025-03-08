import React, { Children, cloneElement, useState } from "react";
import classNames from "classnames";
import { Box, Button, Dialog, List, ListItem, Snackbar, Typography } from "@mui/material";
import { SectionEdit } from "features/todo-form";
import { SnackbarAction } from "./Snackbar.action";
import { BaseActions } from "shared/components/actions";
import { TodoList } from "./Todo.list";
import { ISectionTodos, SectionItem } from "entities/todo";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { IHandlerCrud } from "widgets/todo-view/model/types/type";
import AddIcon from "@mui/icons-material/Add";

interface IProps extends IDefaultComponentsProps, IHandlerCrud<ISectionTodos, string> {
  sections: ISectionTodos[];
  children: React.ReactElement<React.ComponentProps<typeof TodoList>>;
}

export const SectionList: React.FC<IProps> = (props) => {
  const { sections, className, styleCSS, children, handleCreated, handleRemoved, handleUpdated } = props;

  const [confirmation, setConfirmation] = useState(false);
  const [changed, setChanged] = useState(false);
  const [showForm, setShow] = useState(false);

  const [selectSection, setSelectSection] = useState<ISectionTodos | null>(null);

  const handleToggleConfirmation = (section?: ISectionTodos) => {
    if (section) setSelectSection(section);
    setConfirmation(!confirmation);
  };

  const handleToggleChanged = (section?: ISectionTodos) => {
    if (section) setSelectSection(section);
    setChanged(!changed);
  };

  const handleToggleForm = () => {
    setShow(!showForm);
  };

  return (
    <Box className={classNames(className)} style={styleCSS}>
      <List>
        {sections.map((section) => (
          <ListItem key={section.id}>
            <SectionItem
              actionSlot={
                <BaseActions
                  onEdit={() => handleToggleChanged(section)}
                  onRemove={() => handleToggleConfirmation(section)}
                />
              }
              name={section.title}
            >
              {Children.map(children, (child) => {
                return cloneElement(child, { IdSection: section.id, todos: section.todos });
              })}
            </SectionItem>
          </ListItem>
        ))}
        
      </List>
      <Snackbar
        open={confirmation}
        onClose={() => setConfirmation(false)}
        message={`Do you really want to delete the partition ${selectSection?.title}?`}
        action={
          <SnackbarAction onClose={handleToggleConfirmation} onConfirm={() => handleRemoved(selectSection?.id || "")} />
        }
      />
      <Dialog open={changed} onClose={() => handleToggleChanged()}>
        <SectionEdit
          isChanged
          initialSection={selectSection || undefined}
          onAddedSection={(newSection) => handleUpdated(selectSection?.id || "", newSection)}
          onClose={handleToggleChanged}
        />
      </Dialog>
      <Button
        onClick={handleToggleForm}
        color="secondary"
        sx={{ height: "50px", marginTop: "30px" }}
        size="large"
        fullWidth
        endIcon={<AddIcon />}
        variant="outlined"
      >
        <Typography>section</Typography>
      </Button>
      <Dialog open={showForm} onClose={handleToggleForm}>
        <SectionEdit onClose={handleToggleForm} onAddedSection={handleCreated} />
      </Dialog>
    </Box>
  );
};
