import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignUp.css'

function SignUp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        console.log("Sucessfull");

        let data = JSON.stringify({
            "name": name,
            "email": email,
            "password": password,
        });

        const config= {
            method: "post",
            url: 'http://192.168.2.194:5000/api/users/register',
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
            },
            data: data
        }

        axios(config)
        .then(function (response) {
            console.log('Registerd', response);

            const serverResponse = response.data

            if (serverResponse.status === 1) {
                toast.warning(serverResponse.message)
            } else {
                console.log("obklkjlkject");
                toast.success("Successful")
            }
        })
        .catch(function (error) {
            console.log(error.response.data);
            toast.error("Please Enter Valid Data")
        });
    }

    return (
        <div className="block-colomn"> 
            <h3>Sign Up</h3>
           
            

            <div className="form-group mb-4 main">

            <form class="form" noValidate>
            <div className="form-group mb-4 row">
                <label htmlFor="uname"><b></b></label>
                <input  
                    type="name" 
                    placeholder="Name"
                    name="text" 
                    onChange={e => setName(e.target.value)} 
                    id="name"
                    class="text" 
                    required
                />
                
                <div className="form-group mb-4 row">
                <label htmlFor="Email"><b></b></label>
                <input 
                    type="email" 
                    placeholder="Email Id"
                    name="email" 
                    onChange={e => setEmail(e.target.value)}
                    id="email" 
                    class="text"
                    required
                />
                </div>
                
                <div className="form-group mb-4 row">
                <label htmlFor="form-label"><b> </b></label>
                <input 
                    type="password" 
                    placeholder="Enter Password" 
                    name="password" 
                    id="password" 
                    onChange={e => setPassword(e.target.value)} 
                    className="form-control"
                    class="text"
                    
                    required
                />
                </div>

                <div className="form-group mb-4 row">
                <label htmlFor="form-label"><b> </b></label>
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    name="password" 
                    id="Confirm password" 
                    onChange={e => setPassword(e.target.value)}  
                    className="form-control"
                    class="text" 
                    required
                />
                </div>

                <div className="form-group mb-4 row">
                <button type="submit" class="button" onClick={handleSubmit}>Sign Up</button>
                <NavLink to={"/signIn"}><text>Already Have An Account.</text>Sign In</NavLink>
                </div>
                
                </div>
                </form>

                </div>

                 <ToastContainer position="top-end" className="p-3" autoClose={5000} >
                            
                 </ToastContainer>      
            
        </div>
    )
}

export default SignUp