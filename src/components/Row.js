const Row = ({ team, data }) => {
  return (
    <tr>
      <td>{team}</td>
      <td>{data[team].won}</td>
      <td>{data[team].lost}</td>
      <td>{data[team].draw}</td>
      <td>{data[team].points}</td>
    </tr>
  );
};

export default Row;
