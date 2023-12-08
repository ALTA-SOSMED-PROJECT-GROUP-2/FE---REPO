import CreatePosting from "@/components/Posting/create-posting";
import ListPosting from "@/components/Posting/list-posting";
import LayoutPage from "@/layouts/layout-page";

export default function Home() {
  return (
    <LayoutPage>
      <CreatePosting/>
      <ListPosting/>
    </LayoutPage>
  );
}

