import { Formik } from 'formik';
import SearchBlock from './SearchBlock';
import heroApi from '../../api/HeroApi';

const validation = values => {
    let errors = {};

    if (!values.search) {
        errors.search = 'Search is required!';
    }

    return errors;
}

const SearchBlockForm = ({setData, setLoading, setError}) => (
    <Formik
        initialValues={{
            search: '',
        }}
       /*onSubmit={(values, actions) => {
           setLoading(true)
           heroApi.getHeroByName(values.search)
           .then(response=>{
           
               if(response.response ==="error"){
                   console.log(response);
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
        }}*/
        validate={validation}
    >
        {props => <SearchBlock {...props} />}
    </Formik>
);

export default SearchBlockForm;