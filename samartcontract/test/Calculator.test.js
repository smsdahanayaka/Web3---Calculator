const Calculator = artifacts.require("Calculator");

contract("Calculator", (accounts) => {
    let calculator;

    // This runs before each test, deploying a fresh instance of the Calculator contract
    beforeEach(async () => {
        calculator = await Calculator.new();
    });

    it("should return the correct sum when add is called", async () => {
        const result = await calculator.add(5, 3);
        assert.equal(result.toNumber(), 8, "The result of adding 5 and 3 should be 8");
    });

    it("should return the correct difference when sub is called", async () => {
        const result = await calculator.sub(10, 4);
        assert.equal(result.toNumber(), 6, "The result of subtracting 4 from 10 should be 6");
    });

    it("should return the correct product when mul is called", async () => {
        const result = await calculator.mul(6, 7);
        assert.equal(result.toNumber(), 42, "The result of multiplying 6 by 7 should be 42");
    });

    it("should return the correct quotient when div is called", async () => {
        const result = await calculator.div(20, 5);
        assert.equal(result.toNumber(), 4, "The result of dividing 20 by 5 should be 4");
    });

    it("should fail when attempting to divide by zero", async () => {
        try {
            await calculator.div(10, 0);
            assert.fail("Expected error not received");
        } catch (error) {
            assert(error.message.includes("Division by zero not allowed"), "Error message must contain 'Division by zero not allowed'");
        }
    });
});
