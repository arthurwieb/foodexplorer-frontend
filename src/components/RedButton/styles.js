import styled from 'styled-components';

export const Container = styled.button`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;


  background-color:${({theme})=> theme.COLORS.BACKGROUND_TOMATO_100};
  justify-content: center;
  align-items: center;
  padding: 12px 32px;
  gap: 8px;
  border-radius: 5px;
  color:${({theme})=> theme.COLORS.TXT_LIGHT_100};
  border: none;




`
