import React from "react";
import s from "./Error404.module.css";

function Error404() {
  return (
    <div className={s.error404Page}>
      <h1>Error 404</h1>
      <div className={s.pageContent}>
        <p>Page not found!</p>
        <p>—ฅ/ᐠ.̫ .ᐟ\ฅ—</p>
      </div>
    </div>
  );
}

export default Error404;
