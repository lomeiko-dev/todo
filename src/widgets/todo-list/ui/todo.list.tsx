import classNames from "classnames";
import { useAppDispatch } from "shared/lib/hooks";
import { List, ListItem } from "@mui/material";
import { TodoMenu } from "features/todo-form";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { ITodo, TodoItem, todoRemove } from "entities/todo";

interface IProps extends IDefaultComponentsProps {
  todos: ITodo[];
}

export const TodoList: React.FC<IProps> = (props) => {
  const { todos, className, styleCSS } = props;

  const dispatch = useAppDispatch();

  const handleTodoRemove = (id: string) => {
    dispatch(todoRemove(id))
  };

  return (
    <List className={classNames(className)} style={styleCSS}>
      {todos.map((item) => (
        <ListItem>
          <TodoItem
            todo={item}
            menuSlot={
              <TodoMenu onEdit={() => null} onArchive={() => null} onRemove={() => handleTodoRemove(item.id)} />
            }
          />
        </ListItem>
      ))}
    </List>
  );
};
