import React from 'react';
import "./Login.css"


const Form = ({ handleChange, handleSubmit, isSubmitting, resetForm, values, errors, touched }) => (
    <div className="containerFormLogin">

        <form onSubmit={handleSubmit}>
            <h2 className="titleLogin">Iniciar sesión</h2>
            <div className="form-row">
                <div className="form-group col-11">
                    
                    <input
                        type="email"
                        className="form-control"
                        onChange={handleChange}
                        //onBlur={props.handleBlur}
                        value={values.email}
                        name="email"
                        placeholder="Email"
                    />
                    {errors.email && <div className="errors">{errors.email}</div>}
                </div>
                <div className="form-group col-11">
                   
                    <input
                        type="password"
                        className="form-control"
                        onChange={handleChange}
                        //onBlur={props.handleBlur}
                        value={values.password}
                        name="password"
                        placeholder="Password"
                    />
                    {errors.password && <div className="errors">{errors.password}</div>}
                </div>

                <button type="submit" className="btn btn-primary col-5 loginButton" >Enviar</button>
            </div>
        </form>
    </div>
)

export default Form;