import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./style.module.scss";

type Props = {
  text: string;
  onClick: () => void;
  icon?: IconProp;
  size?: any;
};

const Button = ({ text, onClick, icon, size }: Props) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon} size={size} />}
      <span>{text}</span>
    </div>
  );
};

export default Button;
