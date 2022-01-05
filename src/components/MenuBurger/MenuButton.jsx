import React from "react"
import styled from "styled-components"

const MenuButtonWrapper = styled.button`
    background-color:rgb(0,0,0);
    border: none;
    box-shadow: 0px 0px 0px rgb(50, 50, 50);
    cursor:pointer;
    margin-top: 1rem;
    width: clamp(33px,5.2vw,161px);
    
    @media only screen and (min-width: 769px) {
        display: none;
    }
`

export default function MenuButton({ show, handleShow }) {
    return !show && sessionStorage.getItem("log")==="true"? (
        <MenuButtonWrapper onClick={handleShow}>
            <svg viewBox="0 0 100 80" width="30" height="30" >
                <rect width="100" height="10" fill="white"/>
                <rect y="20" width="100" height="10" fill="white" />
                <rect y="40" width="100" height="10" fill="white" />
            </svg>
        </MenuButtonWrapper>
    ) : null
}



