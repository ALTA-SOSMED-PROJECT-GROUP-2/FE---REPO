import { ReactNode } from "react";
import Sidebar from "@/components/sidebar";

interface Props {
  children: ReactNode;
}

export default function LayoutPage(props: Readonly<Props>) {
  const { children } = props;
  return (
    <div className="w-full h-screen flex flex-row">
      <Sidebar />
      <div className="w-full py-4 px-8 mx-auto flex flex-col grow container overflow-auto">
        {children}
      </div>
    </div>
  );
}
