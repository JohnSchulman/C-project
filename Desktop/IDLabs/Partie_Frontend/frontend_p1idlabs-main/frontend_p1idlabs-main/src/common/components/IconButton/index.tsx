import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";
import styles from "./style.module.scss";

type Props = {
  onClick: () => void;
  icon: IconProp;
  size: SizeProp;
  title: string;
  cssClasses?: string;
};

const IconButton = ({ onClick, icon, size, title, cssClasses = "" }: Props) => {
  return (
    <div
      className={classNames(styles.wrapper, cssClasses)}
      onClick={onClick}
      title={title}
    >
      <FontAwesomeIcon icon={icon} size={size} />
    </div>
  );
};

export default IconButton;
