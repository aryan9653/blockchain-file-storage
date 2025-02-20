const { ethers } = require("hardhat");

async function main() {
  // Get the deployer's account
  const [deployer] = await ethers.getSigners();

  // Correct way to get balance
  const balance = await ethers.provider.getBalance(deployer.address);

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", balance.toString());

  // Rest of your deployment code...
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  