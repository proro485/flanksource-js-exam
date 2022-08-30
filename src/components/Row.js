import { Link } from "react-router-dom";
import { getTeamId } from "../utils/helper";

const Row = ({ team, data }) => {
  return (
    <tr>
      <th>
        <Link to={`/teams/${getTeamId(team)}`}>{team}</Link>
      </th>
      <td>{data[team].won}</td>
      <td>{data[team].lost}</td>
      <td>{data[team].draw}</td>
      <td>{data[team].goalDifference}</td>
      <td>{data[team].points}</td>
      <td>{data[team].matchesPlayed}</td>
    </tr>
  );
};

export default Row;
