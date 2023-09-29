import { useState } from 'react';
import styled from '@emotion/styled';
import { useForm } from '../hooks/useForm';
import { IFormState } from '../types/types';
import { getRandomParagraphs } from '../utils/getRandomParagraphs';

export const ParagraphForm = () => {
  const initialState: IFormState = {
    paragraphNumber: 1,
    paragraphLength: '짧게',
    paragraphSource: '낮은 곳으로',
  };

  const [formData, formInputChangeHandler] = useForm(initialState);
  const [generatedParagraphs, setGeneratedParagraphs] = useState<string[]>([]);

  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const paragraphs = getRandomParagraphs(formData);
    console.log(paragraphs);
    setGeneratedParagraphs(paragraphs);
  };

  return (
    <>
      <Form onSubmit={submitFormHandler}>
        <ElementWrapper>
          <label htmlFor='paragraphNumber'>문단 수</label>
          <Input
            type='number'
            id='paragraphNumber'
            value={formData.paragraphNumber}
            onChange={formInputChangeHandler}
          />
        </ElementWrapper>
        <ElementWrapper>
          <label htmlFor='paragraphLength'>문단 길이</label>
          <Select
            id='paragraphLength'
            value={formData.paragraphLength}
            onChange={formInputChangeHandler}
          >
            <option>짧게</option>
            <option>중간</option>
            <option>길게</option>
          </Select>
        </ElementWrapper>
        <ElementWrapper>
          <label htmlFor='paragraphSource'>문단 소스</label>
          <Select
            id='paragraphSource'
            value={formData.paragraphSource}
            onChange={formInputChangeHandler}
          >
            <option>낮은 곳으로</option>
            <option>별 헤는 밤</option>
          </Select>
        </ElementWrapper>
        <Button type='submit'>생성하기</Button>
      </Form>
      {generatedParagraphs?.map((el: string, idx: number) => <p key={idx}>{el}</p>)}
    </>
  );
};

const Form = styled.form`
  display: flex;
  gap: 24px;
  justify-content: center;

  max-width: 1024px;
  margin: 0 auto;
`;

const ElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
  }
`;

const Input = styled.input``;

const Select = styled.select``;

const Button = styled.button``;
