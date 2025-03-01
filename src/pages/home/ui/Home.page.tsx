import { Layout } from "widgets/layout";
import "./style.scss";
import { todoSelector } from "entities/todo";
import { useAppSelector } from "shared/lib/hooks";
import { TodoSectionList } from "widgets/todo-view";
import { TodoEditWidget } from "widgets/todo-form";
import { SectionEditWidget } from "widgets/section-form";

const HomePage = () => {
  const sections = useAppSelector(todoSelector.selectAll);

  return (
    <Layout>
      <SectionEditWidget/>
      <TodoEditWidget />
      <TodoSectionList sections={sections} />
    </Layout>
  );
};

export default HomePage;
