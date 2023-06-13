import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import EmployeeHome from './pages/employeeHome';
import Login from './pages/login';

function App() {
  
  return (
      
        <div className="App">
          
            <EmployeeHome />
           
        </div>

  );
}

export default App;

/* <Router>
<div className="App">
  <Routes>
    <Route path="/" element = {<Login />}/>
    <Route path="/employee" element = {<EmployeeHome />}/>
  </Routes>
</div>
</Router> */