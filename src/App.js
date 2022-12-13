import React from "react"
import { ChainId, DAppProvider, useEthers } from "@usedapp/core"
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Content from "./components/content/Content"
import SectionOrange from "./components/sectionOrange/SectionOrange"
import SectionWhite from "./components/sectionWhite/SectionWhite"
import "./App.css"

function App() {
    const { account, activateBrowserWallet } = useEthers()
    return (
        <DAppProvider
            config={{
                supportedChains: [ChainId.Goerli, ChainId.BSC, ChainId.Mainnet],
            }}
        >
            <Navbar />
            <SectionWhite>
                <Header />
            </SectionWhite>
            <SectionOrange>
                <Content />
            </SectionOrange>
            <SectionWhite>
                <p className="text-center text-white text-2xl z-auto">test</p>
            </SectionWhite>
            <SectionOrange></SectionOrange>
        </DAppProvider>
    )
}

export default App
