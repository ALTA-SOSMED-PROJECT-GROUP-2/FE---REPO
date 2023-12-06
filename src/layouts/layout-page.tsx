import Sidebar from "@/components/sidebar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function LayoutPage(props: Readonly<Props>) {
  const { children } = props;
  return (
    <div className="w-full h-screen flex overflow-auto font-chelsea">
      <Sidebar />
      <div className="w-full flex flex-col items-center overflow-auto">
        {children}
      </div>
    </div>
  );
}
