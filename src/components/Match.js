import { format } from "date-fns";

const Match = ({ match }) => {
  const keys = Object.keys(match.score);

  const getFormatteDate = (date) => {
    return format(new Date(date), "dd/MM, HH:mm");
  };

  return (
    <>
      <h2>{getFormatteDate(match.date)}</h2>
      <h4 className="match">{`${keys[0]} vs ${keys[1]}`}</h4>
    </>
  );
};

export default Match;
