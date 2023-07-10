import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import EmployeeHome from './pages/employeeHome';
import Login from './pages/login';
import ManagerHome from "./pages/managerHome";
import AdminHome from "./pages/adminHome";
import { useAuthContext } from "./hooks/useAuthContex";

function App() {
  const { currentUser } = useAuthContext();

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/*" element={!currentUser && <Login />} />
          <Route path="/employee" element={currentUser ? <EmployeeHome /> : <Navigate to="/" />} />
          <Route path="/manager" element={currentUser ? <ManagerHome /> : <Navigate to="/" />} />
          <Route path="/admin" element={currentUser.role === "Admin" ? <AdminHome /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
