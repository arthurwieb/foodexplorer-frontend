import styled from 'styled-components';

export const Container = styled.div`
  
  display: block;
  width: 100%;
  height: 100%;

  position: fixed; 
  top: 0;
  left: 0;
  z-index: 5;
  background-color : ${({theme})=> theme.COLORS.BACKGROUND_DARK_400};

  footer {
    position: fixed;
    bottom: 0;
  }
  .topMenu {
    display: flex;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 2.11629rem;
    line-height: 2.5rem;
    background-color : ${({theme})=> theme.COLORS.BACKGROUND_DARK_700};
    margin-bottom: 2rem;
  }
  .CloseSideBar {
    height: 3rem;
    margin: 4.2rem 5vw; 

  }
  .searchBarInput{
    margin: 0 1.2rem;

  }
  .sideBarOptions{
    margin: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
 
    a{
      text-decoration: none;
      margin-top:  1.2rem;
      font-family: 'Poppins';
      font-style: italic;
      font-weight: 300;
      font-size: 2.4rem;
      border-bottom: solid 1px ${({theme})=> theme.COLORS.BACKGROUND_DARK_1000};
      color : ${({theme})=> theme.COLORS.TXT_LIGHT_100};


    }

  }




`
