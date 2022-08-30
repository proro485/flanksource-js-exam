import { compareAsc } from "date-fns";
import { Link } from "react-router-dom";
import Match from "./Match";

const Matches = ({ teamName, teamData }) => {
  const matches = teamData.matches.sort((a, b) =>
    compareAsc(new Date(b.date), new Date(a.date))
  );

  return (
    <div className="margin-horizontal">
      <div className="flex">
        <h1>{teamName}</h1>
        <Link to="/">
          <h4>Go Back</h4>
        </Link>
      </div>
      {matches.map((match, index) => {
        return <Match match={match} key={index} />;
      })}
    </div>
  );
};

export default Matches;
