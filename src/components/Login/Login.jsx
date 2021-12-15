import React from 'react';
import { Formik } from 'formik';
import "./Login.css"
import Form from './Form';
import axios from "axios"
import Swal from 'sweetalert2'


const validation = values => {
    let errors = {};

    if (!values.email) {
        errors.email = 'Email is required!';
    }

    if (!values.password) {
        errors.password = 'Password is required!';
    }

    return errors;
}

const Login = () => (
    <Formik
        initialValues={{
            email: '',
            password: '',
        }}
        onSubmit={(values, actions) => {

            axios
                .post("http://challenge-react.alkemy.org/", {
                    email: values.email,
                    password: values.password
                })
                .then(response => {
                    localStorage.setItem("token", response.data.token);
                   window.location.pathname="/"
                })
                .catch(error => {
                    console.log(error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                      })
                })

        }}
        validate={validation}
    >
        {props => <Form {...props} />}
    </Formik>
);

export default Login;