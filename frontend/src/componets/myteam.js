import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContex";
import axios from "axios";

const Team = () => {
  const { currentUser } = useAuthContext();
  const [loading, setLoading] = useState(true);
  const [team, setTeam] = useState([]);
  const [isManager, setIsManager] = useState(false);
  const getTeam = async () => {
    try {
      const response = await axios.post("/api/getmanagerteam", {
          team: currentUser.user.team,
      });

      if (response.data) {
        setTeam(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error fetching team data:", error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      getTeam();
      setLoading(false);
      if (currentUser.user.role === "Manager"){
        setIsManager(true)
      }
    }
  }, [currentUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (

    <div id="team-grid">
      {team && team.map((member) => (
        <div key={member._id} className="team-boxes">
          <h5>{member.firstName} {member.lastName}</h5>
          {isManager && <img src="editemployee.png" alt="" />}
        </div>
      ))}
      <br />
      <br />
    </div>
  );
};

export default Team;
