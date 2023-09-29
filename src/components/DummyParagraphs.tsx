type DummyParagraphsProps = {
  text: string;
  index: number;
};

export const DummyParagraphs = ({ text, index }: DummyParagraphsProps) => {
  return <p key={index}>{text}</p>;
};
