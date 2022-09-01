// import { useState } from 'react';
import './App.css';
import './form.css';
import React, {useState, useEffect}from 'react';

function RegisterForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        const data = {
            email:email,
            password:password
           
        }
        alert(data);
    }

    // useEffect(()=> {
    // setCount(count+1)
    // },[])

    return (

        // <div>
        //     <p>{count}</p>
        //     <button 
        //     onClick = {()=>{setCount(count+1)}} > Click me!
        //     </button>
        // </div>

        <form onSubmit={handleSubmit} > 
            <div class="firstlines">
            <p id="logo"> EddieShop</p>
            <p id="signup">Don't have an account? <span>Sign Up</span></p>
            </div>
            <div class="welcome">
            <p> Welcome Back</p>
            </div>
            <div class="email">
            <p><label>Your Email</label></p>
            <input type="email" name="email" required placeholder='Enter email' 

            value={email}
            onChange = {(e) => {setEmail(e.target.value)}} 
            />

            </div>
             <div class="password">
             <p><label>Password</label></p>
            <input type="password" name="password" required placeholder='Enter password'

            value={password}
            onChange = {(e) => {setPassword(e.target.value)}} 
             />
             </div>
             <div class="logincheck">
            <div class="checking">
            <input type="checkbox" name="check"/>
            <label>Keep me logged in</label>
            </div>
           <div class="forgot">
             <p> Forgot password?</p>
             </div>
            </div>
            <div class="loginbtn">
            <button type='submit'>Login</button>
            </div>
           <div class="or">
                <hr></hr>or<hr></hr>
            </div>

            <div class="icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-google"></i>
            <i class="fa-brands fa-instagram"></i>

        </div>
            
          <div class="image">
            <img src='https://media.istockphoto.com/vectors/young-happy-woman-rides-a-bicycle-in-the-autumn-city-the-concept-of-vector-id1267536905?k=20&m=1267536905&s=612x612&w=0&h=nwMhU6AOrjTNxhYDy1YyqZFlKV66H4now4PxjZxtA8g=' width="400px" alt='woman riding a bicycle'></img></div>
       
        </form>
    );

}

export default RegisterForm;