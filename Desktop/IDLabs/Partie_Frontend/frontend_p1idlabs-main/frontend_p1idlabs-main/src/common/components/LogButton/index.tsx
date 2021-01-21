import React from "react";
import styles from "./style.module.scss";

type Props = {
  text?: string;
  onClick: () => void;
};

const LogButton = ({ text, onClick }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default LogButton;
