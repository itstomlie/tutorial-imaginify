import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";

import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />
      <div className="root-container">
        {children}
        <div className="wrapper"></div>
      </div>
    </main>
  );
};

export default Layout;
