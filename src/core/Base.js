import { React, Fragment, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Base({ children }) {
  const toggleSidebar = (e) => {
    e.preventDefault();
    console.log("AAA");
    setSidebar(!sidebar);
  };
  const [sidebar, setSidebar] = useState(false);
  return (
    <Fragment>
      <div className={"d-flex " + (sidebar && "toggled")} id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper">
          <Header toggleSidebar={toggleSidebar} />

          <div className="container-fluid">{children}</div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}