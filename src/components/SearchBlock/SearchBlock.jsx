export default function SearchBlock({ handleChange, handleSubmit, isSubmitting, resetForm, values, errors, touched }) {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group col-11">
                    <label htmlFor="search" className="form-label">
                        Ingrese el nombre del superheroe</label>
                    <input className="form-control" type="text" name="search" id="search" value={values.search} onChange={handleChange}/>
                    {errors.search && <div>{errors.search}</div>}
                    <button type="submit" className="btn btn-primary col-5" >Buscar</button>
                </div>
            </div>
        </form>
    )
}