import "../css-files/employeeHome.css"

const EmployeeHome = () => {
    return ( 

        <div id="employee-home">
            <div id="header"></div>

        <div id="sidebar">
        <div id="avatardiv"><h3>EM</h3></div>
        <h4 id="employeeNameonsidebar">Elisa Marie</h4>
        <strong><p>My Performance</p></strong>
        <strong><p>My Team</p></strong>
        <strong><p>My Jobs</p></strong>
        <strong><p>My Messages</p></strong>
    
        </div>
        <div id="rightbar">
            <h4>Online Colleagues</h4>
            <div id="online-employee">
            <strong><p>Hoodie Guy</p></strong>
            <div id="greenonlinelight"></div>
            <img className="sendmessagesvg" src="chat.png" alt="image" />
    </div>
    <div id="online-employee">
            <strong><p>Excel Wizard</p></strong>
            <div id="greenonlinelight"></div>
            <img className="sendmessagesvg" src="chat.png" alt="image" />
    </div>
    <div id="online-employee">
            <strong><p>Lunchtime Legend</p></strong>
            <div id="greenonlinelight"></div>
            <img className="sendmessagesvg" src="chat.png" alt="image" />
    </div>
    <div id="online-employee">
            <strong><p>Coffee Queen</p></strong>
            <div id="greenonlinelight"></div>
            <img className="sendmessagesvg" src="chat.png" alt="image" />
    </div>
    <div id="online-employee">
            <strong><p>Keyboard Ninja</p></strong>
            <div id="greenonlinelight"></div>
            <img className="sendmessagesvg" src="chat.png" alt="image" />
    </div>
    <div id="online-employee">
            <strong><p>Office Deejay</p></strong>
            <div id="greenonlinelight"></div>
            <img className="sendmessagesvg" src="chat.png" alt="image" />
    </div>
    <div id="online-employee">
            <strong><p>Email Lord</p></strong>
            <div id="greenonlinelight"></div>
            <img className="sendmessagesvg" src="chat.png" alt="image" />
    </div>
        </div>

            <input type="text" id="searchbar" placeholder ="Search"/>
        <div id="middlegrid">
            <div className = "KPI-boxes">
                <h4>Handling Time </h4> 
                <h2>3.27</h2>
                </div>
            <div className = "KPI-boxes">
            <h4>Revenue </h4> 
                <h2>600,000</h2>
                </div>
            <div className = "KPI-boxes">
            <h4>MIA (Days) </h4> 
                <h2>1</h2>
                </div>
            <div className = "KPI-boxes">
            <h4>Handling Time </h4> 
                <h2>3.27</h2>
                </div>
            <div className = "KPI-boxes">
            <h4>Propositions </h4> 
                <h2>50</h2>
                </div>
            <div className = "KPI-boxes">
            <h4>Airtime </h4> 
                <h2>70,000</h2>
                </div>
            <div className = "KPI-boxes">
            <h4>Devices</h4> 
                <h2>30</h2>
                </div>
            <div className = "KPI-boxes">
            <h4>Total Sales</h4> 
                <h2>2,000,000</h2>
                </div>
        </div>
        <div id="footer"></div>
        </div>
     );
}
 
export default EmployeeHome;