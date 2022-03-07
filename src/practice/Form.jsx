

import React,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import './Form.css'

function Form() {
    const initialValues = { username: "", email: "", password: "",confirmPassword:"" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setformErrors] = useState({ })
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange= (e)=>{
        const {name , value}= e.target;
        setFormValues({ ...formValues, [name]: value})
        console.log(formValues)
    }

    const handleSubmit= (e) =>{
            e.preventDefault();  
            setformErrors( validate(formValues))
            setIsSubmit(true)
    }

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
        else if(!regex.test(values.email)){
            errors.email=" this is not a valid email"
        }

        if (!values.password){
            errors.password="password is required"
        }
        else if(values.password.length < 4){
            errors.password=" password must be more than 4 character "
            }else if(values.password.length >10){
            errors.password=" password not exceeded limit 10 characters "
        }
        if (values.confirmPassword!==values.password) {
            errors.confirmPassword="Passwords do not match."
            // return false;
        }
        // return true;
        return errors;
    }

    return(
        <div className="container">

            {Object.keys(formErrors).length===0 && isSubmit? 
            (<div className="ui message success">SIGNED IN Successfully</div>):
            (<pre>{JSON.stringify(formValues, undefined, 2)}</pre>)
            }
              
            <form onSubmit={handleSubmit}>
                <h1>log in </h1>
                <div className="ui divider"></div>
                <div className="ui form">
                    
                    <p style={{color: "red"}}>{formErrors.username}</p>

                    <div className="field">
                        <label>User Name</label>
                        <input 
                            type="text"
                            className="text" 
                            name="username"
                            placeholder="User Name" 
                            value={formValues.username}
                            onChange={handleChange}
                        />
                     </div>

                     <p style={{color: "red"}}>{ formErrors.email}</p>
                     <div className="field">
                        <label>Email-Id</label>
                        <input 
                            type="text" 
                            className="text" 
                            name="email"
                            placeholder="Email-Id" 
                            value={formValues.email}
                            onChange={handleChange}
                        />
                     </div>
                       
                     <p style={{color: "red"}}>{formErrors.password}</p>
                     <div className="field">
                        <label>Password</label>
                        <input 
                        type="Password" 
                        className="text"
                        name="password" 
                        placeholder="Password" 
                        value={formValues.password}
                        onChange={handleChange}
                        />
                     </div>

                     <p style={{color: "red"}}>{formErrors.confirmPassword}</p>
                     <div className="field">
                        <label>Confirm Password</label>
                        <input 
                        type="confirmPassword" 
                        className="text"
                        name="confirmPassword" 
                        placeholder="ConfirmPassword" 
                        onChange={handleChange}
                        />
                     </div>
                         <NavLink style={{ textDecoration: 'none' }}
                         className="fluid ui button blue"
                            to={'/home'}
                         >
                            Submit 
                        </NavLink>
                </div>
            </form>
        </div>
    )
}

export default Form
