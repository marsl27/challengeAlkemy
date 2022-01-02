import React from 'react';
import { Formik } from 'formik';
import "./Login.css"
import Form from './Form';
import axios from "axios"
import Swal from 'sweetalert2'

const credentials = {
    email: "challenge@alkemy.org",
    password: "react"
}
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
                    console.log(response);
                    sessionStorage.setItem("log", "true")
                    sessionStorage.setItem("token", response.data.token);
                    sessionStorage.setItem("email", values.email);
                    window.location.pathname = "/challengeAlkemy"
                })
                .catch(error => {
                    

                    //Hardcodee las credenciales para que funcione con github pages ya que no funcionaba por error de mixed content debido a que la url de la app es https y el endpoint
                    //que entrega el token es http
                    if (values.mail === credentials.email && values.password === credentials.password) {
                        sessionStorage.setItem("log", "true")
                        sessionStorage.setItem("token", "");
                        sessionStorage.setItem("email", values.email);
                        window.location.pathname = "/challengeAlkemy"
                    } else {
                      console.log(error);
                    }
                })

        }}
        validate={validation}
    >
        {props => <Form {...props} />}
    </Formik>
);

export default Login;