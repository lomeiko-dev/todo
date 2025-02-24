import { Box, Checkbox, Divider, Paper, Typography } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { ITodo } from "../model/types/types";
import "./style.scss";
import classNames from "classnames";

import { TagList } from "./components/TagList";
import { PriorityBox } from "./components/PriorityBox";
import { DateBox } from "shared/ui/Boxes";
import { useState } from "react";
import { TodoHead } from "./components/TodoHead";

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
      className={classNames(className, "paper")}
      style={styleCSS}
      elevation={hover ? 12 : 4}
    >
      <Box display="flex">
        <Checkbox sx={{ marginBottom: "auto" }} />
        <TodoHead lineClamp={2} description={todo.description} title={todo.title} />
      </Box>
      <Divider />
      <Box className={"foot"}>
        <DateBox date={todo.deadline} />
        <PriorityBox priority={todo.priority} />
        <TagList tags={todo.tags || []} />
      </Box>
    </Paper>
  );
};
