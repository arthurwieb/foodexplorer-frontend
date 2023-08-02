import styled from 'styled-components';

export const Container = styled.label`
   display: flex;
  align-items: center;
  height: 3rem;
  
  background-color : ${({theme, isNew}) => isNew? 'transparent' : theme.COLORS.TXT_LIGHT_600};
  color : ${({theme}) => theme.COLORS.TXT_LIGHT_100};

  border: ${({theme, isNew}) => isNew? `1px dashed ${theme.COLORS.TXT_LIGHT_500}` : 'none'};
  flex-basis: calc(33.33% - 10px);
  margin-right: 10px;
  border-radius: 10px;

  
    >button {
      border: none; 
      background: none; 

    }

    .button-delete {
      color:  ${({theme}) => theme.COLORS.TXT_LIGHT_100};

    }
    .button-add {
      color:  ${({theme}) => theme.COLORS.TXT_LIGHT_500};

    }
    svg{
      margin-right:1rem;
    }
    > input {
      width: 100%;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 100%;
      padding: 12px;
      color:  ${({theme}) => theme.COLORS.TXT_LIGHT_100};
      background: transparent; 

      border: none; 
      

      &::placeholder{
        color : ${({theme}) => theme.COLORS.TXT_LIGHT_100};
      }

    }
    @media screen and (min-width: 769px) {
    
      flex-basis: calc(33.33% - 8vw);
    
    }
    @media screen and (min-width: 1000px) {
    
      flex-basis: calc(33.33% - 12vw);
    
    }



`

