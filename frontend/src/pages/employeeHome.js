import "../css-files/employeeHome.css"

const EmployeeHome = () => {
    return ( 

        <div id="employee-home">
            <div id="header"></div>

        <div id="sidebar">
        <div id="avatardiv"><h3>BO</h3></div>
        <h4 id="employeeNameonsidebar">Bill Otunga</h4>
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
    </div>
    <div id="online-employee">
            <strong><p>Excel Wizard</p></strong>
            <div id="greenonlinelight"></div>
    </div>
    <div id="online-employee">
            <strong><p>Lunchtime Legend</p></strong>
            <div id="greenonlinelight"></div>
    </div>
    <div id="online-employee">
            <strong><p>Coffee Queen</p></strong>
            <div id="greenonlinelight"></div>
    </div>
    <div id="online-employee">
            <strong><p>Keyboard Ninja</p></strong>
            <div id="greenonlinelight"></div>
    </div>
    <div id="online-employee">
            <strong><p>Office Deejay</p></strong>
            <div id="greenonlinelight"></div>
    </div>
    <div id="online-employee">
            <strong><p>Email Lord</p></strong>
            <div id="greenonlinelight"></div>
    </div>
        </div>

            <input type="text" id="searchbar" placeholder ="Search"/>
        <div id="middlegrid">
            <div id = "KPI-grid"></div>
            <div id = "KPI-grid"></div>
            <div id = "KPI-grid"></div>
            <div id = "KPI-grid"></div>
            <div id = "KPI-grid"></div>
            <div id = "KPI-grid"></div>
            <div id = "KPI-grid"></div>
            <div id = "KPI-grid"></div>
        </div>
        <div id="footer"></div>
        </div>
     );
}
 
export default EmployeeHome;