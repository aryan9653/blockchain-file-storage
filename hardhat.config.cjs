require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Make sure to load the .env file

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    myQuickNode: {
      url: "https://restless-alpha-general.ethereum-sepolia.quiknode.pro/ad0032d60ddd41321a36499ba35e21ffd8006313/",
      accounts: [process.env.PRIVATE_KEY], // Use private key from .env
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.19",
      },
      {
        version: "0.8.28",
      }
    ]
  }
};
