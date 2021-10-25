import React from "react";
import { NavLink } from "react-router-dom";

import s from "./Navigation.module.css";

const Navigation: React.FC = () => {
  return (
    <nav>
      <NavLink className={s.link} activeClassName={s.activeLink} exact to={"/"}>
        Home
      </NavLink>
      <NavLink className={s.link} activeClassName={s.activeLink} to={"/movies"}>
        Movies
      </NavLink>
      <hr />
    </nav>
  );
};
export default Navigation;
