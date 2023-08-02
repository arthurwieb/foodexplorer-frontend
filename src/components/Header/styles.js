import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  z-index: 3; 
  width: 100%;
  
  background-color:${({theme})=> theme.COLORS.BACKGROUND_DARK_700};


  .header {
    height: 11.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    
   
    .LogoForSideBar {         
      
        height: 2.8rem;
      
    }
    .logoFoodsExplorer {
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 2.11629rem;
      line-height: 2.5rem;
   
      
    }

    >.logoFoodsExplorer{
      img{
        margin-right: 2rem;
      }
        
    }

    .searchBar{
      width:50%;
      div{
        width:100%;
      }
    }


    .ordersBTN {
      display: flex;

      p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
        line-height: 2.4rem;
        display:flex;

        width: 3rem;
        height: 3rem;
        padding: .2rem;
        top: -10px;
        right: -52px;
        align-items: center;
        position: relative;

        background-color:${({theme})=> theme.COLORS.BACKGROUND_TOMATO_100};
        border-radius: 50%;
        justify-content: center;
        border-radius: 50%;
        z-index: 1;
      }

      img {
        height: 3.8rem;
        z-index: 0;
      }
    }



  }

  .desktopDesapear{
        display:flex;
      }
  .desapear{
    display: none;
  }
  

  @media screen and (max-width: 365px) {
    .header {
      justify-content : space-evenly;
      .logoFoodsExplorer {
      
      font-size: 1.5rem;

      img{
        margin-left: 10vw;

        margin-right: 1.5rem;
      }
    }


    }
       

     
  }

  @media screen and (max-width: 513px) {
    h1 {
      line-height: 4rem;
    } 
  }

  @media screen and (min-width: 769px) {

    .header{
      height:10rem;
      justify-content: space-evenly;
  
          
      .ordersBTN{

      .desktopDesapear{
        display:none;
      }
      
      }

      .logOutLogo{
          svg{
            display:flex;
            width:3rem;
            height:3rem;
          }
       }
    }
 
    .logoFoodsExplorer {
      img{
        width:3rem;
        height:3rem;
      }
      h1 {
        font-size: 2.5rem;

      } 
   
    }

    .optionsPhone{
      display:none;
    }

  
   .imageorderlogo{
      display:none;
    }


  

    .desapear{
      display: flex;

      button{
        white-space:nowrap;
      display:flex;
      align-items:center;
      }

      img{
        margin-right:1rem;
      }
    
    }

  }



`;
