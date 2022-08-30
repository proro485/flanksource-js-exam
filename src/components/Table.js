import useDataStore from "../stores/DataStore";
import Row from "./Row";

const Table = () => {
  const { data, teams } = useDataStore();

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Won</th>
          <th>Lost</th>
          <th>Draw</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team, index) => {
          return <Row key={index} team={team} data={data} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
