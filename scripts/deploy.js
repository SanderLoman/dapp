const { ethers } = require("hardhat")
const hre = require("hardhat")
require("@nomiclabs/hardhat-ethers")

const main = async () => {
    const [deployer] = await hre.ethers.getSigners()
    console.log("Deploying contracts with the account:", deployer.address)

    console.log("Account balance:", ((before = await deployer.getBalance()) / 1e18).toFixed(4), "ETH")

    const Contract = await hre.ethers.getContractFactory("BOTTOM")
    const contract = await Contract.deploy()

    await contract.deployed()

    console.log("Successfully deployed contract at:", contract.address)

    console.log("Account balance after deployment:", ((after = await deployer.getBalance()) / 1e18).toFixed(4), "ETH")

    console.log("Used:", ((before - after) / 1e18).toFixed(4), "ETH")

    const tx = await ethers.provider.getTransactionReceipt(contract.deployTransaction.hash)
    console.log("Gas used:", tx.gasUsed.toString())
}

main().then(() => process.exit(0)).catch((error) => {
    console.log(error)
    process.exit(1)
})