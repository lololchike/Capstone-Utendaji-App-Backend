import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import EmployeeHome from './pages/employeeHome';
import Login from './pages/login';
import ManagerHome from "./pages/managerHome";
import AdminHome from "./pages/adminHome";

function App() {
  
  return (
      

<div className="App">
<BrowserRouter>
<Routes>
    <Route path="/*" element = {<Login />}/>
    <Route path="/employee" element = {<EmployeeHome />}/>
    <Route path="/manager" element = {<ManagerHome />}/>
    <Route path="/admin" element = {<AdminHome />}/>
    </Routes>
    </BrowserRouter>
</div>
    



  );
}

export default App;

/* 

<div className="App">
<Router>
<Routes>
    <Route path="/" element = {<Login />}/>
    <Route path="/employee" element = {<EmployeeHome />}/>
    </Routes>
    </Router>
</div>

 */