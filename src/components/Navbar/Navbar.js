import React from "react"

const Navbar = () => {
    // import useEthers
    return (
        //create a navbar with wallet connect options
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <div className="font-thin text-xl tracking-tight hover:bg-cyan-400">
                    <a href="#">LogoHier</a>
                </div>
                <div className="flex items-center">
                </div>
            </div>
        </nav>
    )
}

export default Navbar
