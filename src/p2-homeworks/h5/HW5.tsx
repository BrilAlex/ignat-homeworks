import React from "react";
import Header from "./Header";
import AppRoutes from "./AppRoutes";
import {HashRouter} from "react-router-dom";

function HW5() {
  return (
    <div>
      {/*в gh-pages лучше работает HashRouter*/}
      <HashRouter>
        <Header/>
        <AppRoutes/>
      </HashRouter>
    </div>
  );
}

export default HW5;
