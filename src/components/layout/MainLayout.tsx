import React from "react";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
interface ChildComponent {
  children: React.FC;
}

const MainLayout = ({ children }: ChildComponent) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      <MainFooter />
    </>
  );
};

export default MainLayout;
