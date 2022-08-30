import create from "zustand";

const useDataStore = create((set) => ({
  data: [],
  teams: [],
  makeDataUsable: (data) => {
    const usableData = {};
    for (let i = 0; i < data.length; i++) {
      const { score, date } = data[i];
      const keys = Object.keys(score);

      const draw = score[keys[0]] === score[keys[1]] ? true : false;
      const winner = score[keys[0]] > score[keys[1]] ? keys[0] : keys[1];

      for (let j = 0; j < keys.length; j++) {
        const key = keys[j];
        if (!usableData[key]) {
          usableData[key] = {
            matches: [],
            won: 0,
            lost: 0,
            draw: 0,
            points: 0,
          };
        }

        usableData[key] = {
          matches: [...usableData[key].matches, { score, date }],
          won: usableData[key].won + (!draw && winner === key ? 1 : 0),
          lost: usableData[key].lost + (!draw && winner !== key ? 1 : 0),
          draw: usableData[key].draw + (draw ? 1 : 0),
          points: usableData[key].points + (draw ? 1 : winner === key ? 3 : 0),
        };
      }
    }

    let keys = Object.keys(usableData);
    keys = keys.sort((a, b) => usableData[b].points - usableData[a].points);

    set({ data: usableData, teams: keys });
  },
}));

export default useDataStore;
