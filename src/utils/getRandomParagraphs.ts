import { poems } from '../lib/poems';
import { IFormState } from '../types/types';

export const getRandomParagraphs = (formData: IFormState): string[] => {
  console.log(formData);
  const { paragraphSource: source, paragraphNumber: count, paragraphLength: length } = formData;

  const selectedPoem = poems.find((peom) => peom.subject === source);

  if (!selectedPoem) return [];

  const lines = selectedPoem.poem.split(' ');
  const randomParagraphs: string[] = [];
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
