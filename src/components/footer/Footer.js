import React from "react"
import { FaTelegramPlane, FaDollarSign, FaRegCopy } from "react-icons/fa"
import UniLogo from "../../assets/uni.png"
import "./Footer.css"

const Footer = () => {
    // copy the contract address to the clipboard
    const handleCopy = () => {
        const contractAddress = "0x1234567890abcdef" // change this later
        navigator.clipboard.writeText(contractAddress)
    }

    return null
}

export default Footer
