import { getRandomParagraphs } from '../utils/getRandomParagraphs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../rtk/store';
import { setGeneratedParagraphs, updateFormData } from '../rtk/slice';
import { DummyParagraphs } from './DummyParagraphs';
import { S } from '../styles/styled';

export const ParagraphForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form);

  const formInputChangeHandler: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (
    e,
  ) => {
    const { id, value } = e.target;
    const updatedData = id === 'paragraphNumber' ? { [id]: parseInt(value, 10) } : { [id]: value };

    dispatch(updateFormData(updatedData));
  };

  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const paragraphs = getRandomParagraphs(formData);
    // console.log(paragraphs);
    dispatch(setGeneratedParagraphs(paragraphs));
  };

  return (
    <>
      <S.Form onSubmit={submitFormHandler}>
        <S.ElementContainer>
          <label htmlFor='paragraphLength'>문장 길이</label>
          <S.Select
            id='paragraphLength'
            value={formData.paragraphLength}
            onChange={formInputChangeHandler}
          >
            <option>짧게</option>
            <option>중간</option>
            <option>길게</option>
          </S.Select>
        </S.ElementContainer>
        <S.ElementContainer>
          <label htmlFor='paragraphNumber'>문단 개수</label>
          <S.Input
            type='number'
            id='paragraphNumber'
            value={formData.paragraphNumber}
            onChange={formInputChangeHandler}
          />
        </S.ElementContainer>

        <S.ElementContainer>
          <label htmlFor='paragraphSource'>문단 소스</label>
          <S.Select
            id='paragraphSource'
            value={formData.paragraphSource}
            onChange={formInputChangeHandler}
          >
            <option>서시</option>
            <option>갈대</option>
            <option>별 헤는 밤</option>
            <option>낮은 곳으로</option>
          </S.Select>
        </S.ElementContainer>
        <S.Button type='submit'>생성하기</S.Button>
      </S.Form>
      {formData.generatedParagraphs.length > 0 && (
        <S.DummyContainer>
          {formData.generatedParagraphs?.map((paragraph: string, index: number) => (
            <DummyParagraphs key={index} text={paragraph} index={index} />
          ))}
        </S.DummyContainer>
      )}
    </>
  );
};
