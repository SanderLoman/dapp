import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ChainId, DAppProvider, Token, useEthers } from "@usedapp/core"
import Main from "./components/main/Main"
import TokenStaking from "./components/tokenstaking/TokenStaking"
import "./App.css"

function App() {
    const { account, activateBrowserWallet } = useEthers()

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/tokenstaking" element={<TokenStaking />} />
            </Routes>
        </Router>
    )
}

export default App
