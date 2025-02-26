import { useState } from "react";
import classNames from "classnames";
import "./style.scss";
import { Box, Checkbox, Divider, Paper } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { ITodo } from "../model/types/types";
import { TodoHead } from "./components/TodoHead";
import { ListProperties } from "./components";

interface IProps extends IDefaultComponentsProps {
  todo: ITodo;
}

export const TodoItem: React.FC<IProps> = (props) => {
  const { todo, className, styleCSS } = props;

  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  return (
    <Paper
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      className={classNames(className, "todo-item")}
      style={styleCSS}
      elevation={hover ? 12 : 4}
    >
      <Checkbox className="todo-checkbox" />
      <Box className='todo-item-content'>
        <TodoHead lineClamp={2} description={todo.description} title={todo.title} />
        <Divider />
        <ListProperties className="foot" deadline={todo.deadline} priority={todo.priority} tags={todo.tags} />
      </Box>
    </Paper>
  );
};
