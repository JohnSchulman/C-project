import SourceCodeContext from "common/contexts/SourceCodeContext";
import { SourceCodeEnriched } from "common/models/sourceCode";
import React from "react";
import CodeEditor from "./CodeEditor";
import CodeRenderer from "./CodeRenderer";
import Menu from "./Menu";
import styles from "./style.module.scss";

const MainPage = () => {
  const [sourceCode, setSourceCode] = React.useState<SourceCodeEnriched>();

  const sourceCodeContextValue = {
    sourceCode,
    setSourceCode,
  };

  return (
    <SourceCodeContext.Provider value={sourceCodeContextValue}>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <Menu />
        </div>
        <div className={styles.codeEditor}>
          <CodeEditor />
        </div>
        <div className={styles.codeRenderer}>
          <CodeRenderer />
        </div>
      </div>
    </SourceCodeContext.Provider>
  );
};

export default MainPage;
