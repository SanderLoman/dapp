import { React, useState } from "react"
import { stakeContract, stakingABI } from "../../constants/stakingToken"
import { coinContract, coinABI } from "../../constants/coinToken"
import { useEthers } from "@usedapp/core"
import { Link } from "react-router-dom"
import { ethers } from "ethers"
import WTFlogo from "../../assets/LOGO.png"
import "./TokenStaking.css"

const providerStake = new ethers.providers.WebSocketProvider(
    process.env.REACT_APP_GOE_RPC_URL
)

const providerCoin = new ethers.providers.WebSocketProvider(
    process.env.REACT_APP_GOE_RPC_URL2
)

const WTFstake = new ethers.Contract(stakeContract, stakingABI, providerStake)
const WTFcoin = new ethers.Contract(coinContract, coinABI, providerCoin)

const TokenStaking = () => {
    const { account, activateBrowserWallet, deactivate } = useEthers()
    const [amount, setAmount] = useState()
    const [approveAmount, setApproveAmount] = useState(0)
    const [approved, setApproved] = useState(false)
    const isConnected = account !== undefined

    const setAmountToMax = async () => {
        const balance = await WTFcoin.balanceOf(account)
        setAmount(((balance) / 10 ** 9).toFixed(0))
    }

    const totalSupply = async () => {
        const TS = await WTFstake.totalSupply()
        // eslint-disable-next-line
        if (TS == 0) {
            document.getElementById("TVL").innerHTML = " " + 0
        } else {
            document.getElementById("TVL").innerHTML =
                " " + (TS / 10 ** 9).toFixed(2)
        }
    }

    totalSupply()

    const getBalance = async () => {
        const balance = await WTFcoin.balanceOf(account)
        document.getElementById("holdings").innerHTML =
            " " + (balance / 10 ** 9).toFixed(2)
    }

    if (isConnected) {
        getBalance()
    }

    const stake = async (amount) => {}

    const approving = async (amount) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const approveWTFstake = new ethers.Contract(
            stakeContract,
            stakingABI,
            signer
        )
        await approveWTFstake.approve(coinContract, amount)
    }

    const withdraw = async (amount) => {}

    return (
        <>
            <nav className="nav w-full">
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
                        {isConnected ? (
                            <button
                                className="text-xl md:text-2xl lg:text-3xl xl:text-5xl"
                                onClick={() => deactivate()}
                            >
                                {account.slice(0, 6)}...
                                {account.slice(-4)}
                            </button>
                        ) : (
                            <button
                                className="text-xl md:text-2xl lg:text-3xl xl:text-5xl"
                                onClick={() => activateBrowserWallet()}
                            >
                                Connect Wallet
                            </button>
                        )}
                    </div>
                </div>
            </nav>
            <div className="w-screen h-screen flex justify-center items-center">
                <div className="bg-gradient-to-tr from-customPink via-customPurple to-customOrange rounded-2xl w-5/6 h-3/4 p-2">
                    <div className="fullpart bg-white rounded-lg w-full h-full p-2">
                        <div className="toppart flex flex-col md:flex-row justify-between border-b-2 items-center h-1/6 text-xl md:text-2xl lg:text-4xl xl:text-6xl">
                            <div className="apy order-2 md:order-1">
                                APY: <span id="apytext">?</span>%
                            </div>
                            <div className="xforx order-1 md:order-2">
                                $WTF FOR $WTF
                            </div>
                            <div className="apr order-3 md:order-3">
                                APR: <span id="aprtext">?</span>%
                            </div>
                        </div>
                        <div className="bottompart flex flex-col md:flex-row w-full h-5/6">
                            <div className="leftpart md:w-1/6 text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center md:text-start">
                                <div className="border-b">
                                    Total Time:{" "}
                                    <span className="" id="totalTime">
                                        ?
                                    </span>
                                </div>
                                <div className="border-b">
                                    Remaining:{" "}
                                    <span className="remaining">?</span>
                                </div>
                                <div className="border-b">
                                    TAX:{" "}
                                    <span className="" id="tax">
                                        ?
                                    </span>
                                    /
                                    <span className="" id="tax">
                                        ?
                                    </span>
                                </div>
                                <div className="border-b">
                                    Early Tax:{" "}
                                    <span className="" id="EarlyTax">
                                        ?
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col md:w-5/6 h-full md:pl-2 md:border-l">
                                <div className="flex justify-between flex-col items-center md:flex-row text-lg md:text-2xl lg:text-4xl xl:text-5xl h-1/6 border-b">
                                    <div className="text-center">
                                        TVL:
                                        <span className="" id="TVL">
                                            ?
                                        </span>
                                    </div>
                                    <div className="text-center">
                                        You Hold:{" "}
                                        <span className="" id="holdings">
                                            ?
                                        </span>
                                    </div>
                                </div>
                                <div className="rightpart flex flex-col md:flex-row text-center w-full h-5/6">
                                    <div className="md:w-1/3 h-1/3 md:h-full border-b md:border-b-0 text-lg md:text-2xl lg:text-4xl xl:text-5xl">
                                        <div className="h-1/3 md:h-1/2">
                                            <span className="text-lg md:text-3xl lg:text-5xl xl:text-7xl">
                                                STAKE
                                            </span>
                                        </div>
                                        <div className="flex justify-center items-center h-2/3 md:h-1/2">
                                            <div className="bg-gradient-to-tr from-customPink via-customPurple to-customOrange rounded-2xl p-1 mx-auto">
                                                <div className="flex flex-col justify-between text-lg md:text-2xl lg:text-3xl xl:text-5xl bg-white rounded-xl">
                                                    {approved ? (
                                                        <input
                                                            className="bg-gray-100 w-2/3 text-lg md:text-2xl lg:text-3xl xl:text-4xl rounded-tl-xl rounded-bl-xl md:rounded-bl-none rounded-tr-xl acitve:outline-none focus:outline-none text-center"
                                                            type="number"
                                                            placeholder="Amount to stake"
                                                            value={amount}
                                                            onChange={(event) =>
                                                                setAmount(
                                                                    event.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    ) : (
                                                        <input
                                                            className="bg-gray-100  w-2/3text-lg md:text-2xl lg:text-3xl xl:text-4xl rounded-tl-xl rounded-bl-none rounded-tr-xl acitve:outline-none focus:outline-none text-center"
                                                            type="number"
                                                            placeholder="Amount to approve"
                                                            value={amount}
                                                            onChange={(event) =>
                                                                setAmount(
                                                                    event.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    )}
                                                    <div className="flex">
                                                        {approved ? (
                                                            <button
                                                                className="w-1/2 border-t bg-gray-100 active:bg-gray-200 rounded-br-xl md:rounded-br-none rounded-tr-xl md:rounded-tr-none rounded-bl-xl text-lg md:text-2xl lg:text-3xl xl:text-4xl"
                                                                onClick={
                                                                    !account
                                                                        ? activateBrowserWallet
                                                                        : stake
                                                                }
                                                            >
                                                                Stake
                                                            </button>
                                                        ) : (
                                                            <button
                                                                className="w-1/2 border-t bg-gray-100 active:bg-gray-200 rounded-br-none rounded-tr-none rounded-bl-xl  text-lg md:text-2xl lg:text-3xl xl:text-4xl"
                                                                onClick={
                                                                    !account
                                                                        ? activateBrowserWallet
                                                                        : approving
                                                                }
                                                            >
                                                                Approve
                                                            </button>
                                                        )}
                                                        <button
                                                            className="w-1/2 border-t bg-gray-100 active:bg-gray-200 rounded-br-xl rounded-tr-xl md:rounded-tr-none text-lg md:text-2xl lg:text-3xl xl:text-4xl"
                                                            onClick={
                                                                setAmountToMax
                                                            }
                                                        >
                                                            MAX
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-row md:flex-col md:w-1/3 h-1/3 md:h-full md:border-l border-b md:border-b-0 md:border-r">
                                        <div className="flex justify-center items-center md:h-1/3 w-1/3 md:w-full order-1 md:order-1">
                                            <span className="text-lg md:text-2xl lg:text-3xl xl:text-5xl">
                                                Tokens Staked:{" "}
                                                <span
                                                    className=""
                                                    id="tokenStaked"
                                                >
                                                    ?
                                                </span>
                                            </span>
                                        </div>
                                        <div className="flex justify-center items-center md:h-1/3 w-1/3 md:w-full order-3 md:order-2">
                                            <span className="text-lg md:text-2xl lg:text-3xl xl:text-5xl">
                                                Your Rewards:{" "}
                                                <span className="" id="rewards">
                                                    ?
                                                </span>
                                            </span>
                                        </div>
                                        <div className="flex justify-center items-center md:h-1/3 w-1/3 md:w-full order-2 md:order-3">
                                            <div className="bg-gradient-to-tr from-customPink via-customPurple to-customOrange rounded-2xl p-1 w-max mx-auto">
                                                <button className="text-lg md:text-2xl lg:text-3xl xl:text-4xl bg-white rounded-xl px-4 hover:bg-gray-100 active:bg-gray-200">
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
                                            <div className="bg-gradient-to-tr from-customPink via-customPurple to-customOrange rounded-2xl p-1 mx-auto ">
                                                <div className="flex flex-col justify-between text-lg md:text-2xl lg:text-3xl xl:text-5xl bg-white rounded-xl">
                                                    <input
                                                        className="bg-gray-100 text-lg md:text-2xl lg:text-3xl xl:text-4xl rounded-tl-xl rounded-bl-xl md:rounded-bl-none rounded-tr-xl acitve:outline-none focus:outline-none text-center"
                                                        type="number"
                                                        placeholder="Amount to withdraw"
                                                        onChange={() =>
                                                            setAmount
                                                        }
                                                    />
                                                    <div className="flex">
                                                        <button
                                                            className="w-1/2 border-t bg-gray-100 active:bg-gray-200 rounded-br-none rounded-tr-none rounded-bl-xl text-lg md:text-2xl lg:text-3xl xl:text-4xl"
                                                            onClick={
                                                                !account
                                                                    ? activateBrowserWallet
                                                                    : withdraw
                                                            }
                                                        >
                                                            Withdraw
                                                        </button>
                                                        <button
                                                            className="w-1/2 border-t bg-gray-100 active:bg-gray-200 rounded-br-xl rounded-tr-xl md:rounded-tr-none text-lg md:text-2xl lg:text-3xl xl:text-4xl"
                                                            onClick={() =>
                                                                setAmountToMax
                                                            }
                                                        >
                                                            MAX
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
                </div>
            </div>
        </>
    )
}

export default TokenStaking
