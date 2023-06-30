import EmployeeHome from "./employeeHome";
import ManagerTeam from "../componets/managerTeam";
import EditEmployee from "../componets/editEmployee";

const ManagerHome = () => {



    return ( 
        <>
        <ManagerTeam/>
        <EmployeeHome 
        performanceTitle = "My Team Stats"
        staffName = "Temayo James"
        staffRole = "Manager"
        performanceHeading = "Your Team's Performance at a Glance"
        teamHeading = "Your Team: Team Pacific :- 16 Members"

        />
         <EditEmployee/>
        </>
     );
}
 
export default ManagerHome;