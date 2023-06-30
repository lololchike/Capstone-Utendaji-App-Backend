import EmployeeHome from "./employeeHome";



const AdminHome = () => {


    return ( 
        <>
        <EmployeeHome 
        isAdmin = {true}
        performanceTitle = "View All Teams"
        staffName = "Cameron Dey"
        staffRole = "Admin"
        performanceHeading = "All Teams"
        teamHeading = "All Teams"
        adminTeamButton = "Create Team"
        adminJobButton = "Create New Employee"

        />
        </>
     );
}
 
export default AdminHome;