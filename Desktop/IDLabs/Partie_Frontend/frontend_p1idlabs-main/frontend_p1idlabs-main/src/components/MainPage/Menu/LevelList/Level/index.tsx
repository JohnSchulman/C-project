import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { LevelEnriched } from "common/models/level";
import { SourceCode as SourceCodeType } from "common/models/sourceCode";
import { firstCharToUppercase } from "common/utils/stringUtils";
import React from "react";
import SourceCode from "./SourceCode";
import styles from "./style.module.scss";

type LevelProps = {
  level: LevelEnriched;
  searched: string;
};

const Level = ({ level, searched }: LevelProps) => {
  const [expand, setExpand] = React.useState(!!searched);
  const sourceCodesWrapper = React.useRef<HTMLDivElement>(null);

  const sourceCodes: SourceCodeType[] = searched
    ? level.sourceCodes.filter((sourceCode) =>
        sourceCode.name.toLowerCase().includes(searched.toLowerCase())
      )
    : level.sourceCodes;

  const expandLevel = (expand: boolean) => {
    setExpand(expand);
    expand
      ? setTimeout(() => {
          (sourceCodesWrapper.current as HTMLDivElement).classList.add(
            styles.showScroll
          );
        }, 250)
      : (sourceCodesWrapper.current as HTMLDivElement).classList.remove(
          styles.showScroll
        );
  };

  React.useEffect(() => {
    expandLevel(!!searched);
  }, [searched]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.level} onClick={() => expandLevel(!expand)}>
        <div className={styles.title}>{firstCharToUppercase(level.name)}</div>
        <FontAwesomeIcon icon={!expand ? faCaretRight : faCaretDown} />
      </div>

      <div
        ref={sourceCodesWrapper}
        className={classNames(
          styles.sourceCodes,
          expand ? styles.expand : styles.hide
        )}
      >
        {sourceCodes.map((sourceCode) => {
          return (
            <SourceCode
              key={sourceCode.id}
              sourceCode={sourceCode}
              levelId={level.id}
              levelName={level.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Level;
