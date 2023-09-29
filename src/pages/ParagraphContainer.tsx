import { Header } from '../components/Header';
import { ParagraphForm } from '../components/ParagraphForm';
import { S } from '../styles/styled';

export const ParagraphContainer = () => {
  return (
    <S.Container>
      <Header />
      <ParagraphForm />
    </S.Container>
  );
};
