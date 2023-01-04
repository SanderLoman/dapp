import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { MoralisProvider } from "react-moralis"
import "@rainbow-me/rainbowkit/styles.css"
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { configureChains, createClient, goerli, WagmiConfig } from "wagmi"
import { mainnet, polygon, optimism, arbitrum, bsc } from "wagmi/chains"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"

const { chains, provider } = configureChains(
    [mainnet, goerli, bsc],
    [
        alchemyProvider({ apiKey: process.env.REACT_APP_GOE_RPC_URL }),
        publicProvider(),
    ]
)
const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    chains,
})
const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
                <MoralisProvider initializeOnMount={false}>
                    <App />
                </MoralisProvider>
            </RainbowKitProvider>
        </WagmiConfig>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
