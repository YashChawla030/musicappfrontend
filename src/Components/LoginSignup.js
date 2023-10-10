import React from "react";
import { useState } from 'react';
import '../styles/LoginSignup.css';
import { useNavigate} from 'react-router-dom';


const LoginSignUp = () => {
    const [name,setName] = useState(null);
    const [password,setPassword] = useState(null);
    const [email,setEmail] = useState(null);
    const [isError, setError] = useState(false);
    const navigate = useNavigate();
      const getUsersSignup= async (e) => {
        e.preventDefault();
        console.log("Handler Call")
    
        async function makeRequest() {
          try {
            const response = await fetch("http://localhost:8081/addUsers",{headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({"name": name, "emailId": email, "password": password})})
  
        
            console.log('response.status: ', response.status); 
            console.log(response);
            if(response.status===200){
              console.log("Navigation ot SignUp")
              
            }
          } catch (err) {
            console.log(err);
          }
        }
        
        makeRequest();
      
        
      }
    const getUsersLogin= async (e) => {
      if (name=== "" && password === "") {
        return
      }
      e.preventDefault();
      console.log("Handler Call")
  
      async function makeRequestlogin() {
        try {
          const response = await fetch("http://localhost:8081/authenticate",{headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({"username": name, "password": password})})
      
          console.log('response.status: ', response.status); 
          console.log(response);
          if(response.status===200){
            let jsonData = await response.json();
            console.log("Value of dta is "+JSON.stringify(jsonData));
            let stringifyJsondata = JSON.stringify(jsonData);
            let temp  = JSON.parse(stringifyJsondata);
            if (temp["authenticate"]){
            console.log("Navigation ot SignUp")
            navigate('/dashboard');
            }else{
              setError(true)
            }
          }
        } catch (err) {
          console.log(err);
        }
      }
      
      makeRequestlogin();
    
      
    }
    return (
        <div className="mybody">
        <div className="main">
            <input type={'checkbox'} id="chk" aria-hidden="true"/>
            <div className="login">
				<form onSubmit={getUsersLogin}>
					<label for="chk" aria-hidden="true">Welcome</label>
                    <input className='inputt-field' type={'text'} autoComplete={"new-user"} placeholder={'Enter Your username'} onChange={e => setName(e.target.value)}/>
                    <input className='inputt-field' type={'password'} autoComplete="new-password" placeholder={'Enter Your Password'} onChange={e => setPassword(e.target.value)}/>
                    { isError && <label style={{color: 'black', fontSize: 12}}>Username or Password is Incorrect!</label> }
					<button>Login</button>
				</form>
			</div>
            <div className="signup">
				<form onSubmit={getUsersSignup}>
					<label for="chk" aria-hidden="true">New Account</label>
					<input className='inputt-field' type={'text'} autoComplete="new-password" placeholder={'Enter Your Name'} onChange={e => setName(e.target.value)}/>
                    <input className='inputt-field' type={'text'} autoComplete={"new-password"} placeholder={'Enter Your Email'} onChange={e => setEmail(e.target.value)}/>
					<input className='inputt-field' type={'password'} autoComplete="new-password" placeholder={'Enter Your Password'} onChange={e => setPassword(e.target.value)}/>
					<button>Sign Up</button>
				</form>
			</div>
        </div>
        </div>
    )
}

export default LoginSignUp;