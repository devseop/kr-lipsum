import { useState } from 'react';
import { IFormState } from '../types/types';

export const useForm = (initialState: IFormState) => {
  const [formData, setFormData] = useState<IFormState>(initialState);

  const formInputChangeHandler: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (
    e,
  ) => {
    const { id, value } = e.target;

    if (id === 'paragraphNumber') {
      setFormData((prevState) => ({
        ...prevState,
        [id]: parseInt(value, 10),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    }
  };

  return [formData, formInputChangeHandler] as const;
};
