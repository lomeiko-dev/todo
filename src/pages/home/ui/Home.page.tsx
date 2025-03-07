import { Layout } from "widgets/layout";
import "./style.scss";
import { loadFromLocalStorage, saveToLocalStorage, todoSelector } from "entities/todo";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks";
import { TodoSectionList, TodoViewActions } from "widgets/todo-view";
import { SectionEditWidget } from "widgets/section-form";
import { useEffect } from "react";
import { Page } from "shared/ui/page";
import { RoutePath } from "shared/config/route";

const HomePage = () => {
  const sections = useAppSelector(todoSelector.selectAll);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const eventUnload = () => {
      dispatch(saveToLocalStorage());
    };

    dispatch(loadFromLocalStorage());
    window.addEventListener("unload", eventUnload);

    return () => {
      window.removeEventListener("unload", eventUnload);
    };
  }, []);

  return (
    <Layout>
      <Page namePage={RoutePath.home.pageName}>
        <TodoViewActions styleCSS={{ marginTop: "15px" }} alignment="list" onAction={() => null} />
        <TodoSectionList sections={sections} />
        <SectionEditWidget />
      </Page>
    </Layout>
  );
};

export default HomePage;
