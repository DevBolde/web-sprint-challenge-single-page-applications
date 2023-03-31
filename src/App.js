import React, { useState } from "react";
import { Route, Link, Routes, Router} from 'react-router-dom'
import Home from './Components/Home'
import PizzaForm from './Components/PizzaForm'
import axios from 'axios'
import * as yup from 'yup'
import formSchema from "./Validation/FormSchema";

const initialFormValues = {
  name: '',
  size: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  special: ""
}
const initialFormErrors = {
  name: '',
  size: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  special: ""
}
const App = () => {
 const [formValues, setFormValues] = useState(initialFormValues)
 const [formErrors, setFormErrors] = useState(initialFormErrors)

 const handleSubmit = () => {
axios.post('https://reqres.in/api/orders', formValues)
.then(res => console.log(res.data))
.catch(err => console.error(err))
 }

 const validate = (name, value) => {
  yup.reach(formSchema, name)
  .validate(value)
  .then(() => setFormErrors({ ...formErrors, [name]: ''}))
  .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
}

 const handleChange = (name, value) => {
  validate(name, value);
  setFormValues({...formValues, [name]: value});
  
}

  return (
    <div className="App">
      <h1>Bloomtech Eats!</h1>
      <div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route 
        path="/" 
        element={<Home />}
        /> 
        <Route 
        path="/pizza" 
        element={
        <PizzaForm 
        values={formValues} 
        submit={handleSubmit} 
        change={handleChange} 
        errors={formErrors}
        />}
        /> 
      </Routes>
    </div>
  );
};
export default App;
