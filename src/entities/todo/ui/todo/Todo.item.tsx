import { useState } from "react";
import classNames from "classnames";
import "./style.scss";
import { Box, Checkbox, Divider, Paper } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { ListProperties, TodoHead } from "../components";
import { ITodo } from "entities/todo/model";

interface IProps extends IDefaultComponentsProps {
  todo: ITodo;
  onChecked: () => void;
  onClick: () => void;
  actionSlot?: React.ReactNode;
}

export const TodoItem: React.FC<IProps> = (props) => {
  const { todo, className, styleCSS, actionSlot, onChecked, onClick } = props;

  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  const mods = {
    ["todo-item-complete"]: todo.isCompleted,
  };

  return (
    <Paper
      onClick={onClick}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      className={classNames(className, "todo-item", mods)}
      style={styleCSS}
      elevation={hover ? 12 : 4}
    >
      <Box className="todo-item-content">
        <Box className="todo-item-content-inner">
          <Box className="todo-item-content-left">
            <Checkbox checked={todo.isCompleted} className="todo-checkbox" onChange={onChecked} />
            <TodoHead isCross={todo.isCompleted} lineClamp={2} description={todo.description} title={todo.title} />
          </Box>
          {hover ? <div className="todo-item-menu-slot">{actionSlot}</div> : null}
        </Box>
        <Divider />
        <ListProperties className="foot" deadline={todo.deadline} priority={todo.priority} tags={todo.tags} />
      </Box>
    </Paper>
  );
};
