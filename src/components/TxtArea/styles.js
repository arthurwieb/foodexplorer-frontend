import styled from 'styled-components'

export const Container =  styled.textarea`
  width: 100%;
  height: 150px;

  border: none;
  resize: none;

  padding: 16px;
  border-radius: 10px;
  margin-bottom: 8px;

  color: ${({theme}) => theme.COLORS.TXT_LIGHT_300};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_DARK_800};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  &::placeholder {
  color: ${({theme}) => theme.COLORS.TXT_LIGHT_500};

  }
`