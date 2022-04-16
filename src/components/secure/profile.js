import { useState } from "@hookstate/core";
import React from "react";
import { useEffect } from "react";
import { getAnswers, getListOfQuestions } from "../../services/questions";
import store from "../../store";
import AssessmentQuestions from "./assessment-questions";


function Profile() {
    const { user, questions, answers } = useState(store)
    console.log(user.get())
    useEffect(() => {
        getListOfQuestions()
        getAnswers(user.uid.get())
    }, [])
    console.log (questions.get())
    return (
        <AssessmentQuestions answersDictionary={answers.get()} listOfQuestions={questions.get()} />
        // "hello" + user.displayName.get()
    )

}
export default Profile;