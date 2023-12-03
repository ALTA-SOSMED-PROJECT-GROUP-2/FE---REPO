import { Button } from "@/components/ui/button";
import LayoutPage from "@/layouts/layout-page";

function App() {
  return (
    <LayoutPage>
      <h1 className="text-red-500 text-2xl">Home page</h1>
      <Button>Hello world</Button>
    </LayoutPage>
  );
}

export default App;
