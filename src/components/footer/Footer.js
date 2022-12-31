import React from "react"
import Uni from "../../assets/uni.png"
import Telegram from "../../assets/telegram.png"
import Twitter from "../../assets/twitter.png"
import DexScreener from "../../assets/dexscreener.png"
import Etherscan from "../../assets/etherscan.png"
import "./Footer.css"

const Footer = () => {
    return (
        <div className="flex flex-col h-max px-4 pt-4 border-t">
            <div className="flex justify-around pb-10">
                <div>
                    <img href="" src={Uni} alt="Uni" className="h-16 p-2 " />
                </div>
                <div>
                    <img
                        href=""
                        src={Telegram}
                        alt="Telegram"
                        className="h-16 p-2 "
                    />
                </div>
                <div>
                    <img
                        href=""
                        src={DexScreener}
                        alt="Dex Screener"
                        className="h-16 p-2 "
                    />
                </div>
                <div>
                    <img
                        href=""
                        src={Twitter}
                        alt="Twitter"
                        className="h-16 p-2 "
                    />
                </div>
                <div>
                    <img
                        href=""
                        src={Etherscan}
                        alt="Etherscan"
                        className="h-16 p-2 "
                    />
                </div>
            </div>
            <div>
                <h1 className="flex justify-center text-4xl">
                    RISK DISCLOSURE
                </h1>
                <p className="flex text-center md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto items-center text-2xl pb-10">
                    Please note there are always risks associated with
                    smart-contracts. Please use it at your own risk. wtfdudes is
                    not a registered broker, analyst or investment advisor.
                    Everything that we provide on this site is purely for
                    guidance, informational and educational purposes. All
                    information contained in here should be independently
                    verified and confirmed. We do not accept any liability for
                    any loss or damage whatsoever caused in reliance upon such
                    information or services. Please be aware of the risks
                    involved with any trading done in any financial market. Do
                    not trade with money that you cannot afford to lose. When in
                    doubt, you should consult a qualified financial advisor
                    before making any investment decisions.
                </p>
            </div>
            <p className="flex justify-center text-lg md:text-2xl">
                © 2023 WTFDUDES - All rights reserved
            </p>
        </div>
    )
}

export default Footer
