import { useParams } from "react-router-dom";
import Matches from "../components/Matches";
import useDataStore from "../stores/DataStore";

const Team = () => {
  const { id } = useParams();
  const { data } = useDataStore();

  const getTeamNameFromId = () => {
    let teamName = id.split("-");
    for (let i = 0; i < teamName.length; i++) {
      teamName[i] = teamName[i].charAt(0).toUpperCase() + teamName[i].slice(1);
    }
    return teamName.join(" ");
  };

  const teamName = getTeamNameFromId();

  if (!data[teamName]) {
    return (
      <div className="center">
        <h2>404 | Page Not Found</h2>
      </div>
    );
  }

  return <Matches teamName={teamName} teamData={data[teamName]} />;
};

export default Team;
