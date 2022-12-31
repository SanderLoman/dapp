import { React, useEffect } from "react"
import WTFlogo from "../../assets/LOGO.png"
import { useEthers } from "@usedapp/core"
import { Link } from "react-router-dom"
import "./TokenStaking.css"
const ethers = require("ethers")

const provider = new ethers.providers.WebSocketProvider(
    process.env.REACT_APP_GOE_RPC_URL
)

const ABI = [
    {
        inputs: [],
        name: "MAX_PERFORMANCE_FEE",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "MAX_UNSTAKE_FEE",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "earlyUnstakeFee",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "earned",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
        name: "emergencyWithdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "exit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getReward",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getRewardForDuration",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "lastTimeRewardApplicable",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "lastUpdateTime",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "lockDuration",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "locked",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "manualUnlock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "a", type: "uint256" },
            { internalType: "uint256", name: "b", type: "uint256" },
        ],
        name: "min",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "reward", type: "uint256" }],
        name: "notifyRewardAmount",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "performanceFee",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "periodFinish",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "n", type: "uint256" },
            { internalType: "uint256", name: "e", type: "uint256" },
        ],
        name: "pow",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "tokenAddress", type: "address" },
            { internalType: "uint256", name: "tokenAmount", type: "uint256" },
        ],
        name: "recoverERC20",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "rewardPerToken",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "rewardPerTokenStored",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "rewardRate",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "rewards",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "rewardsDuration",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "rewardsToken",
        outputs: [
            { internalType: "contract IERC20", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
        name: "stake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
        name: "stake2",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "stakingToken",
        outputs: [
            { internalType: "contract IERC20", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "stakingTokensDecimalRate",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "userRewardPerTokenPaid",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
        name: "withdraw2",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
]

const CA = "0xfF844E33cEA04d046B4Ee2Ffb42E0f3F0e33C82d"

const WTFstake = new ethers.Contract(CA, ABI, provider)

const TokenStaking = () => {
    const { account, activateBrowserWallet } = useEthers()

    const isConnected = account !== undefined

    useEffect(() => {
        // Calculate and update the APR and APY values every 10 seconds
        setInterval(() => {
            let apr = null
            // (1 + interestRate / compoundFrequency) ^
            // (compoundFrequency / investmentPeriod - 1)
            let apy = null
            // (1 + apr / compoundFrequency) ^
            // (compoundFrequency / investmentPeriod - 1)

            // document.getElementById("apytext").innerHTML = apy
            // document.getElementById("aprtext").innerHTML = apr
        }, 10000)
    }, [])

    return (
        <>
            <nav className="nav text-5xl w-full">
                <div className="px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Link to="/">
                                <img
                                    src={WTFlogo}
                                    alt="WTF logo"
                                    className="h-10"
                                />
                            </Link>
                        </div>
                        {!isConnected ? (
                            <button
                                className="isConnected"
                                onClick={() => activateBrowserWallet()}
                            >
                                Connect Wallet
                            </button>
                        ) : (
                            <div className="flex justify-center items-center">
                                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                                    {account.slice(0, 6) +
                                        "..." +
                                        account.slice(
                                            account.length - 4,
                                            account.length
                                        )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <div className="w-screen h-screen flex justify-center items-center">
                <div className="bg-gradient-to-tr from-customPink via-customPurple to-customOrange rounded-2xl w-5/6 h-3/4 p-2">
                    <div className="fullpart bg-white rounded-lg w-full h-full p-2">
                        <div className="toppart flex flex-col md:flex-row justify-between border-b-2 items-center h-1/6 text-xl md:text-2xl lg:text-4xl xl:text-6xl">
                            <div className="apy order-2 md:order-1">
                                APY: <span id="apytext">-</span>%
                            </div>
                            <div className="xforx order-1 md:order-2">
                                $WTF FOR $WTF
                            </div>
                            <div className="apr order-3 md:order-3">
                                APR: <span id="aprtext">-</span>%
                            </div>
                        </div>
                        <div className="bottompart flex flex-col md:flex-row w-full h-5/6">
                            <div className="leftpart md:w-1/6 text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center md:text-start">
                                <div className="border-b">
                                    Total Time: 7 days
                                </div>
                                <div className="border-b">
                                    Remaining: <span className="">-</span>
                                </div>
                                <div className="border-b">
                                    TAX: <span className="">-</span>/
                                    <span className="">-</span>
                                </div>
                                <div className="border-b">
                                    Early Tax: <span className="">-</span>
                                </div>
                            </div>
                            <div className="flex flex-col md:w-5/6 h-full md:pl-2 md:border-l">
                                <div className="flex justify-between flex-col items-center md:flex-row text-lg md:text-2xl lg:text-4xl xl:text-5xl h-1/6 border-b">
                                    <div className="text-center">
                                        TVL:
                                        <span className="">
                                            <span> </span>532.432.212
                                        </span>
                                    </div>
                                    <div className="text-center">
                                        You Hold:
                                        <span className="">
                                            <span> </span>523.342.523
                                        </span>
                                    </div>
                                </div>
                                <div className="rightpart flex flex-col md:flex-row text-center w-full h-5/6">
                                    <div className="md:w-1/3 h-1/3 md:h-full border-b md:border-b-0 text-lg md:text-2xl lg:text-4xl xl:text-5xl">
                                        <div className="h-1/2">
                                            <span className="text-lg md:text-3xl lg:text-5xl xl:text-7xl">
                                                STAKE
                                            </span>
                                        </div>
                                        <div className="flex justify-center items-center h-1/2">
                                            <div className="bg-gradient-to-tr from-customPink via-customPurple to-customOrange rounded-2xl p-1 w-max mx-auto">
                                                <button className="text-lg md:text-2xl lg:text-3xl xl:text-5xl bg-white rounded-xl px-4">
                                                    Stake
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row md:flex-col md:w-1/3 h-1/3 md:h-full md:border-l border-b md:border-b-0 md:border-r">
                                        <div className="flex justify-center items-center md:h-1/3 w-1/3 md:w-full order-1 md:order-1">
                                            <span className="text-lg md:text-2xl lg:text-3xl xl:text-5xl">
                                                Tokens Staked:
                                                <span className="">-</span>
                                            </span>
                                        </div>
                                        <div className="flex justify-center items-center md:h-1/3 w-1/3 md:w-full order-3 md:order-2">
                                            <span className="text-lg md:text-2xl lg:text-3xl xl:text-5xl">
                                                Your Rewards:
                                                <span className="">-</span>
                                            </span>
                                        </div>
                                        <div className="flex justify-center items-center md:h-1/3 w-1/3 md:w-full order-2 md:order-3">
                                            <div className="bg-gradient-to-tr from-customPink via-customPurple to-customOrange rounded-2xl p-1 w-max mx-auto">
                                                <button className="text-lg md:text-2xl lg:text-3xl xl:text-5xl bg-white rounded-xl px-4 hover:bg-gray-100 active:bg-gray-200">
                                                    Claim
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:w-1/3 h-1/3 md:h-full">
                                        <div className="h-1/2">
                                            <span className="text-lg md:text-3xl lg:text-5xl xl:text-7xl">
                                                WITHDRAW
                                            </span>
                                        </div>
                                        <div className="flex justify-center items-center h-1/2">
                                            <div className="bg-gradient-to-tr from-customPink via-customPurple to-customOrange rounded-2xl p-1 w-max mx-auto">
                                                <button className="text-lg md:text-2xl lg:text-3xl xl:text-5xl bg-white rounded-xl px-4">
                                                    Withdraw
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TokenStaking
