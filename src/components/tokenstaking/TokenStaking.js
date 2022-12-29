import React from "react"
import WTFlogo from "../../assets/LOGO.png"
import { Link } from "react-router-dom"
import "./TokenStaking.css"

const TokenStaking = () => {
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
                        <div className="">Connect</div>
                    </div>
                </div>
            </nav>
            <div className="w-screen h-screen flex justify-center items-center">
                <div className="bg-gradient-to-tr from-customPink via-customPurple to-customOrange rounded-2xl w-5/6 h-3/4 md:w-2/3 md:h-2/3 p-2">
                    <div className="fullpart bg-white rounded-lg w-full h-full p-2">
                        <div className="toppart flex justify-between h-1/6 border-b-2 p-2">
                            <div className="apy">APY: 12.34%</div>
                            <div className="xforx">$WTF FOR $WTF</div>
                            <div className="apr">APR: 123.43%</div>
                        </div>
                        <div className="bottompart h-5/6">
                            <div className="leftpart p-2">
                                <div className="border-b">Total Time:</div>
                                <div className="border-b">Remaining:</div>
                                <div className="border-b">TAX: 1 / 1</div>
                                <div className="border-b">Early withdraw TAX: 20%</div>
                            </div>
                            <div className="rightpart p-2"><div className="border-b">TVL:</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TokenStaking
