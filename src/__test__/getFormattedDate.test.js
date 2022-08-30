import { getFormattedDate } from "../utils/helper";

it("should return the date time in a specific format", () => {
  expect(getFormattedDate("2021-05-04T14:00:00")).toBe("04/05, 14:00");
  expect(getFormattedDate("2021-05-09T11:00:00")).toBe("09/05, 11:00");
});
