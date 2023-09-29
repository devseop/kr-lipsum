import { S } from '../styles/styled';

export const Header = () => {
  return (
    <S.HeaderContainer>
      <h1>한글 로렘 입숨 생성기</h1>
      <ul>
        <li>
          본 사이트는{' '}
          <a href='http://hangul.thefron.me' target='_blank' rel='noreferrer'>
            한글입숨
          </a>{' '}
          사이트를 클론코딩한 프로젝트입니다.
        </li>
        <li>한글 로렘 입숨은 한국의 시들을 이용하여 생성됩니다.</li>
        <li>문장의 길이는 짧게 (40자), 중간 (120자), 길게 (200자)로 구성됩니다.</li>
      </ul>
    </S.HeaderContainer>
  );
};
