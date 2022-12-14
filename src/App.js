import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TokenStaking from "./components/tokenstaking/TokenStaking"
import Main from "./components/main/Main"
import "./App.css"

function App() {
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
