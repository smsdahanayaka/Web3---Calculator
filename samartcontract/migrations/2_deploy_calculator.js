const Calculator = artifacts.require("Calculator");

module.exports = function (deployer) {
    // Deploy the Calculator contract
    deployer.deploy(Calculator);
};
