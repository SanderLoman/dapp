import { ChainId, DAppProvider, useEthers } from "@usedapp/core"
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Content from "./components/content/Content"
import "./App.css"
import React from "react"

function App() {
    const { account, activateBrowserWallet } = useEthers()
    return (
        <DAppProvider
            config={{
                supportedChains: [ChainId.Goerli, ChainId.BSC, ChainId.Mainnet],
            }}
        >
            <React.Fragment>
                <Navbar />
            </React.Fragment>
            <Header />
            <Content />
        </DAppProvider>
    )
}

export default App
