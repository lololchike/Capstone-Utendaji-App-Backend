import "../css-files/employeeHome.css"

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

