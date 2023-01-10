import { React, useEffect, useState } from "react"
import { stakeContract, stakingABI } from "../../constants/stakingToken"
import { coinContract, coinABI } from "../../constants/coinToken"
import { useEthers } from "@usedapp/core"
import { Link } from "react-router-dom"
import { ethers } from "ethers"
import { Switch } from "@headlessui/react"
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
    const [withdrawAmount, setWithdrawAmount] = useState()
    const [approved, setApproved] = useState(false)
    const [enabled, setEnabled] = useState(false)
    const isConnected = account !== undefined

    useEffect(() => {
        const rewards = async () => {
            const R = await WTFstake.earned(account)
            // eslint-disable-next-line
            if (R == 0) {
                document.getElementById("rewards").innerHTML = " " + 0
            } else {
                document.getElementById("rewards").innerHTML =
                    " " + (R / 10 ** 9).toFixed(0)
            }
        }

        const stakedTokens = async () => {
            const ST = await WTFstake.balanceOf(account)
            // eslint-disable-next-line
            if (ST == 0) {
                document.getElementById("tokenStaked").innerHTML = " " + 0
            } else {
                document.getElementById("tokenStaked").innerHTML =
                    " " + (ST / 10 ** 9).toFixed(0)
            }
        }

        const getBalance = async () => {
            const balance = await WTFcoin.balanceOf(account)
            document.getElementById("holdings").innerHTML =
                " " + ((balance / 10 ** 9).toFixed(0) - 1)
        }

        if (isConnected) {
            getBalance()
            stakedTokens()
            rewards()
        }

        const tax = async () => {
            const tax = await WTFstake.performanceFee()
            document.getElementById("tax").innerHTML = " " + tax / 100 + " "
            document.getElementById("tax2").innerHTML = " " + tax / 100 + "%"
        }
        
        const earlyTax = async () => {
            const earlyTax = await WTFstake.earlyUnstakeFee()
            document.getElementById("earlyTax").innerHTML = " " + earlyTax / 100 + "%"
        }
        
        const totalSupply = async () => {
            const TS = await WTFstake.totalSupply()
            // eslint-disable-next-line
            if (TS == 0) {
                document.getElementById("TVL").innerHTML = " " + 0
            } else {
                document.getElementById("TVL").innerHTML =
                    " " + (TS / 10 ** 9).toFixed(0)
            }
        }
        
        const totalTime = async () => {
            const TT = await WTFstake.lockDuration()
            document.getElementById("totalTime").innerHTML =
                " " + (TT / 86400).toFixed(0) + " days"
        }
        
        const remainingTime = async () => {
            const LD = await WTFstake.lockDuration()
            const PF = await WTFstake.periodFinish()
            const PFminusRT = PF - LD
        
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const block = await provider.getBlock()
            const timestamp = block.timestamp
        
            const RT = PF - timestamp
        
            const days = Math.floor(RT / (24 * 60 * 60))
            const hours = Math.floor((RT % (24 * 60 * 60)) / (60 * 60))
            const minutes = Math.floor((RT % (60 * 60)) / 60)
            const seconds = Math.floor(RT % 60)
        
            if (PFminusRT >= timestamp) {
                document.getElementById("remaining").innerHTML = "Over!"
            } else {
                document.getElementById("remaining").innerHTML =
                    " " +
                    days +
                    "d" +
                    " " +
                    hours +
                    "h" +
                    " " +
                    minutes +
                    "m" +
                    " " +
                    seconds +
                    "s"
            }
        }
        
        tax()
        earlyTax()
        totalSupply()
        totalTime()
        remainingTime()
    }, [account])

    const setAmountToMax = async () => {
        const balance = await WTFcoin.balanceOf(account)
        setAmount((balance / 10 ** 9).toFixed(0) - 1)
    }

    const setWithdrawAmountToMax = async () => {
        const balance = await WTFstake.balanceOf(account)
        setWithdrawAmount((balance / 10 ** 9).toFixed(0))
    }

    const getRewards = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(stakeContract, stakingABI, signer)
        const tx = await contract.getReward()
        await tx.wait()
    }

    const stake = async (amount) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(stakeContract, stakingABI, signer)
        if (amount == 0) {
            throw new Error("Amount cannot be 0")
        } else {
            const tx = await contract.stake((amount * 10 ** 9).toString())
            await tx.wait()
        }
    }

    const approving = async (amount) => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(coinContract, coinABI, signer)
            if (amount == 0) {
                throw new Error("Amount cannot be 0")
            } else {
                const tx = await contract.approve(
                    stakeContract,
                    (amount * 10 ** 9).toString()
                )
                await tx.wait()
                const tx2 = await WTFcoin.allowance(account, stakeContract)
                await tx2.wait()

                setApproved(true) // maybe change later to check if approved or not
            }
        } catch (error) {
            throw new Error("Error approving tokens")
        }
    }

    const earlyWithdraw = async (amount) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(stakeContract, stakingABI, signer)
        const tx = await contract.emergencyWithdraw(
            (amount * 10 ** 9).toString()
        )
        await tx.wait()
    }

    const withdraw = async (amount) => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(
                stakeContract,
                stakingABI,
                signer
            )
            if (withdrawAmount == 0) {
                throw new Error("Amount cannot be 0")
            } else {
                const tx = await contract.withdraw(
                    (amount * 10 ** 9).toString()
                )
                await tx.wait()
            }
        } catch (error) {
            throw new Error(error)
        }
    }

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
            <div className="w-screen my-20 md:my-0 md:h-screen flex justify-center items-center">
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
                                    Lock Time:{" "}
                                    <span className="" id="totalTime">
                                        ?
                                    </span>
                                </div>
                                <div className="border-b">
                                    Remaining:{" "}
                                    <span className="" id="remaining">
                                        ?
                                    </span>
                                </div>
                                <div className="border-b">
                                    TAX:{" "}
                                    <span className="" id="tax">
                                        ?
                                    </span>
                                    /
                                    <span className="" id="tax2">
                                        ?
                                    </span>
                                </div>
                                <div className="border-b">
                                    Early Tax:{" "}
                                    <span className="" id="earlyTax">
                                        ?
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col md:w-5/6 h-full md:pl-2 md:border-l">
                                <div className="flex justify-between flex-col items-center md:flex-row text-lg md:text-2xl lg:text-4xl xl:text-5xl h-1/6 border-b">
                                    <div className="text-center">
                                        TVL:{" "}
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
                                    <div className="md:w-1/3 h-1/3 md:h-full pb-2 md:pb-0 border-b md:border-b-0 text-lg md:text-2xl lg:text-4xl xl:text-5xl">
                                        <div className="h-1/3 md:h-1/2">
                                            <span className="text-lg md:text-3xl lg:text-5xl xl:text-7xl">
                                                STAKE
                                            </span>
                                        </div>
                                        <div className="flex justify-center items-center h-2/3 md:h-1/2">
                                            <div className="bg-gradient-to-tr w-3/4 from-customPink via-customPurple to-customOrange rounded-2xl p-1 mx-auto">
                                                <div className="flex flex-col justify-between w-full text-lg md:text-2xl lg:text-3xl xl:text-5xl bg-white rounded-xl">
                                                    {approved ? (
                                                        <input
                                                            className="bg-gray-100 text-lg md:text-2xl lg:text-2xl xl:text-3xl rounded-tl-xl rounded-bl-xl md:rounded-bl-none rounded-tr-xl acitve:outline-none focus:outline-none text-center"
                                                            type="number"
                                                            placeholder="Amount to stake"
                                                            value={amount || ""}
                                                            onChange={(event) =>
                                                                setAmount(
                                                                    event.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    ) : (
                                                        <input
                                                            className="bg-gray-100 text-lg md:text-2xl lg:text-2xl xl:text-3xl rounded-tl-xl rounded-bl-none rounded-tr-xl acitve:outline-none focus:outline-none text-center"
                                                            type="number"
                                                            placeholder="Amount to approve"
                                                            value={amount || ""}
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
                                                                className="w-1/2 border-t bg-gray-100 active:bg-gray-200 rounded-br-xl md:rounded-br-none rounded-tr-xl md:rounded-tr-none rounded-bl-xl text-lg md:text-2xl lg:text-2xl xl:text-3xl"
                                                                onClick={
                                                                    !account
                                                                        ? activateBrowserWallet
                                                                        : () =>
                                                                              stake(
                                                                                  amount
                                                                              )
                                                                }
                                                            >
                                                                Stake
                                                            </button>
                                                        ) : (
                                                            <button
                                                                className="w-1/2 border-t bg-gray-100 active:bg-gray-200 rounded-br-none rounded-tr-none rounded-bl-xl  text-lg md:text-2xl lg:text-2xl xl:text-3xl"
                                                                onClick={
                                                                    !account
                                                                        ? activateBrowserWallet
                                                                        : () =>
                                                                              approving(
                                                                                  amount
                                                                              )
                                                                }
                                                            >
                                                                Approve
                                                            </button>
                                                        )}
                                                        <button
                                                            className="w-1/2 border-t bg-gray-100 active:bg-gray-200 rounded-br-xl rounded-tr-none text-lg md:text-2xl lg:text-2xl xl:text-3xl"
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

                                    <div className="flex flex-row md:flex-col md:w-1/3 h-1/3 md:h-full md:border-l border-b md:border-b-0 md:border-r px-2">
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
                                                <button
                                                    className="text-lg md:text-2xl lg:text-3xl xl:text-4xl bg-white rounded-xl px-4 hover:bg-gray-100 active:bg-gray-200"
                                                    onClick={getRewards}
                                                >
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
                                        <div className="flex flex-col justify-center items-center h-1/2">
                                            <div className="bg-gradient-to-tr w-3/4 from-customPink via-customPurple to-customOrange rounded-2xl p-1 mx-auto">
                                                <div className=" w-full flex flex-col justify-between text-lg md:text-2xl lg:text-3xl xl:text-5xl bg-white rounded-xl items">
                                                    <input
                                                        className="bg-gray-100 text-lg md:text-2xl lg:text-2xl xl:text-3xl rounded-tl-xl rounded-bl-none rounded-tr-xl acitve:outline-none focus:outline-none text-center"
                                                        type="number"
                                                        placeholder="Amount to withdraw"
                                                        value={
                                                            withdrawAmount || ""
                                                        }
                                                        onChange={(e) =>
                                                            setWithdrawAmount(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <div className="flex">
                                                        {enabled ? (
                                                            <button
                                                                className="w-1/2 border-t bg-gray-100 active:bg-gray-200 text-red-500 rounded-br-none rounded-tr-none rounded-bl-xl text-lg md:text-2xl lg:text-2xl xl:text-3xl"
                                                                onClick={
                                                                    !account
                                                                        ? activateBrowserWallet
                                                                        : () =>
                                                                              earlyWithdraw(
                                                                                  withdrawAmount
                                                                              )
                                                                }
                                                            >
                                                                Withdraw
                                                            </button>
                                                        ) : (
                                                            <button
                                                                className="w-1/2 border-t bg-gray-100 active:bg-gray-200 rounded-br-none rounded-tr-none rounded-bl-xl text-lg md:text-2xl lg:text-2xl xl:text-3xl"
                                                                onClick={
                                                                    !account
                                                                        ? activateBrowserWallet
                                                                        : () =>
                                                                              withdraw(
                                                                                  withdrawAmount
                                                                              )
                                                                }
                                                            >
                                                                Withdraw
                                                            </button>
                                                        )}
                                                        <button
                                                            className="w-1/2 border-t bg-gray-100 active:bg-gray-200 rounded-br-xl rounded-tr-none text-lg md:text-2xl lg:text-2xl xl:text-3xl"
                                                            onClick={
                                                                setWithdrawAmountToMax
                                                            }
                                                        >
                                                            MAX
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-center items-center py-2 w-full">
                                                <Switch
                                                    checked={enabled}
                                                    onChange={setEnabled}
                                                    className={`relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer border-2 border-transparent rounded-full bg-gradient-to-tr from-customPink via-customPurple to-customOrange transition-colors duration-200 ease-in-out mr-5`}
                                                >
                                                    <span
                                                        aria-hidden="true"
                                                        className={`${
                                                            enabled
                                                                ? "translate-x-9 bg-gray-300"
                                                                : "translate-x-0 bg-white"
                                                        } pointer-events-none h-[34px] w-[34px] transform rounded-full transition duration-200 ease-in-out`}
                                                    />
                                                </Switch>
                                                <span className="text-lg md:text-2xl lg:text-3xl xl:text-4xl">
                                                    Early Withdraw?
                                                </span>
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

// TODO:
// 1. make the approve function work with the correct amount of tokens in gwei and make sure no overflow errors occur ✅
// 2. make staking appear when a user has approved the contract to spend their tokens
// 3. calculate the remaining time for the pool to end ✅
// 4. make the withdraw function work
// 5. make the early withdraw function work
// 6. make APY and APR work
// 7. understand the staking contract its functions and know how it works
// 8. make sure react doesnt rerender specific functions, so that we dont overload the api with requests (could make a function that gets the data on refresh and only once)
// 9. make loading icons when approving, staking, withdrawing, claiming rewards
// 10. make pop up notifications when succesfully or failing approving, staking, withdrawing, claiming.
