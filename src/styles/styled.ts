import styled from '@emotion/styled';
import { COLORS } from '../constants/constants';
// import { MdKeyboardArrowDown } from 'react-icons/md';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1204px;
  margin: 80px auto;
`;

const HeaderContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    font-size: 40px;
    color: ${COLORS.white.base};
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  li {
    font-size: 16px;
    word-spacing: 2px;
    color: ${COLORS.white.base};
  }

  a:link,
  a:visited {
    font-weight: 600;
    color: ${COLORS.blue.base};
  }
`;

const Form = styled.form`
  display: flex;
  gap: 24px;
  justify-content: flex-start;
  align-items: flex-end;
  line-height: 1.2;
`;

const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 16px;
    font-weight: 500;
    color: ${COLORS.white.dimmed};
  }
`;

const SelectContainer = styled.div``;

const Input = styled.input`
  border-radius: 6px;
  padding: 12px 16px;
  border: none;
  outline: none;
  width: 200px;
  height: 44px;
  font-weight: 700;
`;

const Select = styled.select`
  /* 셀렉트 기본 css 초기화 */
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  ::-ms-expand {
    display: none;
  }

  border-radius: 6px;
  padding: 12px 16px;
  border: none;
  outline: none;
  width: 200px;
  height: 44px;
  font-weight: 700;
`;

const Button = styled.button`
  padding: 12px 16px;
  width: 120px;
  height: 46px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  border: none;
  border-radius: 8px;
  background-color: ${COLORS.blue.base};
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.blue.dimmed};
    box-shadow: 0 0 0 1px ${COLORS.blue.base} inset;
  }
`;

const DummyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 24px 0;
  padding: 20px 24px;
  background-color: ${COLORS.gray.dimmed};
  border-radius: 8px;
  min-height: 280px;

  p {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    color: ${COLORS.white.base};
  }
`;

export const S = {
  Container,
  HeaderContainer,
  Form,
  ElementContainer,
  SelectContainer,
  Input,
  Select,
  Button,
  DummyContainer,
};
