import { ChainId, DAppProvider } from "@usedapp/core"
import Navbar from "./components/Navbar/Navbar"

function App() {
    return (
        <DAppProvider
            config={{
                supportedChains: [ChainId.Goerli, ChainId.BSC, ChainId.Mainnet],
            }}
        >
            <Navbar />
        </DAppProvider>
    )
}

export default App
