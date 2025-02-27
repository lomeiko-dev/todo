import { Layout } from "widgets/layout";
import { ITodo, SectionItem, todoAdded, todoSelector } from "entities/todo";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks";
import { TodoList } from "widgets/todo-list";
import { TodoEdit } from "features/todo-form";

const HomePage = () => {
  const todos = useAppSelector(todoSelector.selectAll);
  const dispatch = useAppDispatch();

  const handleAddedTodo = (todo: ITodo) => {
    dispatch(todoAdded(todo));
  };
  return (
    <div>
      <Layout>
        <TodoEdit onAddedTodo={handleAddedTodo} />
        <SectionItem name="My tasks">
          <TodoList todos={todos} />
        </SectionItem>
        <SectionItem name="My tasks">
          <TodoList todos={todos} />
        </SectionItem>
        <SectionItem name="My tasks">
          <TodoList todos={todos} />
        </SectionItem>
      </Layout>
    </div>
  );
};

export default HomePage;
