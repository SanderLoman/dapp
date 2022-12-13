import React from "react"
import { ChainId, DAppProvider, useEthers } from "@usedapp/core"
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Content from "./components/content/Content"
import SectionOrange from "./components/sectionOrange/SectionOrange"
import SectionWhite from "./components/sectionWhite/SectionWhite"
import "./App.css"
import SectionPurple from "./components/sectionPurple/SectionPurple"
import SectionPink from "./components/sectionPink/SectionPink"
import SectionLightPink from "./components/sectionLightPink/SectionLightPink"

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
            <SectionWhite></SectionWhite>
            <SectionPurple></SectionPurple>
            <SectionWhite></SectionWhite>
            <SectionLightPink></SectionLightPink>
            <SectionWhite></SectionWhite>
            <SectionPink></SectionPink>
        </DAppProvider>
    )
}

export default App
