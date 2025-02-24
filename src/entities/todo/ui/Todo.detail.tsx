import { Box, Checkbox, Container, Divider, Stack } from "@mui/material";
import { TodoHead } from "./components/TodoHead";
import { DateBox } from "shared/ui/Boxes";
import { TagList } from "./components/TagList";
import { ITodo } from "../model/types/types";
import React from "react";
import { PriorityBox } from "./components/PriorityBox";
import './style.scss'

interface IProps {
  todo: ITodo;
}

export const TodoDetail: React.FC<IProps> = (props) => {
  const { todo } = props;

  return (
    <Container maxWidth='lg'>
      <Stack display="flex" flexDirection="row">
        <Checkbox sx={{ marginBottom: "auto" }} />
        <Box marginTop="5px" display="flex" flexDirection="column">
          <TodoHead description={todo.description} title={todo.title} />
          <Divider />
          <Box className={"foot"}>
            <DateBox date={todo.deadline} />
            <PriorityBox priority={todo.priority} />
            <TagList tags={todo.tags || []} />
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};
