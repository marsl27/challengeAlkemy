import styled from "styled-components"

export const MenuBurgerWrapper = styled.nav`
  align-items: center;
  background: #002462;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  position: fixed;
  right: ${props => (props.show ? "0" : "-100%")};
  top: 0px;    
  transition: right 0.3s linear;
  width: 50vw;
  z-index:150;
  @media only screen and (min-width: 769px) {
    display:none;
  }

  .mobileHeader{
    background: linear-gradient(#002462,black);
    display: flex;
    flex-direction: column;
    height: 35%;
    justify-content: space-between;
    width:50vw;
  }
  
  .mobileHeader .user{
    padding:10px;
  }

  .close {
    color: white;
    cursor:pointer;
    font-size: 24px;
    font-weight: 500;
    padding:5px 10px;
  }

  .mobileBody{
    align-items: center;
    background-color:black;
    display: flex;
    flex-direction: column;
    height:60%;
    justify-content: flex-start;
    padding: 50px 12px;
    width: 50vw;
  }

  .mobileBody .userOption a{
    color: white;
    cursor:pointer;
     text-decoration:none;
  }

  .mobileFooter{
    background: linear-gradient(black,#002462);
    display:flex;
    justify-content: flex-end;
    align-items: center;
    height:5%;
    width: 50vw
  }
  
 .mobileFooter a{
    color:white;
    font-size:21px;
    padding-right:15px;
    text-decoration:none;
    
 }

`