import { React, useState } from "react"
import { FaTimes, FaBars } from "react-icons/fa"
import WTFlogo from "../../assets/WTFlogo.png"
import "./Navbar.css"

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closemenu = () => setClick(false)

    return (
        <header className="flex justify-between h-full">
            <img src={WTFlogo} alt="logo" className="h-10 md:h-20 pl-4" />
            <div className="" onClick={handleClick}>
                {click ? <FaTimes className="FaTimes"/> : <FaBars className="FaTimes"/>}
            </div>
            <nav className="text-black">
                <ul className="flex">
                    <li className="text-5xl m-5">
                        <a href="#projects">Staking</a>
                    </li>
                    <li className="text-5xl m-5">
                        <a href="#roadmap">Roadmap</a>
                    </li>
                    <li className="text-5xl m-5">
                        <a href="#team">Team</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
