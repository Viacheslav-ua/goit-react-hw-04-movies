import React from "react";

import s from "./Container.module.css";

interface propTypes {
  children: React.ReactChild | React.ReactNode;
}

const Container: React.FC<propTypes> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};
export default Container;
