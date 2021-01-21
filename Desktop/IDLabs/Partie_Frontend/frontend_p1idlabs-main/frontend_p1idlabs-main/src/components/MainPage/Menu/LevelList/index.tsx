import UserContext from "common/contexts/UserContext";
import { LevelEnriched } from "common/models/level";
import React from "react";
import Level from "./Level";
import styles from "./style.module.scss";

type LevelListProps = {
  searched: string;
};

const LevelList = ({ searched }: LevelListProps) => {
  const { user } = React.useContext(UserContext);
  const levels = user?.levels;

  const isSearched = (level: LevelEnriched): boolean => {
    return (
      level.sourceCodes.find((sourceCode) =>
        sourceCode.name.toLowerCase().includes(searched.toLowerCase())
      ) !== undefined
    );
  };

  return (
    <div className={styles.wrapper}>
      {levels &&
        levels
          .filter((level) => isSearched(level))
          .map((level) => {
            return (
              <div key={level.id} className={styles.level}>
                <Level level={level} searched={searched} />
              </div>
            );
          })}
    </div>
  );
};

export default LevelList;
