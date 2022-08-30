import { Link } from "react-router-dom";
import { getFormattedDate, getTeamId } from "../utils/helper";

const Match = ({ match }) => {
  const keys = Object.keys(match.score);

  return (
    <>
      <h2>{getFormattedDate(match.date)}</h2>
      <div className="match flex flex-start">
        <h4>
          <Link to={`/teams/${getTeamId(keys[0])}`}>{keys[0]}</Link>
        </h4>
        <h4 className="px-2">vs</h4>
        <h4>
          <Link to={`/teams/${getTeamId(keys[1])}`}>{keys[1]}</Link>
        </h4>
      </div>
    </>
  );
};

export default Match;
