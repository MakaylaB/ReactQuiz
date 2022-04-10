import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/auth";
import { useFormik } from 'formik';
import * as yup from 'yup';
import pic from "../static/reg1.jpg";
import Layout from "./layout";

function Person({ form }) {
    const navigate = useNavigate()
    const successHandler = () => {
        navigate("/registerSuccessful")
    }
    const [serverError, setServerError] = useState("")
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validationSchema: yup.object({
            firstName: yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: yup.string().email('Invalid email address').required('Required'),
            password: yup.string()
                .min(6, 'Must be at least 6 characters')
                .required('Required'),
        }),
        onSubmit: values => {
            signUp(values, null, onFailure)
        },
    });

    const onFailure = (message) => {
        setServerError(message)
    }

    return (
<Layout>       
     <div className="grid grid-cols-2  col-span-2 ">
         <div className="mt-40">
     <h1 className="nav text-7xl text-center text-brown">Create Account</h1>
<br/>

                    <form className="" onSubmit={formik.handleSubmit}>

                    <label className=" block uppercase tracking text-gray-700 text-sm font-bold mb-2 " for="grid-first-name">
        First Name
      </label>
                    {formik.touched.firstName && formik.errors.firstName ? (
                            <div className="text-red-500 text-xs italic">{formik.errors.firstName}</div>
                        ) : null}

                        <input id="firstName" name="firstName" className="mb-8 h-20	 md:w-1/2 shadow-inner rounded py-2 w-1/2 placeholder:text-gray-350 font-light font-md text-left md:text-3xl sm:text-2xl text-center"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            placeholder="your first name"></input>

                        <br />
                        <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-first-name">
        Last Name
      </label>
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div className="text-red-500 text-xs italic">{formik.errors.lastName}</div>
                        ) : null}
                        <input id="lastName" name="lastName" className="mb-8 md:w-1/2 h-20		 shadow-inner rounded py-2 w-1/2 placeholder:text-gray-350 font-light  font-md text-left md:text-3xl sm:text-2xl text-center "
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                            placeholder="your last name"></input>

                        <br />
                        <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-first-name">
Email      </label>
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-500 text-xs italic">{formik.errors.email}</div>
                        ) : null}
                        <input id="email" name="email" className="mb-8 md:w-1/2 h-20  shadow-inner rounded py-2 w-1/2 placeholder:text-gray-350 font-light font-md text-left md:text-3xl sm:text-2xl text-center "
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            placeholder="name@domain.com"></input>

                        <br />
                        <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-first-name">
Password      </label>
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-red-500 text-xs italic">{formik.errors.password}</div>

                        ) : null}
                        <input type="password" id="password" name="password" className="mb-8 md:w-1/2 h-20  shadow-inner rounded py-2 w-1/2 placeholder:text-gray-350 font-light font-md text-left md:text-3xl sm:text-2xl text-center"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            placeholder="••••••"></input>


                        <br />
                        <div className="text-red-500">
                            {serverError}
                        </div>
                        <button type="submit" onclick={successHandler}
                            className="ml-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-xl hover:bg-darker-brown  md:w-1/3  uppercase bg-brown text-white font-bold py-2 px-5 rounded-md" >
                            Sign Up
                        </button>

                    </form>
                    </div>
                    <img className="h-screen w-full" src={pic}/>

                    </div>
                    </Layout>

    );
}

export default Person;