export type ParagraphProps = string[];

export type FormStateProps = {
  paragraphNumber: number;
  paragraphLength: string;
  paragraphSource: string;
  generatedParagraphs: ParagraphProps;
};

export type PoemProps = {
  author: string;
  peom: string;
};

export type PoemListProps = PoemProps[];
