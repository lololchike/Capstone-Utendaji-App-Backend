import "../css-files/login.css"

const Login = () => {


    return (  
<div id = "login" >
<div id = "loginForm" >
    <img src="logo.JPG" alt="logo" id="login-logo"/>
    <div id = "Welcome-message" ><h2 id ="login-welcome-h2">Welcome to Utendaji</h2>
    <strong><p id ="login-welcome-p">Maximizing Effort</p></strong></div>
    <label htmlFor="login-ursername">Username</label>
    <input type="text" id = "login-ursername" placeholder= "Username"/>
    <label htmlFor="login-password">Password</label>
    <input type="Password" id = "login-password" placeholder= "Password" />
<button id="sign-in-button">Continue</button>

    </div>
</div>

    );
}
 
export default Login;