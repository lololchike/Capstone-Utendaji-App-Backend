import "../css-files/login.css"
import {useState} from "react"

const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")


    return (  
<div id = "login" >
<div id = "loginForm" >
    <img src="logo.JPG" alt="logo" id="login-logo"/>
    <div id = "Welcome-message" ><h2 id ="login-welcome-h2">Welcome to Utendaji</h2>
    <strong><p id ="login-welcome-p">Maximizing Effort</p></strong></div>
    <label htmlFor="login-ursername">Username</label>
    <input type="text" id = "login-ursername" placeholder= "Username" onChange={(e) => setUserName(e.target.value)} />
    <label htmlFor="login-password">Password</label>
    <input type="Password" id = "login-password" placeholder= "Password" onChange={(e) => setPassword(e.target.value)}/>
<button id="sign-in-button" onClick={(e)=> {console.log(userName, password)}}>Continue</button>

    </div>
</div>

    );
}
 
export default Login;