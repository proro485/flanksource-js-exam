import { data } from "../data";
import { makeDataUsable } from "../utils/helper";

it("should make the data usable", () => {
  expect(makeDataUsable(data)).toStrictEqual([keys, usableData]);
});

const keys = [
  "Leicester City",
  "Liverpool",
  "Manchester United",
  "Manchester City",
  "Tottenham Hotspur",
  "Chelsea",
  "Arsenal",
];

const usableData = {
  "Manchester United": {
    matches: [
      {
        score: {
          "Manchester United": 1,
          "Leicester City": 2,
        },
        date: "2021-05-04T14:00:00",
      },
      {
        score: {
          "Manchester United": null,
          Liverpool: null,
        },
        date: "2021-05-09T11:00:00",
      },
      {
        score: {
          "Manchester United": 1,
          "Tottenham Hotspur": 1,
        },
        date: "2021-05-05T11:00:00",
      },
      {
        score: {
          "Manchester United": 2,
          Chelsea: 2,
        },
        date: "2021-03-04T17:00:00",
      },
      {
        score: {
          "Manchester United": 1,
          "Manchester City": 2,
        },
        date: "2021-03-05T17:00:00",
      },
      {
        score: {
          "Manchester United": 6,
          Arsenal: 2,
        },
        date: "2021-01-04T17:00:00",
      },
    ],
    won: 1,
    lost: 2,
    draw: 2,
    points: 5,
    matchesPlayed: 5,
    goalDifference: 4,
  },
  "Leicester City": {
    matches: [
      {
        score: {
          "Manchester United": 1,
          "Leicester City": 2,
        },
        date: "2021-05-04T14:00:00",
      },
      {
        score: {
          Liverpool: null,
          "Leicester City": null,
        },
        date: "2021-05-06T17:00:00",
      },
      {
        score: {
          "Manchester City": 1,
          "Leicester City": 2,
        },
        date: "2021-04-17T17:00:00",
      },
      {
        score: {
          Arsenal: 0,
          "Leicester City": 0,
        },
        date: "2021-04-28T12:00:00",
      },
      {
        score: {
          Chelsea: 1,
          "Leicester City": 4,
        },
        date: "2021-05-03T14:00:00",
      },
      {
        score: {
          "Tottenham Hotspur": null,
          "Leicester City": null,
        },
        date: "2021-05-09T14:00:00",
      },
    ],
    won: 3,
    lost: 0,
    draw: 1,
    points: 10,
    matchesPlayed: 4,
    goalDifference: 0,
  },
  Liverpool: {
    matches: [
      {
        score: {
          "Manchester United": null,
          Liverpool: null,
        },
        date: "2021-05-09T11:00:00",
      },
      {
        score: {
          Liverpool: null,
          "Tottenham Hotspur": null,
        },
        date: "2021-05-09T17:00:00",
      },
      {
        score: {
          Liverpool: null,
          "Leicester City": null,
        },
        date: "2021-05-06T17:00:00",
      },
      {
        score: {
          "Manchester City": 1,
          Liverpool: 2,
        },
        date: "2021-05-01T14:00:00",
      },
      {
        score: {
          Arsenal: 2,
          Liverpool: 3,
        },
        date: "2021-05-02T17:00:00",
      },
      {
        score: {
          Chelsea: 1,
          Liverpool: 3,
        },
        date: "2021-04-29T17:00:00",
      },
    ],
    won: 3,
    lost: 0,
    draw: 0,
    points: 9,
    matchesPlayed: 3,
    goalDifference: 2,
  },
  "Tottenham Hotspur": {
    matches: [
      {
        score: {
          "Manchester United": 1,
          "Tottenham Hotspur": 1,
        },
        date: "2021-05-05T11:00:00",
      },
      {
        score: {
          Liverpool: null,
          "Tottenham Hotspur": null,
        },
        date: "2021-05-09T17:00:00",
      },
      {
        score: {
          "Manchester City": null,
          "Tottenham Hotspur": null,
        },
        date: "2021-05-06T12:00:00",
      },
      {
        score: {
          Arsenal: 1,
          "Tottenham Hotspur": 1,
        },
        date: "2021-05-04T12:00:00",
      },
      {
        score: {
          Chelsea: 1,
          "Tottenham Hotspur": 1,
        },
        date: "2021-05-04T14:00:00",
      },
      {
        score: {
          "Tottenham Hotspur": null,
          "Leicester City": null,
        },
        date: "2021-05-09T14:00:00",
      },
    ],
    won: 0,
    lost: 0,
    draw: 3,
    points: 3,
    matchesPlayed: 3,
    goalDifference: 0,
  },
  Chelsea: {
    matches: [
      {
        score: {
          "Manchester United": 2,
          Chelsea: 2,
        },
        date: "2021-03-04T17:00:00",
      },
      {
        score: {
          Chelsea: 1,
          Liverpool: 3,
        },
        date: "2021-04-29T17:00:00",
      },
      {
        score: {
          "Manchester City": 0,
          Chelsea: 0,
        },
        date: "2021-04-16T17:00:00",
      },
      {
        score: {
          Arsenal: null,
          Chelsea: null,
        },
        date: "2021-05-11T12:00:00",
      },
      {
        score: {
          Chelsea: 1,
          "Tottenham Hotspur": 1,
        },
        date: "2021-05-04T14:00:00",
      },
      {
        score: {
          Chelsea: 1,
          "Leicester City": 4,
        },
        date: "2021-05-03T14:00:00",
      },
    ],
    won: 0,
    lost: 2,
    draw: 3,
    points: 3,
    matchesPlayed: 5,
    goalDifference: -3,
  },
  "Manchester City": {
    matches: [
      {
        score: {
          "Manchester United": 1,
          "Manchester City": 2,
        },
        date: "2021-03-05T17:00:00",
      },
      {
        score: {
          "Manchester City": 1,
          Liverpool: 2,
        },
        date: "2021-05-01T14:00:00",
      },
      {
        score: {
          "Manchester City": 0,
          Chelsea: 0,
        },
        date: "2021-04-16T17:00:00",
      },
      {
        score: {
          "Manchester City": 1,
          "Leicester City": 2,
        },
        date: "2021-04-17T17:00:00",
      },
      {
        score: {
          "Manchester City": null,
          "Tottenham Hotspur": null,
        },
        date: "2021-05-06T12:00:00",
      },
      {
        score: {
          "Manchester City": null,
          Arsenal: null,
        },
        date: "2021-05-11T14:00:00",
      },
    ],
    won: 1,
    lost: 2,
    draw: 1,
    points: 4,
    matchesPlayed: 4,
    goalDifference: 0,
  },
  Arsenal: {
    matches: [
      {
        score: {
          "Manchester United": 6,
          Arsenal: 2,
        },
        date: "2021-01-04T17:00:00",
      },
      {
        score: {
          Arsenal: 2,
          Liverpool: 3,
        },
        date: "2021-05-02T17:00:00",
      },
      {
        score: {
          "Manchester City": null,
          Arsenal: null,
        },
        date: "2021-05-11T14:00:00",
      },
      {
        score: {
          Arsenal: null,
          Chelsea: null,
        },
        date: "2021-05-11T12:00:00",
      },
      {
        score: {
          Arsenal: 0,
          "Leicester City": 0,
        },
        date: "2021-04-28T12:00:00",
      },
      {
        score: {
          Arsenal: 1,
          "Tottenham Hotspur": 1,
        },
        date: "2021-05-04T12:00:00",
      },
    ],
    won: 0,
    lost: 2,
    draw: 2,
    points: 2,
    matchesPlayed: 4,
    goalDifference: 0,
  },
};
