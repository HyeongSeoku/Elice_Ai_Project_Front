import React, { FC } from "react";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

const MainLayout: FC = (props) => {
  return (
    <>
      <MainHeader />
      <main className="container ">{props.children}</main>
      <MainFooter />
    </>
  );
};
// bg-[url('/src/img/data_bg.jpeg')]
export default MainLayout;
