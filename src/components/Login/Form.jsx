import React from 'react';
import "./Login.css"


const Form = ({ handleChange, handleSubmit, isSubmitting, resetForm, values, errors, touched }) => (
    <div className="containerFormLogin">
        <h2 className="titleLogin">Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group col-11">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        onChange={handleChange}
                        //onBlur={props.handleBlur}
                        value={values.email}
                        name="email"
                    />
                    {errors.email && <div>{errors.email}</div>}
                </div>
                <div className="form-group col-11">
                    <label className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        onChange={handleChange}
                        //onBlur={props.handleBlur}
                        value={values.password}
                        name="password"
                    />
                    {errors.password && <div>{errors.password}</div>}
                </div>

                <button type="submit" className="btn btn-primary col-5" >Enviar</button>
            </div>
        </form>
    </div>
)

export default Form;