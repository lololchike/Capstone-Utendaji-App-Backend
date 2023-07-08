import "../css-files/createUser.css"
import {useState} from "react"
import axios from "axios"

const CreateUser = (props) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    const [station, setStation] = useState("")
    const [team, setTeam] = useState("")

    const [error, setError] = useState(null)
    const [showError, setShowError] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    
    const createUser = async() => {
        try{
            setShowError(false)
            console.log(userName, password) 
            const user = await axios.post("http://localhost:4000", {
                firstName:firstName.toUpperCase(),
                middleName: middleName.toUpperCase(),
                lastName: lastName.toUpperCase(), 
            password: password, 
            userName:userName.toUpperCase(),
            email: email.toLowerCase(),
            role: role,
            station: station,
            team: team
        })
        setShowSuccess(true)

        }
        catch (error){
            setError(error.response.data.error)
            setShowError(true)
            
        }

    }


    return (  
<div id = "create" >
<div id = "createForm" >
    <div id = "Welcome-message" ><h2 id ="create-user-h2"><div></div>Creating new User
    
    <img src="close.png" alt="" onClick={(e)=>props.setShowCreateForm(false)} />
    </h2>
    <strong><p id ="login-welcome-p">Please fill details accurately</p></strong></div>
    <div id="names">
    <div><label htmlFor="">First Name</label>
    <input type="text" className = "createFormElement" placeholder= "First Name" onChange={(e) => setFirstName(e.target.value)} /></div>
   <div><label htmlFor="createFormElement">Middle Name</label>
    <input type="text" className = "createFormElement" placeholder= "Middle Name" onChange={(e) => setMiddleName(e.target.value)} /></div> 
    <div><label htmlFor="">Last Name</label>
    <input type="text" className = "createFormElement" placeholder= "Last Name" onChange={(e) => setLastName(e.target.value)} /></div></div>
    <label htmlFor="">Enter User Email</label>
    <input type="email" className = "createFormElement" placeholder= "Email" onChange={(e) => setEmail(e.target.value)}/>
    <label htmlFor=""> Select Role</label>
    <select  id = "createFormElementselects" onChange={(e) => setRole(e.target.value)}>
    <option value="" className="option" >Click to Select</option>
        <option value="Admin" >Admin</option>
        <option value="Employee">Employee</option>
        <option value="Manager">Manager</option>
    </select>
    <label htmlFor="">Enter Workstation</label>
    <input type="text" className = "createFormElement" placeholder= "Workstation" onChange={(e) => setStation(e.target.value)}/>
    <label htmlFor="">Map to Team</label>
    <select  id = "createFormElementselects" onChange={(e) => setTeam(e.target.value)}>
    <option value="" className="option" >Click to Select</option>
        <option value="Team Pacific: Manager: Temayo James">Team Pacific: Manager: Temayo James</option>
        <option value="Team Yes: Manager: Mike Seblen">Team Yes: Manager: Mike Seblen</option>
        <option value="Team Dollar: Manager: Dennis Rio">Team Dollar: Manager: Dennis Rio</option>
        <option value="Employee">Admins</option>
        <option value="Managers">Managers</option>
    </select>
    <label htmlFor="">Choose a Username</label>
    <input type="text" className = "createFormElement" placeholder= "Username" onChange={(e) => setUserName(e.target.value)}/>
    <label htmlFor="">Set a Password</label>
    <input type="Password" className = "createFormElement" placeholder= "Password" onChange={(e) => setPassword(e.target.value)}/>
<button id="sign-in-button" onClick={createUser}>Save User</button>
{showError && <p className="error">{error}</p>}


    </div>
  {showSuccess && <div className="sucess-backdrop"><div className="sucess">
        <img src="check-mark.png" alt="" />
        <h5>User Created Successfully</h5>
        <button onClick={(e)=>props.setShowCreateForm(false)}>Okay</button></div>
    </div>}  
</div>

    );
}
export default CreateUser;
