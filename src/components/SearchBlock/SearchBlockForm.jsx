import { Formik } from 'formik';
import axios from "axios"
import SearchBlock from './SearchBlock';
import heroApi from '../../api/HeroApi';

const validation = values => {
    let errors = {};

    if (!values.search) {
        errors.search = 'El campo no puede estar vacio';
    }

    return errors;
}

const SearchBlockForm = () => (
    <Formik
        initialValues={{
            search: '',
        }}
       onSubmit={(values, actions) => {
           heroApi.getHeroBySearch(values.search)
           .then(response=>{
               console.log(response);
           })
           .catch(error=>{
               console.log(error);
           })

            /*axios
                .get(`http://superheroapi.com/api/10227290079499431/search/${values.search}`,{
                    mode: 'no-cors',
                    header: {
                      'Access-Control-Allow-Origin':'*',
                    }})
                .then(response => {
                    console.log(response);
                    //localStorage.setItem("token", response.data.token);
                   //window.location.pathname="/"
                })
                .catch(error => {
                    console.log(error.response);
                })*/

        }}
        validate={validation}
    >
        {props => <SearchBlock {...props} />}
    </Formik>
);

export default SearchBlockForm;