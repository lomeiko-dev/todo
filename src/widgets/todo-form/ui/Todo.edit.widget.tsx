import React, { useState } from "react";
import classNames from "classnames";
import { Box, Button, Dialog, Typography } from "@mui/material";
import { SectionEdit, TodoEdit } from "features/todo-form";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks";
import { ITodo, todoAdded, todoSelector } from "entities/todo";
import { IDefaultComponentsProps } from "shared/types/props.types";
import AddIcon from "@mui/icons-material/Add";

interface IProps extends IDefaultComponentsProps {}

export const TodoEditWidget: React.FC<IProps> = (props) => {
  const { className, styleCSS } = props;

  const sections = useAppSelector(todoSelector.selectAll);
  const dispatch = useAppDispatch();

  const [showForm, setShow] = useState(false);

  const handleToggleForm = () => {
    setShow(!showForm);
  };

  const handleAddedTodo = (data: ITodo) => {
    dispatch(todoAdded({ idSection: "new-todo", data }));
  };

  return (
    <Box className={classNames(className)} sx={styleCSS}>
      <Button
        onClick={handleToggleForm}
        color="secondary"
        sx={{ height: "60px" }}
        size="large"
        fullWidth
        endIcon={<AddIcon />}
      >
        <Typography>section</Typography>
      </Button>
      {sections.length === 0 && <TodoEdit className="todo-edit-full-width" onAddedTodo={handleAddedTodo} />}
      <Dialog open={showForm} onClose={handleToggleForm}>
        <SectionEdit onAddedSection={() => null} />
      </Dialog>
    </Box>
  );
};
