// import React from "react";
import s from "./ButtonGoBack.module.css";

const ButtonGoBack: React.FC<any> = ({onGoBack}) => {
  return (
    <button type="button" className={s.btn} onClick={onGoBack}>
      Go back
    </button>
  );
};
export default ButtonGoBack;
