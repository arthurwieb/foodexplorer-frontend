import styled from 'styled-components';

export const Container = styled.div`
  .inputField {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color : ${({theme})=> theme.COLORS.TXT_LIGHT_400};
  }
  
  main {
    height: 75vh;
    display: grid;
    align-items: center;
    justify-content: center;
    justify-items: center;
    align-content: center;
  }

  footer {
    a{
    color : ${({theme})=> theme.COLORS.TXT_LIGHT_100};
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 24px;
    display:flex;
    justify-content: center;
    }

    a:hover{
      transition: 0.2s;
      color : ${({theme})=> theme.COLORS.TXT_LIGHT_300}
    }
  }

  header {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    h1 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 3.72431rem;
      line-height: 4.4rem;
    }
  }
  .desapear{
    display: none;
  }
  .UserInteraction{
    background-color: transparent;
    width:100%
  }

  @media screen and (min-width: 768px) {
    main {
      margin-top: 5rem;
      grid-template-areas: "logoSide logoSide contentSide" "logoSide logoSide contentSide" "logoSide logoSide info";
      justify-content: space-evenly;
      


      .UserInteraction{

        padding: 6.4rem;
        border-radius: 16px;
        background-color : ${({theme})=> theme.COLORS.BACKGROUND_DARK_700};
        width: 45rem;
        height: 49rem;

      }
      .logoSide {
      grid-area: logoSide;
      }

      .contentSide {
        grid-area: contentSide;
      }

      .info {
        grid-area: info;
        display: grid;
        justify-content: center;
      }
      .desapear{
      display: block;

      }
      h1 {
        font-weight: 710;
        font-size: 4.2rem;
        line-height: 4.9rem;

      }

      h2{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 140%;
        margin-bottom:1rem;
        font-weight: 500;
        font-size: 32px;
        line-height: 140%;
        align-items: center;
        text-align: center;
      }
    }

  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  margin-top: 7.3rem;
  margin-bottom: 3.2rem;
  flex-direction: column;

  



  p {
    margin: 15px 8px;
  }

  button {
    width: 100%;
    margin-top: 3.2rem;
  }

  input:nth-child(3) {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 768px) {
    margin-top: 0rem;
   
    display: block;

  }
`;
