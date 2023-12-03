import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function LayoutPage(props: Readonly<Props>) {
  const { children } = props;
  return (
    <div className="w-full h-screen flex flex-col overflow-auto">
      <Navbar />
      <div className="w-full py-4 px-8 mx-auto flex flex-col grow container">
        {children}
      </div>
      <Footer />
    </div>
  );
}
