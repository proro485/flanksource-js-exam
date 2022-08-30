import { Link } from "react-router-dom";
import Match from "./Match";

const Matches = ({ teamName, teamData }) => {
  return (
    <div className="margin-horizontal">
      <div className="flex">
        <h1>{teamName}</h1>
        <Link to="/">Go Back</Link>
      </div>
      {teamData.matches.map((match, index) => {
        return <Match match={match} key={index} />;
      })}
    </div>
  );
};

export default Matches;
