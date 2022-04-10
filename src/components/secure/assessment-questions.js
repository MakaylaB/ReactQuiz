import { useFormik } from 'formik';
import { Formik, Form, Field } from 'formik';
import Layout from "../layout";
import { useState } from "@hookstate/core";


const AssessmentQuestions = ({ listofQuestions }) => {
    const processing = useState();
 const currentQuestionIndex = useState(0);
 const formik = useFormik({
   initialValues: {},
   onSubmit: (values) => {
     processing.set(true);
   },
   // validationSchema: loginvalidationSchema,
 });
 const index = currentQuestionIndex.get();
 const q = listofQuestions[index];
 const next = () => {
   currentQuestionIndex.set(currentQuestionIndex.get() + 1);
 };
 let buttonHtml;
 if (index === 0) {
   buttonHtml = (
     <>
       <input type="button" value="Next" />
     </>
   );
 } else if (index === listofQuestions.length - 1) {
   buttonHtml = (
     <>
       <input
         onClick={() => {
           currentQuestionIndex.set(currentQuestionIndex.get() - 1);
         }}
         type="button"
         value="Previous"
       />
       <input type="button" value="Submit" />
     </>
   );
 } else {
    buttonHtml = (
   <>
     <input type="button" value="Next" onClick={next} />
   </>)
 }

    return (
        <Layout>
        <form onSubmit={formik.handleSubmit}>
                    <div key={`questions${index}`}>
                        <div>Question {index + 1}</div>
                        <div>{q?.question}</div>
                        <div>{q?.type === "multiple-choice" ?
                            <>{q?.options.map((o, i) => {
                                return <div key={`option${index}`}>
                                    <input type="radio"
                                        id={`option${index}`}
                                        name={`option${index}`}
                                        value="" />
                                            {o}
                                    </div>


                            })}</>
                            :

                            <div>
                    <input className="mb-8 md:w-1/2 h-20 shadow-inner rounded py-2 w-1/2 placeholder:text-gray-350 font-light font-md text-left md:text-3xl sm:text-2xl text-center "

                    placeholder="your answer"></input></div>
                        }</div>
                    </div>
            <br/>
               {buttonHtml}
        </form>
        </Layout>
    );
};

export default AssessmentQuestions;