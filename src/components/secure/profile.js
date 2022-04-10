import { useState } from "@hookstate/core";
import React from "react";
import { useEffect } from "react";
import { getListOfQuestions } from "../../services/questions";
import store from "../../store";
import AssessmentQuestions from "./assessment-questions";


function Profile() {
    const { user, questions } = useState(store)
    console.log(user.get())
    useEffect(() => {
        getListOfQuestions()
    }, [])
    console.log (questions.get())
    return (
        <AssessmentQuestions listofQuestions={questions.get()} />
        // "hello" + user.displayName.get()
    )

}
export default Profile;