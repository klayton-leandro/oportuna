import React from "react"


import { StyleGlobal } from "@/styles/global"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Question, Exercise } from "@/screen" 

const Router: React.FC = () => {
    return (
        <>  
            <StyleGlobal/>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Question}></Route>
                    <Route path="/exercise/:question_id" exact component={Exercise}></Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Router;