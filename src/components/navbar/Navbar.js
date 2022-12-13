import { React, useState } from "react"
import { FaTimes, FaBars } from "react-icons/fa"
import uni from "../../assets/uni.png"
import "./Navbar.css"

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closemenu = () => setClick(false)

    return (
        <header className="flex justify-between h-full">
            <img src={uni} alt="logo" className="w-20 h-20" />
            <div className="" onClick={handleClick}>
                {click ? <FaTimes className="FaTimes"/> : <FaBars className="FaTimes"/>}
            </div>
            <nav className="text-black">
                <ul className="flex">
                    <li className="text-4xl m-5">
                        <a href="#projects">Staking</a>
                    </li>
                    <li className="text-4xl m-5">
                        <a href="#roadmap">Roadmap</a>
                    </li>
                    <li className="text-4xl m-5">
                        <a href="#team">Team</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
