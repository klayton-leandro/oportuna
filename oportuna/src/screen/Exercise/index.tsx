import React, { useState } from "react"


import * as Styles from './styles'

import { useHistory } from 'react-router-dom'

type ContentHistory = {
    content: string | any
}

const Exercise: React.FC<any> = ()  => {
    const [changedSelected, setChangedSelected ] =  useState({
        questionA: false,
        questionB: false,
        questionC: false,
        questionD: false
    })
    const history =  useHistory<ContentHistory>();
    const { content } = history?.location?.state;
    
    const handValidationQuestion = (e) => {
        switch (e.value) {
            
            case 'A'.toLowerCase():
                setChangedSelected({
                    questionA: true,
                    questionB: false,
                    questionC: false,
                    questionD: false
                })
            break;

            case 'B'.toLowerCase():
                setChangedSelected({
                    questionA: false,
                    questionB: true,
                    questionC: false,
                    questionD: false
                })
            break;

            case 'C'.toLowerCase():
                setChangedSelected({
                    questionA: false,
                    questionB: false,
                    questionC: true,
                    questionD: false
                })
            break;

            case 'D'.toLowerCase():
                setChangedSelected({
                    questionA: false,
                    questionB: false,
                    questionC: false,
                    questionD: true
                })
            break;
        
            default:
                break;
        }
    }

    return (
        <Styles.Container className="content">
            <Styles.ContentLeghtExercise>Exercise 4/11</Styles.ContentLeghtExercise>
            
            <Styles.DirectionOnly>
                <Styles.ContentExerciseSelected 
                    changeColor={changedSelected.questionA} 
                    value={"a"} 
                    onClick={(event) => handValidationQuestion(event.target)}>
                        a
                </Styles.ContentExerciseSelected>
                <Styles.Only>1 e 2</Styles.Only>
            </Styles.DirectionOnly>

            <Styles.DirectionOnly>
                <Styles.ContentExerciseSelected 
                    changeColor={changedSelected.questionB} 
                    value={"b"} 
                    onClick={(event) => handValidationQuestion(event.target)}>
                        b
                </Styles.ContentExerciseSelected>
                <Styles.Only>apenas a 1</Styles.Only>
            </Styles.DirectionOnly>

            <Styles.DirectionOnly>
                <Styles.ContentExerciseSelected 
                    changeColor={changedSelected.questionC} 
                    value={"c"} 
                    onClick={(event) => handValidationQuestion(event.target)}>
                        c
                </Styles.ContentExerciseSelected>
                <Styles.Only>1,2 e 3</Styles.Only>
            </Styles.DirectionOnly>


            <Styles.DirectionOnly>
                <Styles.ContentExerciseSelected 
                    changeColor={changedSelected.questionD} 
                    value={"d"} 
                    onClick={(event) => handValidationQuestion(event.target)}>
                        d
                </Styles.ContentExerciseSelected>
                <Styles.Only>apenas a 3</Styles.Only>
            </Styles.DirectionOnly>
        </Styles.Container>
    )
}

export default Exercise;