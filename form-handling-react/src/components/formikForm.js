import React, { useState } from 'react'
import * as Yup from "yup"
import { ErrorMessage, useFormik } from "formik"

const RegistrationForm = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            username: Yup.string().required("username required"),
            email: Yup.string().email("invalid Email Format").required("Email required"),
            password: Yup.string().required("Password required").min(6)


        }),
        onSubmit: (values, { setErrors }) => {
            if (values.username && values.email && values.password) {
                alert("You signed in")
            } else {
                setErrors(ErrorMessage)
            }

        }

    })



    return (
        <>

            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name='username' onChange={formik.handleChange} />
                {formik.touched.username && formik.errors.username && (<p>Enter a username</p>)}

                <label htmlFor="email">email</label>
                <input type="email" name='email' onChange={formik.handleChange} />
                {formik.touched.email && formik.errors.email && (<p>Enter a valid email</p>)}

                <label htmlFor="password">Password</label>
                <input type="password" name='password' onChange={formik.handleChange} />
                {formik.touched.password && formik.errors.password && (<p>Enter a password</p>)}


                <button type='submit'>sign in</button>
            </form>

        </>
    )
}

export default RegistrationForm
