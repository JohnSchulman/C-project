import React, { ChangeEvent, KeyboardEvent } from "react";
import { Line as LineType } from "components/MainPage/CodeEditor";
import styles from "./style.module.scss";

type LineProps = {
  initialLine: LineType;
  index: number;
  createNewLine: (line: LineType) => void;
  focusPreviousLine: (line: LineType) => void;
  focusNextLine: (line: LineType) => void;
  focus: boolean;
};

const Line = ({
  initialLine,
  index,
  createNewLine,
  focusPreviousLine,
  focusNextLine,
  focus,
}: LineProps) => {
  const [line, setLine] = React.useState(initialLine);
  const input = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (focus && input) input.current?.focus();
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setLine({ ...initialLine, content: event.target.value });

  const handleNew = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setLine({ ...initialLine, content: line.content + "\n" });
      createNewLine(line);
    }
  };

  const handleMove = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp") {
      focusPreviousLine(line);
    }

    if (event.key === "ArrowDown") {
      focusNextLine(line);
    }

    if (
      event.key === "ArrowLeft" &&
      (event.target as HTMLInputElement).selectionStart === 0
    ) {
      focusPreviousLine(line);
    }

    if (
      event.key === "ArrowRight" &&
      (event.target as HTMLInputElement).selectionStart === line.content.length
    ) {
      focusNextLine(line);
    }
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.lineNumber}>{index + 1}</span>
      <input
        className={styles.input}
        spellCheck="false"
        onChange={handleChange}
        value={line.content}
        onKeyPress={handleNew}
        onKeyDown={handleMove}
        ref={input}
      />
    </div>
  );
};

export default Line;
