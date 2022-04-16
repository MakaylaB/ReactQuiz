import { useFormik } from 'formik';
import { useState, useEffect } from "react";
import { useState as useGlobalState } from "@hookstate/core";
import { Formik, Form, Field } from 'formik';
import Layout from "../layout";
import { submitAnswers } from '../../services/questions';
import store from '../../store';


const AssessmentQuestions = ({ listOfQuestions, answersDictionary }) => {
  const { user } = useGlobalState(store)
  const [processing, setProcessing] = useState();
  const [answers, setAnswers] = useState({})
  const [previousAnswers, setPreviousAnswers] = useState({})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const q = listOfQuestions[currentQuestionIndex]
  const questionId = q?.id
  const selectedAnswers = answersDictionary[questionId]
  console.log(answers, "***")
  useEffect(() => {
    setAnswers(selectedAnswers)
  }, [selectedAnswers])
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      setProcessing(true);
      submitAnswers(answers, onSuccess)

    },
    // validationSchema: loginvalidationSchema,
  });
  const index = currentQuestionIndex;
  const next = () => {

    console.log(answers)
    submitAnswers(answers, onNextSuccess)
  };

  const previous = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    setAnswers(previousAnswers)

  }
  const onNextSuccess = (answers) => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setPreviousAnswers(answers)
  }

  const onSuccess = () => {
    //navigate to a new page after submission
  }
  let buttonHtml;
  const nextButton = <button type="submit" onClick={next} value="Next" className="ml-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-darker-brown shadow-xl md:w-1/3  uppercase bg-brown text-white font-bold py-2 px-5 rounded-full"> Next</button>
  const previousButton = <button type="submit" onClick={previous} value="Previous" className="ml-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-darker-brown shadow-xl md:w-1/3  uppercase bg-brown text-white font-bold py-2 px-5 rounded-full"> Previous</button>
  if (index === 0) {
    buttonHtml = (
      <>
        {nextButton}
      </>
    );
  } else if (index === listOfQuestions.length - 1) {
    buttonHtml = (

      <>
        {previousButton}
        <input type="button" value="Submit" />
      </>
    );
  } else {
    buttonHtml = (
      <>

        {previousButton}
        {nextButton}
      </>)
  }

  return (
    <Layout>
      <div className='bg-white p-40 pt-20 pb-60 ml-10 mr-10 rounded-md'>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lime-600 bg-lime-200">
                Task in progress
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-lime-600">
                30%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-lime-200">
            <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lime-500"></div>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div key={`questions${index}`}>
            <div className='text-md  text-slate-400 text-left'>Question {index + 1}</div>
            <div className='text-[80px] one text-left'>{q?.question}</div>
            <div>{q?.type === "multiple-choice" ?
              <>{q?.options.map((o, i) => {
                return <div key={`option${i}`}>
                  <input type="radio"
                    id={`option${i}`}
                    name={`option${i}`}
                    onChange={() => {
                      formik.setFieldValue(q.id, o)
                      setAnswers({ ...answers, answer: o, questionId: q.id, uid: user.uid.get() })
                    }
                    }
                    checked={formik.values[q.id] === o || selectedAnswers?.answer === o}
                    value="" />
                  {o}
                </div>


              })}</>
              :

              <div>
                <br />
                <input value={answers?.answer} onChange={(e) => {
                  setAnswers({ ...answers, answer: e.target.value, questionId: q.id, uid: user.uid.get() })
                }} className="mb-8 border-b-2 border-black bg-zinc-100 md:w-1/2 h-20   py-2 w-full placeholder:text-black-200 font-md  text-left md:text-3xl sm:text-2xl text-center "

                  placeholder="your answer"></input></div>
            }</div>
          </div>
          <br />
          {buttonHtml}
        </form>
      </div>
    </Layout>
  );
};

export default AssessmentQuestions;