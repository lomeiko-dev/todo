import React from "react";
import "./style.scss";
import { Box, Container, Divider } from "@mui/material";
import { ListProperties, TodoHead } from "../components";
import { ITodo } from "entities/todo/model";

interface IProps {
  todo: ITodo;
  children?: React.ReactNode
}

const TodoDetail: React.FC<IProps> = (props) => {
  const { todo, children } = props;

  console.log(todo)

  return (
    <Container maxWidth="sm">
      <Box marginTop="20px" display="flex" flexDirection="column">
        <TodoHead description={todo.description} title={todo.title} />
        <ListProperties isFullTags className={"foot"} deadline={todo.deadline} priority={todo.priority} tags={todo.tags} />
        <Divider />
      </Box>
      {children}
    </Container>
  );
};

export default TodoDetail;
