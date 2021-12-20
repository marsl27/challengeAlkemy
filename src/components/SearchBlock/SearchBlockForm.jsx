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

const SearchBlockForm = ({setData, setLoading, setError}) => (
    <Formik
        initialValues={{
            search: '',
        }}
       onSubmit={(values, actions) => {
           setLoading(true)
           heroApi.getHeroBySearch(values.search)
           .then(response=>{
               if(response.response ==="error"){
                   setError(response.error)
                   setData([]);
               }else{
                    setData(response.results);
                    setError("")
               }
               
               setLoading(false);
               
           })
           .catch(error=>{
               setError(error.message);
               setLoading(false);
           })
        }}
        validate={validation}
    >
        {props => <SearchBlock {...props} />}
    </Formik>
);

export default SearchBlockForm;