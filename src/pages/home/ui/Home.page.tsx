import { Layout } from "widgets/layout";
import "./style.scss";
import { TodoLocalWidget, TodoViewActions } from "widgets/todo-view";
import { Page } from "shared/ui/page";
import { RoutePath } from "shared/config/route";

const HomePage = () => {
  return (
    <Layout>
      <Page namePage={RoutePath.home.pageName}>
        <TodoViewActions styleCSS={{ marginTop: "15px" }} alignment="list" onAction={() => null} />
        <TodoLocalWidget/>
      </Page>
    </Layout>
  );
};

export default HomePage;