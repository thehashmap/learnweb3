const hre = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for a Punks
  const metadataURL = "ipfs://Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5";
  /*
  DeployContract in ethers.js is an abstraction used to deploy new smart contracts,
  so PunksContract here is a factory for instances of our Punks contract.
  */
  // here we deploy the contract
  const PunksContract = await hre.ethers.deployContract("Punks", [metadataURL]);

  await PunksContract.waitForDeployment();

  // print the address of the deployed contract
  console.log("Punks Contract Address:", PunksContract.target);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
