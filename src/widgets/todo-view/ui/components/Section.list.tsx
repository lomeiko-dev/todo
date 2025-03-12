import React, { Children, cloneElement, useState } from "react";
import "../style.scss";
import classNames from "classnames";
import { Box, Button, Dialog, List, ListItem, Snackbar, Typography } from "@mui/material";
import { SectionEdit } from "features/todo-form";
import { SnackbarAction } from "./Snackbar.action";
import { BaseActions } from "shared/components/actions";
import { TodoList } from "./Todo.list";
import { ISectionTodos, SectionBlock, SectionItem } from "entities/todo";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { IHandlerCrud } from "widgets/todo-view/model/types/type";
import AddIcon from "@mui/icons-material/Add";
import { useAppSelector } from "shared/lib/hooks";
import { typeViewTodoSelector } from "features/view-toggle/model/slice/view-todo.selectors";
interface IProps extends IDefaultComponentsProps, IHandlerCrud<ISectionTodos, string> {
  sections: ISectionTodos[];
  children: React.ReactElement<React.ComponentProps<typeof TodoList>>;
}

export const SectionList: React.FC<IProps> = (props) => {
  const { sections, className, styleCSS, children, handleCreated, handleRemoved, handleUpdated } = props;

  const getSection = (Element: React.ElementType, children: React.ReactNode, props: any) => (
    <Element {...props}>{children}</Element>
  );

  const [confirmation, setConfirmation] = useState(false);
  const [changed, setChanged] = useState(false);
  const [showForm, setShow] = useState(false);

  const [selectSection, setSelectSection] = useState<ISectionTodos | null>(null);
  const typeView = useAppSelector(typeViewTodoSelector);

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

  const mods = {
    ["board"]: typeView === "board",
  };

  return (
    <Box className={classNames(className)} style={styleCSS}>
      <List className={classNames("section-list", mods)}>
        {sections.map((section) => (
          <ListItem className="item" key={section.id}>
            {getSection(
              typeView === 'board' ? SectionBlock : SectionItem,
              Children.map(children, (child) => {
                return cloneElement(child, { IdSection: section.id, todos: section.todos });
              }),
              {
                actionSlot: (
                  <BaseActions
                    onEdit={() => handleToggleChanged(section)}
                    onRemove={() => handleToggleConfirmation(section)}
                  />
                ),
                name: section.title,
              }
            )}
          </ListItem>
        ))}
        <Button
          onClick={handleToggleForm}
          color="secondary"
          className="button-added"
          size="large"
          fullWidth
          endIcon={<AddIcon />}
          variant="outlined"
        >
          <Typography>section</Typography>
        </Button>
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
      <Dialog open={showForm} onClose={handleToggleForm}>
        <SectionEdit onClose={handleToggleForm} onAddedSection={handleCreated} />
      </Dialog>
    </Box>
  );
};
