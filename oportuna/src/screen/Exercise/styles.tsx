import styled from 'styled-components'

import { colors } from '@/styles/colors';


type ChangeButton = {
    changeColor?: boolean
}

export const Container = styled.div`
    width: 500px;
    height: 300px;
    margin: 10%;
    background-color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

export const ContentText = styled.h2`
    font-weight: bold;
    font-size: 12px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;   
    color: black;
`;


export const ContentLeghtExercise = styled.h1`
    padding: 25px;
    font-size: 24px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;   
    font-weight: bold;
    color: ${colors.secondary};
`;

export const ContentExerciseSelected = styled.button<ChangeButton>`
    border: 1px;
    border-radius: 10px;
    flex-direction: column ;
    padding: 5px 10px 10px;
    margin-left:  15px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;   
    font-size: 20px;
    color: white;
    background-color: ${props => props.changeColor ? `${colors.secondary}` : `${colors.gray}` } ;
`;

export const DirectionOnly = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between ;
    align-items: center;
    flex-wrap: nowrap;
    margin-bottom: 20px;
    background-color:  transparent;
`;

export const Only = styled.p`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;   
    font-size: 20px;
    font-style: bold;
    color: black;  
    padding-right: 65% ;
    background-color:  transparent;
`;