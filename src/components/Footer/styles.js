import styled from 'styled-components';

export const Container = styled.div`
  

  >footer {
    background-color:${({theme})=> theme.COLORS.BACKGROUND_DARK_600};
    
    height: 6rem;
    bottom: 0;
    width: 100%;

    display: flex;
    justify-content: space-around;
    align-items : center;
    >.footerLogoSide{
      font-family: 'Roboto';
      margin-left: 5vw;
      width: 60vw;
      font-style: normal;
      font-weight: 700;
      font-size: 1.52616rem;
      line-height: 18px;
      color:${({theme})=> theme.COLORS.TXT_LIGHT_700};
      
      display: flex;
      p{
        margin-left: 2vw;
      }

    }
    label {
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 16px;

      text-align: right;
    }

    
  }
`;
