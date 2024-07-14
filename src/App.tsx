import './styles/GlobalStyles.css';


import FormikYup from './components/FormikYup';
import ReactForm from './components/ReactForm';
import { useState } from 'react';

const App = () => {
  enum Pages {
    FORMIK = 'formik',
    REACTFORM = 'reactform'
  }
  const [show, setShow] = useState('reactform')
  return (
    <>
      <div className='container'>
        <button className='btn btn-primary mt-3'
          onClick={() => setShow(show === Pages.FORMIK ? Pages.REACTFORM : Pages.FORMIK)}>
          Switch to {show === Pages.FORMIK ? 'React Hook Form' : 'Formik'}</button>
        {show === Pages.FORMIK ? <FormikYup /> : <ReactForm />}
      </div>
    </>
  );
};

export default App
