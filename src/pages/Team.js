import { useParams } from "react-router-dom";
import Matches from "../components/Matches";
import useDataStore from "../stores/DataStore";
import { getTeamNameFromId } from "../utils/helper";

const Team = () => {
  const { id } = useParams();
  const { data } = useDataStore();

  const teamName = getTeamNameFromId(id);

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
