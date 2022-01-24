const mathOperations = require('./calculator')

describe("Sample test", () => {

  // Before All
  beforeAll( () => {
    console.log("before all called");
  });

  // Before Each
  beforeAll( () => {
    console.log("before each called");
  });

  // Before All
  afterAll( () => {
    console.log("after all called");
  });

  // Before All
  afterEach( () => {
    console.log("after each called");
  });

  // test sum
  test("adding 1+2 should return 3", ()=>{
    // arrange and act
    let result = mathOperations.sum(1, 2);

    // assert
    expect(result).toBe(3);
  });

  // test sum
  test("adding 1+2 should not return 4", ()=>{
    // arrange and act
    let result = mathOperations.sum(1, 2);

    // assert
    expect(result).not.toBe(4);
  });

  // test substract
  test("substract 2 from 10 should return 8", () => {
    //arrange and act
    let result = mathOperations.diff(10, 2);


    // assert
    expect(result).toBe(8);
  });

  // test production
  test("multiply 2 and 8 should return 16", () =>{
    // arrange and act

    let result = mathOperations.product(2,8);

    // assert
    expect(result).toBe(16);
  });

  // Truthy tests
  test("truthy operator", () => {
    var name="hello";
    var n = null;

    expect(name).not.toBeNull();
    expect(n).toBeNull();
    expect(name).toBeTruthy();
    expect(n).toBeFalsy();
    expect(0).not.toBeTruthy();

  });

  // Number matchers
  test("numeric operators", () =>{
    // Greater than
    expect(200).toBeGreaterThan(100);


    // Less than or equal
    expect(100).toBeLessThanOrEqual(200);

    // Greater than or equal
    expect(200).toBeGreaterThanOrEqual(200);

  });

  // String machers
  test("String operators", () => {

    let testString = "hello world";

    // test for match
    expect(testString).toMatch(/hello/);

    // test for not match
    expect(testString).not.toMatch(/abc/);

  });
})
