import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import {showSuccess} from 'react-toastify'

import './SignIn.css';


function SignIn(){ 

    //const notify = () =>toast("Wow so easy!");

    
   // const [showB, setShowB] = useState(true);
   
  //  const toggleShowB = () => setShowB(!showB);

    //{ showSuccess('Task Submited Successfully', toast);}

    // const [showA, setShowA] = useState(true);
    // const toggleShowA = () => setShowA(!showA);


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = e => {
      e.preventDefault()
      console.log("Sucessfull");

      let data = JSON.stringify({
         
          "email": email,
          "password": password,
      });

      const config= {
          method: "post",
          url: 'http://192.168.2.194:5000/api/users/signin',
          headers: { 
              'Accept': 'application/json', 
              'Content-Type': 'application/json',
          },
          data: data
      }

      axios(config)
      .then(function (response) {
          console.log('Sign In Sucsessfull', response);

          if (response.data === false) {
              toast.warning(" Please Enter valid data")

          } else {
              console.log(" ");
              toast.success("Successful")

          }
      })
      .catch(function (error) {
          console.log(error.response.data);
          toast.error("Please Enter Valid Data")

      });
  }

  //Error Handling

  const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setformErrors] = useState({ })
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange= (e)=>{
        const {name , value}= e.target;
        setFormValues({ ...formValues, [name]: value})
        console.log(formValues)
    }

    // const handleSubmit= (e) =>{
    //         e.preventDefault();  
    //         setformErrors( validate(formValues))
    //         setIsSubmit(true)
    // }

    useEffect(( )=>{
        console.log("formErrors", formErrors)
        console.log(formValues)               

        if(Object.keys(formErrors).length===0 && isSubmit){
            console.log(formValues)               
        }
    },[formErrors]
    );

    const validate = (values) =>{
        const errors ={  }
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.username){
            errors.username="username is required"
        }

        if (!values.email){
        errors.email="email is required"
        }
        
        if (!values.password){
            errors.password="password is required"
        }
        else if(values.password.length < 4){
            errors.password=" password must be more than 4 character "
            }else if(values.password.length >10){
            errors.password=" password not exceeded limit 10 characters "
        }

        return errors;
    }
    return(
        <div className="container" class="row1"> 
         {/* {Object.keys(formErrors).length===0 && isSubmit? 
            (<div className="ui message success">SIGNED IN Successfully</div>):
            (<pre>{JSON.stringify(formValues, undefined, 2)}</pre>)
            } */}

            <h3 class="SignIn">Sign In</h3>

              <div className="form-group mb-4" class="row2">

                            <form class="form" noValidate>

                            <div className="form-group mb-4 row">
                            <p>{formErrors.email}</p>
                            <label for="uname"><b></b></label>

                            < input type="email"
                            class="text" 
                            placeholder="Email Id"
                            name="email" 
                            // value={formValues.email}
                            onChange={e => setEmail(e.target.value)}
                           
                            required
                            />
                            </div>
                                        
                            <div className="form-group mb-4 row">
                            <p>{formErrors.password}</p>
                            <label for="form-label"><b></b></label>
                            <input type="password" 
                            class="text" 
                            placeholder="Enter Password" 
                            name="password"
                            // value={formValues.password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            />
                            </div>


                            <div className="form-group mb-4 row">
                            <button 
                            type="submit" 
                            class="button, far fa-eye" 
                            id="togglePassword"
                            onClick={handleSubmit } 
                           > 
                            Sign In
                            </button>
                            
                            
                            </div>
                           
                            <div className="form-group mb-4 row">  
                            <NavLink to={"/signUp"}>Dont Have An Acount? Sign Up</NavLink>
                            </div>

                            
                            </form>

                           
              </div>  
                             <ToastContainer position="top-end" className="p-3" autoClose={5000} >
                            
                            </ToastContainer>
            
        </div>
        
    );
}

export default SignIn 