import React from "react";
import classNames from "classnames";
import { Box } from "@mui/material";
import { TodoEdit } from "features/todo-form";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks";
import { ITodo, todoAdded, todoSelector } from "entities/todo";
import { IDefaultComponentsProps } from "shared/types/props.types";

interface IProps extends IDefaultComponentsProps {}

export const TodoEditWidget: React.FC<IProps> = (props) => {
  const { className, styleCSS } = props;

  const sections = useAppSelector(todoSelector.selectAll);
  const dispatch = useAppDispatch();

  const handleAddedTodo = (data: ITodo) => {
    dispatch(todoAdded({ idSection: "new-todo", data }));
  };

  return (
    <Box className={classNames(className)} sx={styleCSS}>
      {sections.length === 0 && <TodoEdit className="todo-edit-full-width" onAddedTodo={handleAddedTodo} />}
    </Box>
  );
};
