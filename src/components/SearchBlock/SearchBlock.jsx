import "./SearchBlock.css"

export default function SearchBlock({ handleChange, handleSubmit, isSubmitting, resetForm, values, errors, touched }) {
    return (
        <div className="containerSearchBlock">
            
            <form onSubmit={handleSubmit}>
            
                <div className="form-group">
                <h3>Bienvenidos a SuperTeam</h3>
                    <h4>Agregá un superheroe a tu equipo</h4>
                    <div>
                        <input className="form-control" type="text" name="search" id="search" value={values.search} placeholder="Nombre del superheroe" onChange={handleChange} />
                        <button type="submit" className="btn btn-primary" >Buscar</button>
                    </div>
                </div>

            </form>
        </div>
    )
}