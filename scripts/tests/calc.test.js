const { TestScheduler } = require('jest');
const addition = require('../calc');

// First describe = The overall item beign tested. Referred to as a Test Suite.
// Other describes = Each instance of those tests.
// test = english description of what's expected from the result.
// expect = the jest function, pass in your function as a parameter
// toBe = a matcher, this checks for data and type like the === does.

describe("Calculator", () => {
    describe("Addition function", () => {
        test('should return 42 for 20 + 22', () => {
            expect(addition(20, 22)).toBe(42);
        })
        // --- TO DO: Add more tests in, account for everything possible.
        test('should return 73 for 42 + 31', () => {
            expect(addition(42, 31)).toBe(73);
        })
    })
    describe("Subtraction function", () => {
        
    })
    describe("Multiplication function", () => {
        
    })
    describe("Division function", () => {
        
    })
})