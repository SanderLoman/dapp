import React from "react"

const Navbar = () => {
    return (
        //create a navbar with wallet connect options
        <nav className="flex items-center justify-between flex-wrap p-6">
            <div>
                <span className="font-thin text-xl tracking-tight text-white">
                labore solverit
                </span>
            </div>
            <div>
                <span className="font-thin text-xl tracking-tight mx-16 text-white">
                    About
                </span>
                <span className="font-thin text-xl tracking-tight mx-16 text-white">
                    Staking
                </span>
                <span className="font-thin text-xl tracking-tight mx-16 text-white">
                    Roadmap
                </span>
            </div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 shadow-lg shadow-blue-500/40 hover:shadow-blue-500/40 rounded">
                    Connect Wallet
                </button>
            </div>
        </nav>
    )
}

export default Navbar
