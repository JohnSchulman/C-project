import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent } from "react";
import styles from "./style.module.scss";

type SearchBarProps = {
  setSearched: (value: string) => void;
};

const SearchBar = ({ setSearched }: SearchBarProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearched(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input onChange={handleChange} type="text"></input>
    </div>
  );
};

export default SearchBar;
