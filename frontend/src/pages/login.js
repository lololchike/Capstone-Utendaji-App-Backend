import "../css-files/login.css"
import {useState} from "react"
import axios from "axios"

const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [showError, setShowError] = useState(false)

    const createUser = async() => {
        try{
            setShowError(null)
            const user = await axios.post("http://localhost:4000", {password: password, userName:userName})
    
        }
        catch (error){
            setError(error.response.data.error)
            setShowError(true)
        }

    }


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
<button id="sign-in-button" onClick={createUser}>Continue</button>
{showError && (<p className="error">{error}</p>)}

    </div>
</div>

    );
}
export default Login;