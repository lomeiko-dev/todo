import { useState } from "react";
import classNames from "classnames";
import { useAppDispatch } from "shared/lib/hooks";
import { Button, Divider, List, ListItem } from "@mui/material";
import { TodoEdit } from "features/todo-form";
import { BaseActions } from "shared/components/actions";
import { ITodo, todoAdded, TodoItem } from "entities/todo";
import { IDefaultComponentsProps } from "shared/types/props.types";
import AddIcon from "@mui/icons-material/Add";

interface IProps extends IDefaultComponentsProps {
  todos: ITodo[];
}

export const TodoList: React.FC<IProps> = (props) => {
  const { todos, className, styleCSS } = props;

  const dispatch = useAppDispatch();
  const [showForm, setShow] = useState(false);

  const toggleShowForm = () => {
    setShow(!showForm);
  };

  const handleAddedTodo = (data: ITodo) => {
    dispatch(todoAdded({ idSection: "new-todo", data }));
  };

  return (
    <List className={classNames(className)} sx={styleCSS}>
      {todos.map((todo) => (
        <ListItem>
          <TodoItem actionSlot={<BaseActions onEdit={() => null} onRemove={() => null}/>} todo={todo} />
        </ListItem>
      ))}
      {showForm ? (
        <TodoEdit onAddedTodo={handleAddedTodo} />
      ) : (
        <Button onClick={toggleShowForm} fullWidth>
          <AddIcon />
        </Button>
      )}
      <Divider />
    </List>
  );
};
