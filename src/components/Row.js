import { Link } from "react-router-dom";

const Row = ({ team, data }) => {
  const getTeamId = () => {
    return team.toLowerCase().split(" ").join("-");
  };

  return (
    <tr>
      <th>
        <Link to={`/teams/${getTeamId()}`}>{team}</Link>
      </th>
      <td>{data[team].won}</td>
      <td>{data[team].lost}</td>
      <td>{data[team].draw}</td>
      <td>{data[team].points}</td>
    </tr>
  );
};

export default Row;
