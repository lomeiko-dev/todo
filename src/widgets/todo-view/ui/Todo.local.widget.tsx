import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector, useObserver } from "shared/lib/hooks";
import { useLocalCrudSection } from "../model/lib/hooks/local/useLocalCrudSection";
import { useLocalCrudTodo } from "../model/lib/hooks/local/useLocalCrudTodo";
import { SectionList } from "./components/Section.list";
import { loadFromLocalStorage, saveToLocalStorage, todoSelector } from "entities/todo";
import { TodoList } from "./components/Todo.list";
import { TodoWrap } from "./components/Todo.wrap";

export const TodoLocalWidget = () => {
  const crudSection = useLocalCrudSection();
  const crudTodo = useLocalCrudTodo();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const eventUnload = () => {
      dispatch(saveToLocalStorage());
    };

    dispatch(loadFromLocalStorage());
    window.addEventListener("unload", eventUnload);
  }, []);

  const todo = useAppSelector(todoSelector.selectAll);

  return (
    <TodoWrap onAddedTodo={crudTodo.handleCreated}>
      <SectionList sections={todo} {...crudSection}>
        <TodoList todos={[]} IdSection="0" {...crudTodo} />
      </SectionList>
    </TodoWrap>
  );
};
