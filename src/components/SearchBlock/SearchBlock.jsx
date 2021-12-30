import { Link } from "react-router-dom"
import "./SearchBlock.css"

export default function SearchBlock({ handleChange, handleSubmit, isSubmitting, resetForm, values, errors, touched }) {
    return (
        <div className="containerSearchBlock">
            
            <form onSubmit={handleSubmit}>
            
                <div className="form-group">
                <h3>Welcome to SuperTeam</h3>
                    <h4>Add a superhero to your SuperTeam</h4>
                    <div>
                        <input className="form-control" type="text" name="search" id="search" value={values.search} placeholder="Superhero´s name" onChange={handleChange} />
                        <Link to={`/search/${values.search}`} ><button type="submit" className="btn btn-primary" > Search </button></Link>
                    </div>
                </div>

            </form>
        </div>
    )
}