import { useParams } from "react-router-dom";
import Matches from "../components/Matches";
import useDataStore from "../stores/DataStore";
import { getTeamNameFromId } from "../utils/helper";
import PageNotFound from "./404";

const Team = () => {
  const { id } = useParams();
  const { data } = useDataStore();

  const teamName = getTeamNameFromId(id);

  if (!data[teamName]) return <PageNotFound />;

  return <Matches teamName={teamName} teamData={data[teamName]} />;
};

export default Team;
