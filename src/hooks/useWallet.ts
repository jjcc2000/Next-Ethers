"use client";
import { useEffect, useState } from "react";
import { ethers } from "ethers";


declare global {
    interface Window {
        ethereum?: any;
    }
}

export function useWallet() {
    const [account, setAccount] = useState<string | null>(null);
    const [balance, setBalance] = useState<string | null>(null);

    useEffect(() => {
        const connect = async () => {
            if (typeof window.ethereum !== "undefined") {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = await provider.getSigner();
                const address = await signer.getAddress();
                const balance = await provider.getBalance(address);

                setAccount(address);
                setBalance(ethers.formatEther(balance));
            }
        };

        connect();
    }, []);

    return { account, balance };
}
