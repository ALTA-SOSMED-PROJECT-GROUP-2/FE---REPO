import BottomNavbar from "@/components/bottom-navbar";
import { ReactNode } from "react";
import Sidebar from "@/components/sidebar";

interface Props {
  children: ReactNode;
}

export default function LayoutPage(props: Readonly<Props>) {
  const { children } = props;
  return (

    <div className="w-full h-screen flex flex-col md:flex-row">
      <Sidebar />
      <div className="w-full grow overflow-auto">
        {children}
      </div>
      <BottomNavbar />
    </div>
  );
}
