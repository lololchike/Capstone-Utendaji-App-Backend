import { useState } from "react";
import { Link } from 'react-router-dom';
import ChatModal from "../componets/chat-modal";
import MyJobs from "../componets/myjobs";
import Performance from "../componets/myperformance";
import Team from "../componets/myteam";
import "../css-files/employeeHome.css";


const EmployeeHome = (props) => {
  const [isAdmin, setIsAdmin] = useState(false)
  
  const openChat = () => {
    document.getElementById("chat-modal").style.display = "block";
  };
  const showPerformance = () => {
    document.getElementById("middlegrid").style.display = "grid";
    document.getElementById("team-grid").style.display = "none";
    document.getElementById("job-grid").style.display = "none";
    document.getElementById("content-heading").innerHTML = props.performanceHeading;
  };
  const showTeam = () => {
        document.getElementById("middlegrid").style.display = "none";
        document.getElementById("job-grid").style.display = "none";
        document.getElementById("team-grid").style.display = "grid";
        document.getElementById("content-heading").innerHTML = props.teamHeading;
      };
      const showJobs = () => {
        document.getElementById("middlegrid").style.display = "none";
        document.getElementById("team-grid").style.display = "none";
        document.getElementById("job-grid").style.display = "grid";
        document.getElementById("content-heading").innerHTML = "Jobs you've applied";
      };
  

  return (
    <div id="employee-home">
      <div id="header">
       <Link to="/" className="navbar-logo"> <img id="navbar-logo" src="logo-removebg.png" alt="" /> </Link>
        <ul id="navbarlist">
          <li>
           <Link to="/"> <img className="navbaritem" src="home.png" alt="" /></Link>
          </li>
          <li>
            <img className="navbaritem" src="bell.png" alt="" />
          </li>
          <li>
            <img className="navbaritem" src="message.png" alt="" />
          </li>
          <li>
           <Link to="/"> <img className="navbaritem" src="log-out.png" alt="" /></Link>
          </li>
        </ul>
      </div>
      <div id="sidebar">
        <div id="avatardiv">
          <h3>{(props.staffName)[0]}{(props.staffName)[(props.staffName).indexOf(" ") + 1]}</h3>
        </div>
        <h4 id="employeeNameonsidebar">{props.staffName}</h4>
        <p id="employee-tittle">{props.staffRole}</p>
        <strong onClick={showPerformance}>
          <p>{props.performanceTitle}</p>
        </strong>
        <strong onClick = {showTeam}>
          <p>{props.adminTeamButton}</p>
        </strong>
        <strong onClick = {showJobs}>
          <p>{props.adminJobButton}</p>
        </strong>
        <strong>
          <p>My Messages</p>
        </strong>
      </div>
      <div id="rightbar">
        <h4>Online Colleagues</h4>
        <div id="online-employee">
          <strong>
            <p>Hoodie Guy</p>
          </strong>
          <div id="greenonlinelight"></div>
          <img
            className="sendmessagesvg"
            src="chat.png"
            alt="image"
            onClick={openChat}
          />
        </div>
        <div id="online-employee">
          <strong>
            <p>Excel Wizard</p>
          </strong>
          <div id="greenonlinelight"></div>
          <img
            className="sendmessagesvg"
            src="chat.png"
            alt="image"
            onClick={openChat}
          />
        </div>
        <div id="online-employee">
          <strong>
            <p>Lunchtime Legend</p>
          </strong>
          <div id="greenonlinelight"></div>
          <img
            className="sendmessagesvg"
            src="chat.png"
            alt="image"
            onClick={openChat}
          />
        </div>
        <div id="online-employee">
          <strong>
            <p>Coffee Queen</p>
          </strong>
          <div id="greenonlinelight"></div>
          <img
            className="sendmessagesvg"
            src="chat.png"
            alt="image"
            onClick={openChat}
          />
        </div>
        <div id="online-employee">
          <strong>
            <p>Keyboard Ninja</p>
          </strong>
          <div id="greenonlinelight"></div>
          <img
            className="sendmessagesvg"
            src="chat.png"
            alt="image"
            onClick={openChat}
          />
        </div>
        <div id="online-employee">
          <strong>
            <p>Office Deejay</p>
          </strong>
          <div id="greenonlinelight"></div>
          <img
            className="sendmessagesvg"
            src="chat.png"
            alt="image"
            onClick={openChat}
          />
        </div>
        <div id="online-employee">
          <strong>
            <p>Email Lord</p>
          </strong>
          <div id="greenonlinelight"></div>
          <img
            className="sendmessagesvg"
            src="chat.png"
            alt="image"
            onClick={openChat}
          />
        </div>
      </div>
<h4 id="content-heading">{props.performanceHeading}</h4>
      
     {!props.isAdmin && <Team />}
     {!props.isAdmin && <Performance />}
     {!props.isAdmin && <MyJobs />}
      
      <div id="footer">
        <h6 id="footer-left">
          © {new Date().getFullYear()} Copyright Group-1{" "}
        </h6>
        <h6 id="footer-right">group-1@groups.org </h6>
      </div>
      <ChatModal />
    </div>
  );
  
};
EmployeeHome.defaultProps = {
  performanceTitle: "My Performance",
  staffName : "Elisa Marie",
  staffRole : "Employee",
  teamHeading : "Team Pacific - 16 Members ||| Manager: Temayo James",
  performanceHeading : "Your Performance at a Glance",
  adminTeamButton : "My Team",
  adminJobButton : "My Jobs",
};
=======
const EmployeeHome = () => {
    return (
      <div id="employee-home">
        <div id="header">
          <img id="navbar-logo" src="logo-removebg.png" alt="" />
          <ul id="navbarlist">
            <li>
              <img className="navbaritem" src="home.png" alt="" />
            </li>
            <li>
              <img className="navbaritem" src="bell.png" alt="" />
            </li>
            <li>
              <img className="navbaritem" src="message.png" alt="" />
            </li>
          </ul>
        </div>

        <div id="sidebar">
          <div id="avatardiv">
            <h3>EM</h3>
          </div>
          <h4 id="employeeNameonsidebar">Elisa Marie</h4>
          <p id="employee-tittle">Employee</p>
          <strong>
            <p>My Performance</p>
          </strong>
          <strong>
            <p>My Team</p>
          </strong>
          <strong>
            <p>My Jobs</p>
          </strong>
          <strong>
            <p>My Messages</p>
          </strong>
        </div>
        <div id="rightbar">
          <h4>Online Colleagues</h4>
          <div id="online-employee">
            <strong>
              <p>Hoodie Guy</p>
            </strong>
            <div id="greenonlinelight"></div>
            <img className="sendmessagesvg" src="chat.png" alt="image" />
          </div>
          <div id="online-employee">
            <strong>
              <p>Excel Wizard</p>
            </strong>
            <div id="greenonlinelight"></div>
            <img className="sendmessagesvg" src="chat.png" alt="image" />
          </div>
          <div id="online-employee">
            <strong>
              <p>Lunchtime Legend</p>
            </strong>
            <div id="greenonlinelight"></div>
            <img className="sendmessagesvg" src="chat.png" alt="image" />
          </div>
          <div id="online-employee">
            <strong>
              <p>Coffee Queen</p>
            </strong>
            <div id="greenonlinelight"></div>
            <img className="sendmessagesvg" src="chat.png" alt="image" />
          </div>
          <div id="online-employee">
            <strong>
              <p>Keyboard Ninja</p>
            </strong>
            <div id="greenonlinelight"></div>
            <img className="sendmessagesvg" src="chat.png" alt="image" />
          </div>
          <div id="online-employee">
            <strong>
              <p>Office Deejay</p>
            </strong>
            <div id="greenonlinelight"></div>
            <img className="sendmessagesvg" src="chat.png" alt="image" />
          </div>
          <div id="online-employee">
            <strong>
              <p>Email Lord</p>
            </strong>
            <div id="greenonlinelight"></div>
            <img className="sendmessagesvg" src="chat.png" alt="image" />
          </div>
        </div>

        <input type="text" id="searchbar" placeholder="Search" />
        <div id="middlegrid">
          <div className="KPI-boxes">
            <h4>Handling Time </h4>
            <h2>3.27</h2>
          </div>
          <div className="KPI-boxes">
            <h4>Revenue </h4>
            <h2>600,000</h2>
          </div>
          <div className="KPI-boxes">
            <h4>MIA (Days) </h4>
            <h2>1</h2>
          </div>
          <div className="KPI-boxes">
            <h4>Total Customers </h4>
            <h2>53</h2>
          </div>
          <div className="KPI-boxes">
            <h4>Propositions </h4>
            <h2>50</h2>
          </div>
          <div className="KPI-boxes">
            <h4>Airtime </h4>
            <h2>70,000</h2>
          </div>
          <div className="KPI-boxes">
            <h4>Devices</h4>
            <h2>30</h2>
          </div>
          <div className="KPI-boxes">
            <h4>Total Sales</h4>
            <h2>2,000,000</h2>
          </div>
        </div>

        <div id="footer">
          <h6 id="footer-left">
            © {new Date().getFullYear()} <marquee>Copyright Group-1</marquee>  {" "}
          </h6>
          <h6 id="footer-right"> <marquee> Group-1@groups.org</marquee></h6>
        </div>
      </div>
    );
}
 
export default EmployeeHome;