import React from "react"
import WTFlogo from "../../assets/uni.png"
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="bg-white text-4xl">
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <ul className="flex">
                        <li className="flex items-center">
                            <img
                                src={WTFlogo}
                                alt="WTF logo"
                                className="w-10 h-10"
                            />
                            <span className="text-gray-600 text-xl mx-2 font-semibold">
                                WTF
                            </span>
                        </li>

                        <li className="flex items-center">
                            <span className="text-gray-600 text-xl mx-2 font-semibold">
                                Staking
                            </span>
                        </li>

                        <li className="flex items-center">
                            <span className="text-gray-600 text-xl mx-2 font-semibold">
                                Roadmap
                            </span>
                        </li>

                        <li className="flex items-center">
                            <span className="text-gray-600 text-xl mx-2 font-semibold">
                                Team
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
