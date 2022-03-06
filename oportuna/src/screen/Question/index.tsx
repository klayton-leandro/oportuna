import React from "react"

import * as Styles from "./styles"

import { questions } from '@/screen/Question/mock'

import { useHistory } from "react-router-dom"



const Question = () => {
    const history = useHistory()
    const HandleExercise = (exercise, content) => {
        history.push(`/exercise/${exercise}`, {
            content: content,
            
        })
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

                    {questions.exercises.map((exercise) => {
                        return (
                            <React.Fragment key={exercise.exercise}>
                                <Styles.ButtonExercise className="button-exercise"  onClick={() => HandleExercise(exercise.exercise, exercise.content)}>
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