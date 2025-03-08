import React, { useState } from "react";
import classNames from "classnames";
import { Button, Dialog, Divider, List, ListItem } from "@mui/material";
import { TodoEdit } from "features/todo-form";
import { BaseActions } from "shared/components/actions";
import { ITodo, TodoDetail, TodoItem } from "entities/todo";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { IHandlerCrudTodo } from "../../model/types/type";
import AddIcon from "@mui/icons-material/Add";

interface IProps extends IDefaultComponentsProps, IHandlerCrudTodo<ITodo, string, string> {
  IdSection: string;
  todos: ITodo[];
  children?: React.ReactNode;
}

export const TodoList: React.FC<IProps> = React.memo((props) => {
  const {
    todos,
    className,
    styleCSS,
    children,
    handleCreated,
    handleRemoved,
    handleToggleChecked,
    handleUpdated,
    IdSection,
  } = props;

  const [showForm, setShow] = useState(false);
  const [showTodo, setShowTodo] = useState(false);
  const [isChanged, setChange] = useState(false);

  const toggleShowTodo = () => {
    setShowTodo(!showTodo);
  };

  const toggleShowForm = () => {
    setShow(!showForm);
  };

  const toggleChanged = () => {
    setChange(!isChanged);
  };

  const handleUpdateTodoWithCloseForm = (id: string, data: ITodo) => {
    handleUpdated(IdSection, id, data);
    toggleChanged();
  };

  return (
    <List className={classNames(className)} sx={styleCSS}>
      {todos.map((todo) => (
        <ListItem>
          <TodoItem
            onClick={toggleShowTodo}
            onChecked={(id) => handleToggleChecked(IdSection, id)}
            actionSlot={<BaseActions onRemove={() => handleRemoved(IdSection, todo.id)} onEdit={toggleChanged} />}
            todo={todo}
          />
          <Dialog sx={{ "& .MuiDialog-paper": { width: "100%" } }} open={showTodo} onClose={toggleShowTodo}>
            <TodoDetail todo={todo} />
          </Dialog>
          <Dialog sx={{ "& .MuiDialog-paper": { width: "100%" } }} open={isChanged} onClose={toggleChanged}>
            <TodoEdit
              isChenged
              isFullForm={true}
              initialTodo={todo}
              onAddedTodo={(data) => handleUpdateTodoWithCloseForm(todo.id, data)}
              onBack={toggleChanged}
            />
          </Dialog>
        </ListItem>
      ))}

      {children}

      {showForm ? (
        <TodoEdit onBack={toggleShowForm} onAddedTodo={(data) => handleCreated(IdSection, data)} />
      ) : (
        <Button onClick={toggleShowForm} fullWidth>
          <AddIcon />
        </Button>
      )}

      <Divider />
    </List>
  );
});
