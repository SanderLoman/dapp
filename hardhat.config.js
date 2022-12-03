require("@nomicfoundation/hardhat-toolbox")
require("@nomiclabs/hardhat-ethers")
require("dotenv").config()
require('hardhat-contract-sizer');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.17",
    networks: {
        hardhat: {
            forking: {
                url: process.env.BNB_RPC_URL,
            },
            // forking: {
            //     url: process.env.ETH_RPC_URL,
            // },
        },
        goerli: {
            url: process.env.GOE_RPC_URL,
            accounts: [process.env.GOE_PRIVATE_KEY],
        },
        bsc: {
            url: process.env.BNB_RPC_URL,
            accounts: [process.env.PRIVATE_KEY_TOKEN_DEPLOYER],
        },
    },
    etherscan: {
        apiKey: {
            bsc: process.env.BSCSCAN_API_KEY,
        },
        customChains: [
            {
                network: "bsc",
                chainId: 56,
                urls: {
                    apiURL: "https://api.bscscan.com/api",
                    browserURL: "https://bscscan.com/",
                },
            },
        ],
    },
}
