import { getTeamNameFromId } from "../utils/helper";

it("should return the team id", () => {
  // Single Word Team Id
  expect(getTeamNameFromId("arsenal")).toBe("Arsenal");

  // Mutltiple Word Team Id
  expect(getTeamNameFromId("manchester-united")).toBe("Manchester United");
});
