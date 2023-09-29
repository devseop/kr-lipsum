import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormStateProps, ParagraphProps } from '../types/types';

const initialState: FormStateProps = {
  paragraphNumber: 1,
  paragraphLength: '짧게',
  paragraphSource: '서시',
  generatedParagraphs: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<Partial<FormStateProps>>) => {
      Object.assign(state, action.payload);
    },
    setGeneratedParagraphs: (state, action: PayloadAction<ParagraphProps>) => {
      state.generatedParagraphs = action.payload;
    },
  },
});

export const { updateFormData, setGeneratedParagraphs } = formSlice.actions;
export default formSlice.reducer;
