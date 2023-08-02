import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 12px 14px;
  gap: 14px;
  background-color:${({theme})=> theme.COLORS.BACKGROUND_DARK_900};
  border-radius: 8.1px;
  height: 4.8rem;
  background-color : ${({theme, difColor}) => difColor? theme.COLORS.BACKGROUND_DARK_800 : theme.COLORS.BACKGROUND_DARK_900};

  input {
  width: 100%;
  border: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  background-color:${({theme})=> theme.COLORS.BACKGROUND_DARK_900};
  color:${({theme})=> theme.COLORS.TXT_LIGHT_100};

  }
`

