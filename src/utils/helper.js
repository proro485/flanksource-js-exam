import { format } from "date-fns";

export const getTeamId = (team) => {
  return team.toLowerCase().split(" ").join("-");
};

export const getTeamNameFromId = (id) => {
  let teamName = id.split("-");
  for (let i = 0; i < teamName.length; i++) {
    teamName[i] = teamName[i].charAt(0).toUpperCase() + teamName[i].slice(1);
  }
  return teamName.join(" ");
};

export const getFormattedDate = (date) => {
  return format(new Date(date), "dd/MM, HH:mm");
};
