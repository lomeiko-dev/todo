import { useState } from "react";
import classNames from "classnames";
import { useAppDispatch } from "shared/lib/hooks";
import { Button, Dialog, Divider, List, ListItem } from "@mui/material";
import { TodoEdit } from "features/todo-form";
import { BaseActions } from "shared/components/actions";
import { ITodo, todoAdded, TodoDetail, TodoItem, todoRemoved, todoToggleChecked, todoUpdated } from "entities/todo";
import { IDefaultComponentsProps } from "shared/types/props.types";
import AddIcon from "@mui/icons-material/Add";

interface IProps extends IDefaultComponentsProps {
  idSection?: string;
  todos: ITodo[];
}

export const TodoList: React.FC<IProps> = (props) => {
  const { todos, className, styleCSS, idSection = "new-todo" } = props;

  const dispatch = useAppDispatch();
  const [showForm, setShow] = useState(false);
  const [showTodo, setShowTodo] = useState(false);
  const [isChanged, setChange] = useState(false);

  const toggleShowTodo = () => {
    setShowTodo(!showTodo);
  }

  const toggleShowForm = () => {
    setShow(!showForm);
  };

  const toggleChanged = () => {
    setChange(!isChanged);
  };

  const handleAddedTodo = (data: ITodo) => {
    dispatch(todoAdded({ idSection, data }));
    toggleShowForm();
  };

  const handleUpdateTodo = (idTodo: string, newData: ITodo) => {
    dispatch(todoUpdated({ idSection, idTodo, newData }));
    toggleChanged();
  };

  const handleTodoRemoved = (idTodo: string) => {
    dispatch(todoRemoved({ idSection, idTodo }));
  };

  const handleTodoChecked = (id: string) => {
    dispatch(todoToggleChecked({ idSection, id }));
  };

  return (
    <List className={classNames(className)} sx={styleCSS}>
      {todos.map((todo) => (
        <ListItem>
          <TodoItem
            onClick={toggleShowTodo}
            onChecked={() => handleTodoChecked(todo.id)}
            actionSlot={<BaseActions onEdit={toggleChanged} onRemove={() => handleTodoRemoved(todo.id)} />}
            todo={todo}
          />
          <Dialog sx={{ "& .MuiDialog-paper": { width: "100%" } }} open={showTodo} onClose={toggleShowTodo}>
            <TodoDetail todo={todo}/>
          </Dialog>
          <Dialog sx={{ "& .MuiDialog-paper": { width: "100%" } }} open={isChanged} onClose={toggleChanged}>
            <TodoEdit
              isChenged
              isFullForm={true}
              initialTodo={todo}
              onAddedTodo={(data) => handleUpdateTodo(todo.id, data)}
            />
          </Dialog>
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
