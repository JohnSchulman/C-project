import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { faSortNumericUpAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogButton from "common/components/LogButton";
import React from "react";
import styles from "./style.module.scss";
import UserInfo from "./UserInfo";

const UserBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.userIcon}>
        <FontAwesomeIcon icon={faUserCircle} size="lg" />
      </div>
      <UserInfo />

      <div className={styles.rank}>
        <FontAwesomeIcon icon={faCrown} size="lg" />
        <FontAwesomeIcon icon={faSortNumericUpAlt} size="lg" />
      </div>
      <div className={styles.logButton}>
        <LogButton text="Logout" onClick={() => {}} />
      </div>
    </div>
  );
};

export default UserBar;
