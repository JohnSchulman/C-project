import {
  faCheckCircle,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SourceCodeContext from "common/contexts/SourceCodeContext";
import { SourceCode as SourceCodeType } from "common/models/sourceCode";
import React from "react";
import styles from "./style.module.scss";

type Props = {
  sourceCode: SourceCodeType;
  levelId: number;
  levelName: string;
};

const SourceCode = ({ sourceCode, levelId, levelName }: Props) => {
  const { name } = sourceCode;
  const { setSourceCode } = React.useContext(SourceCodeContext);

  function handleSourceCode() {
    setSourceCode({ levelId, levelName, ...sourceCode });
  }

  return (
    <div className={styles.wrapper} title={name} onClick={handleSourceCode}>
      <div className={styles.icon}>
        {sourceCode.success ? (
          <div className={styles.success}>
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
        ) : (
          <div className={styles.fail}>
            <FontAwesomeIcon icon={faExclamationTriangle} />
          </div>
        )}
      </div>
      <span className={styles.text}>{name}</span>
    </div>
  );
};

export default SourceCode;
