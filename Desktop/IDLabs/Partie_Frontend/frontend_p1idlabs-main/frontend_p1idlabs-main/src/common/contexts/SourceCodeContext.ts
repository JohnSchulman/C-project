import { SourceCodeEnriched } from "common/models/sourceCode";
import React from "react";

type SourceCodeContext = {
  sourceCode?: SourceCodeEnriched;
  setSourceCode: (sourceCode: SourceCodeEnriched) => void;
};

export default React.createContext<SourceCodeContext>({
  sourceCode: undefined,
  setSourceCode: (sourceCode: SourceCodeEnriched): void => {},
});
