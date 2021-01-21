import SourceCodeContext from "common/contexts/SourceCodeContext";
import React from "react";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.scss";
import IconButton from "common/components/IconButton";
import * as characterUppercase from "common/utils/stringUtils";
import Line from "./Line";
import { getHash } from "common/utils/hashKeyUtils";

export type Line = {
  id: number;
  index: number;
  content: string;
  focus: boolean;
};

const CodeEditor = () => {
  const { sourceCode, setSourceCode } = React.useContext(SourceCodeContext);
  const [lines, setLines] = React.useState<Line[]>([]);

  React.useEffect(() => {
    if (sourceCode) {
      const originLines: Line[] = sourceCode.content.split("\n").map(
        (content, index): Line => ({
          id: getHash(),
          index: index,
          content,
          focus: false,
        })
      );
      setLines(originLines);
    }
  }, [sourceCode]);

  const createNewLine = (line: Line) => {
    if (lines) {
      let previousLines: Line[] = [...lines].filter(
        (l) => l.index <= line.index
      );

      let nextLines: Line[] = [...lines]
        .filter((l) => l.index > line.index)
        .map((l) => ({ ...l, index: l.index + 1 }));

      const newLine = {
        id: getHash(),
        index: line.index + 1,
        content: "",
        focus: true,
      };

      const newLines = [...previousLines, newLine, ...nextLines];
      newLines
        .filter((l) => l.id !== newLine.id)
        .forEach((l) => (l.focus = false));
      setLines(newLines);
    }
  };

  const focusPreviousLine = (line: Line) => {
    let linesCopy = [...lines];
    linesCopy.forEach((l) => (l.focus = false));
    let lineToFocus = linesCopy.find((l) => l.index === line.index - 1);
    if (lineToFocus) lineToFocus.focus = true;
    setLines(linesCopy);
  };

  const focusNextLine = (line: Line) => {
    let linesCopy = [...lines];
    linesCopy.forEach((l) => (l.focus = false));
    let lineToFocus = linesCopy.find((l) => l.index === line.index + 1);
    if (lineToFocus) lineToFocus.focus = true;
    setLines(linesCopy);
  };

  console.log(lines);

  return (
    <div className={styles.wrapper}>
      {sourceCode && lines && (
        <>
          <div className={styles.editorHeaderContainer}>
            <p className={styles.levelInfos}>
              {sourceCode.id !== 0
                ? `${characterUppercase.firstCharToUppercase(
                    sourceCode.levelName
                  )} / ${sourceCode.name}`
                : "New"}
            </p>
            <div className={styles.runButton}>
              <IconButton
                icon={faPlayCircle}
                onClick={() => console.log("run")}
                size="lg"
                title="Run code"
                cssClasses={styles.icon}
              />
            </div>
          </div>
          <div className={styles.codeTextArea}>
            {lines.map((line, index) => (
              <Line
                key={line.id}
                initialLine={line}
                index={index}
                createNewLine={createNewLine}
                focusPreviousLine={focusPreviousLine}
                focusNextLine={focusNextLine}
                focus={line.focus}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CodeEditor;
