import React, { useEffect, useState } from "react"

import * as Styles from "./styles"

import { questions, exercises } from '@/screen/Question/mock'



const Question = () => {
    const countExercise = useState(exercises.length)
    
    const [ExerciseSelected, setExerciseSelected] =  useState(false)

    console.log(`ExerciseSelected`, ExerciseSelected)

    const HandleExercise = (exerciseId, ) => {
        setExerciseSelected(true)
    }
    return (
        <Styles.Wrapper>
            {questions.map(questions => {
                return (

                    <React.Fragment key={questions.id}>

                    <Styles.CardQuestion className="card-question">
                        <Styles.CardQuestionTitle>{questions.title}</Styles.CardQuestionTitle>
                        <Styles.CardQuestionSubTitle>{questions.h2}</Styles.CardQuestionSubTitle>
                    </Styles.CardQuestion>

                    {questions.exercises.map(exercise => {
                        return (
                            <React.Fragment key={exercise.exercise}>
                                <Styles.ButtonExercise className="button-exercise" onClick={() => HandleExercise(exercise)}>
                                    {exercise.exercise}
                                </Styles.ButtonExercise>
                            </React.Fragment>
                        )
                    })}

                    
                    </React.Fragment>
                )
            })}    
        
        </Styles.Wrapper>
    )
}

export default Question;