import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { resetPassword } from "../services/auth";
import { resetPasswordValidationSchema } from "../util/form-utils";
import { FaSpinner } from 'react-icons/fa';
import { useFormik } from 'formik';
import Layout from "./layout";

function Reset({ }) {
    const [processing, setProcessing] = useState(false)

    const [serverError, setServerError] = useState("")

    const formik = useFormik({
        initialValues: {
            Email: "",
        },

        onSubmit: async (values) => {
            setProcessing(true)
            try {

                await resetPassword(values, onSuccess, onFailure)



                setProcessing(false)

            } catch (e) {
                console.log(e)
            }
        },
        validationSchema: resetPasswordValidationSchema,


    });
    const onSuccess = () => {

    }

    const onFailure = (message) => {
        setServerError(message)
    }
    return (
        <Layout>

            <h1 className="title md: text-5xl">Forgot Password?</h1><br />
            <form className="" onSubmit={formik.handleSubmit}>

            <input id="email" name="email" className="mb-8 md:w-1/2 h-20 shadow-inner rounded py-2 w-1/2 placeholder:text-gray-350 font-light font-md text-left md:text-3xl sm:text-2xl text-center "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="your email address"></input><br />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}
            <div className="text-red-500">
                {serverError}
            </div>
            <button type="submit"
                className="ml-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-darker-brown shadow-xl md:w-1/3  uppercase bg-brown text-white font-bold py-2 px-5 rounded-full" >
                Good Luck!                    {processing && <FaSpinner icon="spinner" className="spinner h-10 w-10 animate-spin" />}

            </button>
            </form>
        </Layout>

    );

}
export default Reset;