import styled from "styled-components"

import { colors } from "@/styles/colors";


type PropsButtonSelected=  {
    buttonSelected?: boolean 
}


export const Wrapper = styled.div`
    width:  80%;
    height: 50%;
    margin: 10%;
    background-color: ${colors.primary} ;
`;

export const CardQuestion = styled.div` 
    padding: 25px;
    background-color: ${colors.primary} ;
`;

export const CardQuestionTitle = styled.h1`
    font-size:  18px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
    line-height: 20px ;
    padding-bottom: 20px; 
`;

export const CardQuestionSubTitle = styled.small`
    font-size:  14px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
`;

export const ButtonExercise = styled.button<PropsButtonSelected>`
    width:300px;
    text-align: center ;
    padding: 20px;
    margin-left:  4%;
    margin-bottom: 20px;
    background-color: ${props => props.buttonSelected ? 'white': colors.primary };
    border-color: ${colors.secondary};
    border-radius: 5px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
    font-weight: bold;
`;