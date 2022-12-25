import React from "react"
import { ChainId, DAppProvider, Token, useEthers } from "@usedapp/core"
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Content from "./components/content/Content"
import Footer from "./components/footer/Footer"
import Tokenomics from "./components/tokenomics/Tokenomics"
import Achtergrond from "./components/achtergrond/Achtergrond.js"
import "./App.css"

function App() {
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
            <Tokenomics />
            {/* <Footer /> */}
        </DAppProvider>
    )
}

export default App
