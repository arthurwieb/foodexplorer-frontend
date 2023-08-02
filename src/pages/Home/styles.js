import styled from 'styled-components';
import 'swiper/css';

export const Container = styled.div`

  .swiper-slide { width: 25rem }
  
  .pageHome{
    width: 100vw;
    min-height: calc(100% - 3rem);
    h3 {
      font-size: 3rem;
      margin: 6vh 6vw;
    }
  
  }

  .head {
    display: flex;
    justify-content: center;
    padding-top: 15vh;

  }
 
  .HomeADS {

    margin-top: 5rem;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    width: 90vw;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: 2.91696px;
    justify-content: flex-end;
    position: relative;

  }

  .imgSide img {
    height: 22rem;
    width: 22rem;
    position: absolute;
    top: 5px;
    left: -8%;

    z-index: 1;
    justify-content: flex-end;


  }

  .textSide {
  
    margin-left: 16rem;
    margin-top: 4.6rem;
    margin-bottom: 2rem;
    max-width: 30rem;

    z-index: 2;
    h2{
      font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    }
    p{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
      min-width: 25.5rem;

    }
  }


  .refeicoes {
    margin: 2rem 0rem;
  }

  footer{
    margin-top: 2rem;
  }



  @media screen and (min-width: 500px) {

    .imgSide img {
      left: -1%;
    }
  }
  @media screen and (min-width: 647px) {

    .imgSide img {
      top:-15px;

    }
  }


  @media screen and (min-width: 769px) {

    .head{
      padding-top: 25vh;
    }
    .HomeADS {

      margin-top: 5rem;
      padding-top: 5rem;
     

    }
    .imgSide img {
      height: 40rem;
      top:-124px;

      width: 40rem;
    }

  }

    .textSide{
      max-width:none;
      margin-right:1rem;
      padding-bottom:6rem;
    }

`;
