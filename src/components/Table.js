import useDataStore from "../stores/DataStore";

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
          return (
            <tr key={index}>
              <td>{team}</td>
              <td>{data[team].won}</td>
              <td>{data[team].lost}</td>
              <td>{data[team].draw}</td>
              <td>{data[team].points}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
