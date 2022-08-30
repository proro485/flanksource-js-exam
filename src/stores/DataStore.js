import create from "zustand";

const useDataStore = create((set) => ({
  data: [],
  teams: [],
  makeDataUsable: (data) => {
    const usableData = {};
    for (let i = 0; i < data.length; i++) {
      const { score, date } = data[i];
      const keys = Object.keys(score);

      const happened = score[keys[0]] !== null ? true : false;
      const draw = score[keys[0]] === score[keys[1]] ? true : false;
      const winner = score[keys[0]] > score[keys[1]] ? keys[0] : keys[1];

      const matchesPlayed = happened ? 1 : 0;
      const goalDifference = happened
        ? [score[keys[0]] - score[keys[1]], score[keys[1]] - score[keys[0]]]
        : [0, 0];

      for (let j = 0; j < keys.length; j++) {
        const key = keys[j];
        if (!usableData[key]) {
          usableData[key] = {
            matches: [],
            won: 0,
            lost: 0,
            draw: 0,
            points: 0,
            matchesPlayed: 0,
            goalDifference: 0,
          };
        }

        usableData[key] = {
          matches: [...usableData[key].matches, { score, date }],
          won:
            usableData[key].won + (happened && !draw && winner === key ? 1 : 0),
          lost:
            usableData[key].lost +
            (happened && !draw && winner !== key ? 1 : 0),
          draw: usableData[key].draw + (happened && draw ? 1 : 0),
          points:
            usableData[key].points +
            (!happened ? 0 : draw ? 1 : winner === key ? 3 : 0),
          matchesPlayed: usableData[key].matchesPlayed + matchesPlayed,
          goalDifference: goalDifference[j],
        };
      }
    }

    let keys = Object.keys(usableData);
    keys = keys.sort((a, b) => usableData[b].points - usableData[a].points);

    set({ data: usableData, teams: keys });
  },
}));

export default useDataStore;
