import CreatePosting from "@/components/create-posting";
import ListPosting from "@/components/list-posting";
import LayoutPage from "@/layouts/layout-page";

export default function Home() {
  return (
    <LayoutPage>
      <CreatePosting/>
      <ListPosting/>
    </LayoutPage>
  );
}

