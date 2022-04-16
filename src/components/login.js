import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { signIn } from "../services/auth";
import Layout from "./layout";
import { useFormik } from 'formik';
import { FaSpinner } from 'react-icons/fa';


function Login({ name }) {
    const [processing, setProcessing] = useState(false)
    const navigate = useNavigate()
 
    const resetPageHandler = () => {
        navigate("/reset")
    }
    const [serverError, setServerError] = useState("")
    const formik = useFormik({
        initialValues: {

            email: '',
            password: '',
        },

        validationSchema: yup.object({
            email: yup.string().email('*Invalid email address').required('Required'),
            password: yup.string()
                .required('Required'),
        }),

        onSubmit: async (values) => {
            setProcessing(true)
            try {

                await signIn(values, onSuccess, onFailure)



                setProcessing(false)            } catch (e) {
                console.log(e)
            }
        }
    });

    const onSuccess = () => {
navigate("/profile")
    }

    const onFailure = (message) => {
        setServerError(message)
    }

    return (
        <Layout>

            <h1 className="title lg:text-8xl md: text-5xl">Sign In</h1><br />
            <form className="" onSubmit={formik.handleSubmit}>
            {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 text-md italic">{formik.errors.email}</div>
                ) : null}
                <input id="email" name="email" className="mb-8 md:w-1/2 h-20 shadow-inner rounded py-2 w-1/2 placeholder:text-gray-350 font-light font-md text-left md:text-3xl sm:text-2xl text-center "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="your email address"></input><br />

                                {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-500 text-md italic">{formik.errors.password}</div>
                ) : null}
                <input id="password" name="password" className="mb-8 md:w-1/2 h-20 shadow-inner rounded py-2 w-1/2 placeholder:text-gray-350 font-light font-md text-left md:text-3xl sm:text-2xl text-center"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    type="password"
                    placeholder="your password"></input><br />

                <div className="text-red-500">
                    {serverError}
                </div>
                <button type="submit" 
                    className="ml-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-darker-brown shadow-xl md:w-1/3  uppercase bg-brown text-white font-bold py-2 px-5 rounded-full"
                    >
                    Sign Up
                    {processing && <FaSpinner icon="spinner" className="spinner h-10 w-10 animate-spin" />}
                </button>
                <br />

            </form>
            <div className="cursor-pointer" onClick={resetPageHandler}>Forgot your password?</div>
        </Layout>
    );
}

export default Login;