import React from "react";
import s from "./Heading.module.css";

interface propTypes {
  text: string;
}

const Heading: React.FC<propTypes> = ({ text }) => {
  return <h2>{text}</h2>;
};
export default Heading;
