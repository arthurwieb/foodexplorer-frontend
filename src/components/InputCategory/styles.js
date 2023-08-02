import styled from 'styled-components';

export const Container = styled.label`
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 12px 14px;
  gap: 14px;
  background-color:${({theme})=> theme.COLORS.BACKGROUND_DARK_900};
  border-radius: 8.1px;
  height: 4.8rem;

  input {
  width: 100%;
  border: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  background-color:${({theme})=> theme.COLORS.BACKGROUND_DARK_900};
  color:${({theme})=> theme.COLORS.TXT_LIGHT_100};
  

  }
  select {
    text-decoration: none;
    background:transparent;
    color:${({theme})=> theme.COLORS.TXT_LIGHT_100};
    border: none;
    width:100%;
    height:100%;

    option{

      background-color: ${({theme})=> theme.COLORS.BACKGROUND_DARK_900};
    }
  }

`

