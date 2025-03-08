import { Routing } from "./providers/routing/ui/Routing";

// TODO: add lazy loading for components: AuthPage(fix), Todo.detail 
// TODO: check FSD, relocate todoView.actions.tsx to features, show form the create todo if sections is null

function App() {
  return (
    <>
      <Routing />
    </>
  );
}

export default App;
