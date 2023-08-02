import styled from 'styled-components';

import 'swiper/css';

export const Container = styled.div`
    background-color:${({theme})=> theme.COLORS.BACKGROUND_DARK_200};
    border: 1px solid ${({theme})=> theme.COLORS.BACKGROUND_DARK_300};
    border-radius: 8px;
    a{
      text-decoration: none;

      display: flex;
     justify-content: center;
      font-family: 'Poppins';
      
      font-size: 1.4rem;
      line-height: 2.4rem;
      color : ${({theme})=> theme.COLORS.TXT_LIGHT_300};

    }
    button {
      margin-left: 3rem;
      width: 45%
    }


    >.card{
    display: flex;
    flex-direction: column;
    height:50vh;
    justify-content: space-between;
    padding: 1.5rem;
    border-radius: 10%;
    .mealDesc{
      display:flex;
      justify-content: center;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.2rem;
      text-align: center;
    }
    .desapear {
      display: none;
    }
 
    > .favorite {
      display: flex;
      justify-content: flex-end;
      cursor:pointer;
      
    }
    .mealphoto {
      display: flex;

      justify-content: center;
      
      
      img{
        width:13rem;
        height:13rem;
        border-radius: 50%;
      }
  
    }
    .qtdOfOrder {
      display: flex;

      justify-content: center;
      align-items: center;

      text-align: center;
      img {
    cursor:pointer;

        padding: 0.4rem;
      }
    }
    p {
      display: flex;
      color:${({theme})=> theme.COLORS.TXT_TINTS_CAKE_200};

      justify-content: center;
      align-items: center;

      text-align: center;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 100%;
    }
    label {
      color:${({theme})=> theme.COLORS.TXT_LIGHT_300};
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 100%;
      margin: 0 15px;
    }
    
 
  }

`

