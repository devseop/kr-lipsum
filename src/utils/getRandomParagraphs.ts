import { poems } from '../constants/poems';
import { FormStateProps, ParagraphProps } from '../types/types';

export const getRandomParagraphs = (formData: FormStateProps): ParagraphProps => {
  const { paragraphSource: source, paragraphNumber: count, paragraphLength: length } = formData;

  const selectedPoem = poems.find((peom) => peom.subject === source);

  if (!selectedPoem) return [];

  const lines = selectedPoem.poem.split(' ');
  const randomParagraphs: ParagraphProps = [];
  const maxLength = length === '짧게' ? 40 : length === '중간' ? 120 : 200;

  for (let i = 0; i < count; i++) {
    let paragraph = '';
    while (paragraph.length < maxLength) {
      const randomIndex = Math.floor(Math.random() * lines.length);
      paragraph += lines[randomIndex] + ' ';
    }
    randomParagraphs.push(paragraph.trim());
  }

  return randomParagraphs;
};
