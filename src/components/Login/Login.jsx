import React from 'react';
import { Formik } from 'formik';
import "./Login.css"


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
            setTimeout(() => {
                console.log(values)
                console.log(actions)
                actions.setSubmitting(false);
            }, 2000);
        }}
        validate={validation}
    >
        {props =>
            <div className="containerFormLogin">
                <h2 className="titleLogin">Iniciar sesión</h2>
                <form >
                    <div className="form-row">
                        <div className="form-group col-11">
                            <label className="col-form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                //onChange={props.handleChange}
                                //onBlur={props.handleBlur}
                                value={props.values.email}
                                name="email"
                            />

                        </div>
                        <div className="form-group col-11">
                            <label className="col-form-label">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                //onChange={props.handleChange}
                                //onBlur={props.handleBlur}
                                value={props.values.password}
                                name="password"
                            />
                        </div>
                        {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                        <button type="submit" className="btn btn-primary col-5">Enviar</button>
                    </div>
                </form>
            </div>}
    </Formik>
);

export default Login;