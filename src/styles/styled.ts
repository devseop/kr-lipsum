import styled from '@emotion/styled';
import { COLORS } from '../constants/constants';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1204px;
  margin: 80px auto;
`;

const HeaderText = styled.h1`
  margin-bottom: 40px;
  text-align: center;
  color: ${COLORS.white.base};
`;

const Form = styled.form`
  display: flex;
  gap: 24px;
  justify-content: center;
`;

const ElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    font-size: 16px;
    font-weight: 400;
    color: ${COLORS.white.dimmed};
  }
`;

const Input = styled.input``;

const Select = styled.select``;

const Button = styled.button``;

export const S = { Container, HeaderText, Form, ElementWrapper, Input, Select, Button };
