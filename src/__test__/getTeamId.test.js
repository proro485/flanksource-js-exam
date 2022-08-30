import { getTeamId } from "../utils/helper";

it("should return the team id", () => {
  // Single Word Team Name
  // 1. first letter capitalized
  expect(getTeamId("Arsenal")).toBe("arsenal");
  // 2. all letters smallcased
  expect(getTeamId("arsenal")).toBe("arsenal");
  // 3. all letters capitalized
  expect(getTeamId("ARSENAL")).toBe("arsenal");

  // Mutltiple Word Team Name
  // 1. first letters capitalized
  expect(getTeamId("Manchester United")).toBe("manchester-united");
  // 2. all letters smallcased
  expect(getTeamId("manchester united")).toBe("manchester-united");
  // 3. all letters capitalized
  expect(getTeamId("MANCHESTER UNITED")).toBe("manchester-united");
});
