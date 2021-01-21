import Footer from "common/components/Footer";
import { Header } from "common/components/Header";
import UserContext from "common/contexts/UserContext";
import { users } from "common/mocks/users";
import { UserEnriched } from "common/models/user";
import MainPage from "components/MainPage";
import React from "react";
import styles from "./style.module.scss";

export const App: React.FC = () => {
  const [user, setUser] = React.useState<UserEnriched>(users[0]);

  const userContextValue = {
    user,
    setUser,
  };

  return (
    <main className={styles.app}>
      <UserContext.Provider value={userContextValue}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.mainPage}>
          <MainPage />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </UserContext.Provider>
    </main>
  );
};
