// SPDX-License-Identifier: MIT

pragma solidity >0.7.0 <=0.9.0;

contract Calculator {

    // Addition function
    function add(int256 a, int256 b) public pure returns (int256) {
        int256 sum = a + b;
        return sum;
    }

    // Subtraction function
    function sub(int256 a, int256 b) public pure returns (int256) {
        int256 difference = a - b;
        return difference;
    }

    // Multiplication function
    function mul(int256 a, int256 b) public pure returns (int256) {
        int256 product = a * b;
        return product;
    }

    // Division function (with check for division by zero)
    function div(int256 a, int256 b) public pure returns (int256) {
        require(b != 0, "Division by zero not allowed");
        int256 quotient = a / b;
        return quotient;
    }
}
