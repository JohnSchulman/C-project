import Logo from "common/components/Logo";
import React from "react";
import ynovLogo from "./logo.svg";
import styles from "./style.module.scss";
import UserBar from "./UserBar";

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = React.memo(() => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoYnov}>
        <Logo src={ynovLogo} alt="campus" size="80px" />
      </div>
      <h1>
        Ynov<span>Algo</span>
      </h1>
      <div className={styles.userBar}>
        <div className={styles.coloredAngleLine}></div>
        <div className={styles.transparentAngleLine}></div>
        <UserBar />
      </div>
    </div>
  );
});
