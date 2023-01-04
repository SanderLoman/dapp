import { ConnectButton } from "@rainbow-me/rainbowkit"
import "./ConnectButton.css"

const Test = () => {
    return (
        <div className="connect-button text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            <ConnectButton.Custom>
                {({
                    account,
                    chain,
                    openAccountModal,
                    openChainModal,
                    openConnectModal,
                    authenticationStatus,
                    mounted,
                }) => {
                    // Note: If your app doesn't use authentication, you
                    // can remove all 'authenticationStatus' checks
                    const ready = mounted && authenticationStatus !== "loading"
                    const connected =
                        ready &&
                        account &&
                        chain &&
                        (!authenticationStatus ||
                            authenticationStatus === "authenticated")

                    return (
                        <div
                            {...(!ready && {
                                "aria-hidden": true,
                                style: {
                                    opacity: 0,
                                    pointerEvents: "none",
                                    userSelect: "none",
                                },
                            })}
                        >
                            {(() => {
                                if (!connected) {
                                    return (
                                        <button
                                            onClick={openConnectModal}
                                            type="button"
                                        >
                                            Connect Wallet
                                        </button>
                                    )
                                }

                                if (chain.unsupported) {
                                    return (
                                        <button
                                            onClick={openChainModal}
                                            type="button"
                                        >
                                            Wrong network
                                        </button>
                                    )
                                }

                                return (
                                    <>
                                        <div className="flex">
                                            <button
                                                className="bg-slate-100"
                                                onClick={openChainModal}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                                type="button"
                                            >
                                                Chain: {chain.name}
                                            </button>

                                            <button
                                                className="bg-slate-200"
                                                onClick={openAccountModal}
                                                type="button"
                                            >
                                                {account.displayName}
                                            </button>
                                        </div>
                                    </>
                                )
                            })()}
                        </div>
                    )
                }}
            </ConnectButton.Custom>
        </div>
    )
}

export default Test

// split into two components so we can justify between

// overleg met jelle voor dubbele launch of eth en bsc