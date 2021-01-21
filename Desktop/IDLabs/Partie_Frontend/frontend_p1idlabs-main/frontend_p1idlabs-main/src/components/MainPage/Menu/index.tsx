import { faFileMedical, faSave } from "@fortawesome/free-solid-svg-icons";
import IconButton from "common/components/IconButton";
import SourceCodeContext from "common/contexts/SourceCodeContext";
import UserContext from "common/contexts/UserContext";
import { UserEnriched } from "common/models/user";
import React from "react";
import LevelList from "./LevelList";
import SearchBar from "./SearchBar";
import styles from "./style.module.scss";

const Menu = () => {
  const { user, setUser } = React.useContext(UserContext);
  const { sourceCode, setSourceCode } = React.useContext(SourceCodeContext);
  const [searched, setSearched] = React.useState("");

  return (
    <div className={styles.wrapper}>
      <div className={styles.icons}>
        <div className={styles.newFile}>
          <IconButton
            icon={faFileMedical}
            size="lg"
            title="New file"
            cssClasses={styles.icon}
            onClick={() => {
              console.log("new file clicked");
              setSourceCode({
                levelId: 0,
                levelName: "",
                content: "",
                id: 0,
                name: "",
                success: false,
              });
            }}
          />
        </div>

        <div className={styles.save}>
          <IconButton
            icon={faSave}
            size="lg"
            title="Save file"
            cssClasses={styles.icon}
            onClick={() => {
              console.log("save clicked");
            }}
          />
        </div>
      </div>
      <div className={styles.searchBarAndLevelListWrapper}>
        <div className={styles.searchBar}>
          <SearchBar setSearched={setSearched} />
        </div>
        <div className={styles.levelList}>
          <LevelList searched={searched} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
