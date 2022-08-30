import { format } from "date-fns";
import { Link } from "react-router-dom";

const Matches = ({ teamName, teamData }) => {
  const getFormatteDate = (date) => {
    return format(new Date(date), "dd/MM, HH:mm");
  };

  return (
    <>
      <div>
        <h1>{teamName}</h1>
        <Link to="/">Go Back</Link>
      </div>
      {teamData.matches.map((match, index) => {
        const keys = Object.keys(match.score);
        return (
          <div key={index}>
            <h2>{getFormatteDate(match.date)}</h2>
            <h4>{`${keys[0]} vs ${keys[1]}`}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Matches;
