import '../pages/CSS/loginSignup.css'
import { useState } from 'react'
const LoginSignup = () => {

    const [state, setState] = useState("Login");
    const [formData, SetFormData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const changeHandler = (e) => {
        SetFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const login = async () => {
        console.log("Login Function Executed", formData)
        let responseData;
        await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then((response) => response.json()).then((data) => {
            responseData = data;
        })
        if (responseData.success) {
            localStorage.setItem("auth-token", responseData.token);
            window.location.replace("/");
        } else {
            alert(responseData.message || responseData.msg || "An error occurred");
        }
    }

    const signup = async () => {
        console.log("Sign Up Function Executed", formData)
        let responseData;
        await fetch("http://localhost:4000/signup", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then((response) => response.json()).then((data) => {
            responseData = data;
        })
        if (responseData.success) {
            localStorage.setItem("auth-token", responseData.token);
            window.location.replace("/");
        } else {
            alert(responseData.message || responseData.msg || "An error occurred");
        }
    }

    return (
        <div className='loginSignup'>
            <div className="loginSignup-container">
                <h1>{state}</h1>
                <div className="loginSignup-fields">
                    {
                        state === "Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' /> : ""
                    }

                    <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Id' />

                    <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
                </div>
                <button onClick={() => {
                    state === "Sign Up" ? signup() : login()
                }}>Continue</button>
                {
                    state === "Sign Up" ?
                        <p className="loginSignup-login">Already have an Account <span onClick={() => {
                            setState("Login")
                        }}>Login</span></p>
                        : <p className="loginSignup-login">Create an Account <span onClick={() => {
                            setState("Sign Up")
                        }}>Click Here</span></p>
                }
                <div className="loginSignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By Continuing, I agree to the terms of use & Privacy Policy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup