import useDataStore from "../stores/DataStore";

const Table = () => {
  const { data } = useDataStore();

  const keys = Object.keys(data);

  return (
    <table>
      <thead>
        <th>Name</th>
        <th>Won</th>
        <th>Lost</th>
        <th>Draw</th>
        <th>Points</th>
      </thead>
      <tbody>
        {keys.map((key, index) => {
          return (
            <tr key={index}>
              <td>{key}</td>
              <td>{data[key].won}</td>
              <td>{data[key].lost}</td>
              <td>{data[key].draw}</td>
              <td>{data[key].points}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
