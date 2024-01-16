const findShortestString = require("./find-shortest-string");

test("findShortestString finds the longest string in an array", () => {
  expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("a");
  expect(findShortestString(["why", "hello", "to", "you"])).toBe("to");
});
