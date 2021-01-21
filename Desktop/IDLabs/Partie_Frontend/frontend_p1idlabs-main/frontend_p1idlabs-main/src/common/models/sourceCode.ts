export type SourceCode = {
  id: number;
  name: string;
  content: string;
  success: boolean;
};

export type SourceCodeEnriched = SourceCode
  &
  {
    levelId: number
    levelName: string
  }
