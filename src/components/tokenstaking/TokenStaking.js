import { React, useEffect } from "react"
import WTFlogo from "../../assets/LOGO.png"
import { useEthers } from "@usedapp/core"
import { Link } from "react-router-dom"
import "./TokenStaking.css"
const ethers = require("ethers")

const provider = new ethers.providers.JsonRpcProvider(
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

if (typeof window.ethereum == "undefined") {
    document.getElementById("isConnected").innerHTML = `No Wallet Detected`
}

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
                                <div className="">
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
                        <div className="toppart flex justify-between h-1/6 border-b-2 p-2">
                            <div className="apy">
                                APY: <span id="apytext">-</span>%
                            </div>
                            <div className="xforx">$WTF FOR $WTF</div>
                            <div className="apr">
                                APR: <span id="aprtext">-</span>%
                            </div>
                        </div>
                        <div className="bottompart h-5/6">
                            <div className="leftpart p-2">
                                <div className="border-b">
                                    Total Time: <span id="time">-</span>
                                </div>
                                <div className="border-b">
                                    Remaining: <span id="timeRemaining">-</span>
                                </div>
                                <div className="border-b">
                                    TAX: <span id="tax1">-</span>/
                                    <span id="tax2">-</span>
                                </div>
                                <div className="border-b">
                                    Early TAX: <span id="earlytax">-</span>%
                                </div>
                            </div>
                            <div className="rightpart px-2">
                                <div className="flex items-center border-b h-1/6">
                                    TVL: <span id="TVL">-</span>
                                </div>
                                <div className="border-2 h-5/6">
                                    <div className="h-full"></div>

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
