import { Layout } from "widgets/layout";
import "./style.scss";
import { TodoLocalWidget } from "widgets/todo-view";
import { Page } from "shared/ui/page";
import { RoutePath } from "shared/config/route";

const HomePage = () => {
  return (
    <Layout>
      <Page namePage={RoutePath.home.pageName}>
        <TodoLocalWidget/>
      </Page>
    </Layout>
  );
};

export default HomePage;