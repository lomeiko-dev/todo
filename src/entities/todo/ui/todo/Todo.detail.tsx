import React from "react";
import './style.scss'
import { Box, Checkbox, Container, Divider, Stack } from "@mui/material";
import { DateBox, PriorityBox } from "shared/ui/boxes";
import { TagList, TodoHead } from "../components";
import { ITodo } from "entities/todo/model";

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
            <DateBox date={todo.deadline.format('DD/MM/YYYY')} />
            <PriorityBox priority={todo.priority} />
            <TagList tags={todo.tags || []} />
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};
