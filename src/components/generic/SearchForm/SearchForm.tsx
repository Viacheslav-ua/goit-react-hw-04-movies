import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import s from "./SearchForm.module.css";

interface propTypes {
  onSubmit: any;
}

const SearchForm: React.FC<propTypes> = ({ onSubmit }) => {
  const [searchStr, setSearchStr] = useState<string>("");

  const handleInputChang = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchStr.trim() === "") {
      toast.error("Enter a word");
      return;
    }
    onSubmit(searchStr);
  };

  return (
    <form onSubmit={handleSubmit} className={s.frm}>
      <input
        type="text"
        className={s.input}
        name="search"
        value={searchStr}
        onChange={handleInputChang}
      />
      <button type="submit" className={s.btn}>Search</button>
    </form>
  );
};
export default SearchForm;
