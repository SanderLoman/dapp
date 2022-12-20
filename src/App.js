import React from "react"
import { ChainId, DAppProvider, useEthers } from "@usedapp/core"
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Content from "./components/content/Content"
import Footer from "./components/footer/Footer"
import Rand from "./components/rand/Rand"
import Scheur from "./assets/scheurImage.jpg"
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
            <Footer />
        </DAppProvider>
    )
}

export default App
