import { groupArrayElements } from "./groupArrayElements";

describe("groupArrayElements", () => {
  it("groups the elements of the input array into 3 arrays (example given)", () => {
    expect(groupArrayElements([1, 2, 3, 4, 5], 3)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it("groups the elements into arrays of length 1 when N == array.length", () => {
    expect(groupArrayElements([1, 2, 3, 4, 5], 5)).toEqual([[1], [2], [3], [4], [5]]);
  });

  it("groups the elements into arrays of length 1 when N > array.length", () => {
    expect(groupArrayElements([1, 2, 3, 4, 5], 99)).toEqual([[1], [2], [3], [4], [5]]);
  });

  it("returns empty array when N == 0", () => {
    expect(groupArrayElements([1, 2, 3, 4, 5], 0)).toEqual([]);
  });

  it("returns empty array when N < 0", () => {
    expect(groupArrayElements([1, 2, 3, 4, 5], -1)).toEqual([]);
  });

  it("returns array containing the original array when N == 1", () => {
    expect(groupArrayElements([1, 2, 3, 4, 5], 1)).toEqual([[1, 2, 3, 4, 5]]);
  });

  it("works with strings and TypeScript is still happy", () => {
    expect(groupArrayElements(["Armenia", "Belgium", "Czechia", "Denmark", "Estonia"], 3)).toEqual([
      ["Armenia", "Belgium"],
      ["Czechia", "Denmark"],
      ["Estonia"],
    ]);
  });
});
