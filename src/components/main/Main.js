import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ChainId, DAppProvider, Token, useEthers } from "@usedapp/core"
import Navbar from "../navbar/Navbar"
import Header from "../header/Header"
import Content from "../content/Content"
import Tokenomics from "../tokenomics/Tokenomics"
import Achtergrond from "../achtergrond/Achtergrond"
import Footer from "../footer/Footer"
import "./Main.css"

function Main() {
    const { account, activateBrowserWallet } = useEthers()
    return (
        <DAppProvider
            config={{
                networks: [ChainId.Goerli, ChainId.BSC, ChainId.Mainnet],
            }}
        >
            <Navbar />
            <Header />
            <Content />
            <Tokenomics />
            <Achtergrond />
            {/* <Footer /> */}
        </DAppProvider>
    )
}

export default Main