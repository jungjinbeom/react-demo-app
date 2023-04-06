function add(...numbers: number[]) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers.reduce((acc, number) => acc + number);
}
const context = describe;

test("add", () => {
  //인자가 없는 값
  expect(add()).toBe(0);

  //인자가 두개
  expect(add(1, 2)).toBe(3);

  //인자가 세개
  expect(add(1, 2, 3)).toBe(6);
});

describe("add", () => {
  context("with no argument", () => {
    it("returns zero", () => {
      expect(add()).toBe(0);
    });
  });
  context("with only one arguments", () => {
    it("return sum of two numbers", () => {
      expect(add(2)).toBe(2);
    });
  });

  context("with only one arguments", () => {
    it("return sum of two numbers", () => {
      expect(add(1, 2)).toBe(3);
    });
  });

  context("with only one arguments", () => {
    it("return sum of three numbers", () => {
      expect(add(1, 2, 3)).toBe(6);
    });
  });
});
