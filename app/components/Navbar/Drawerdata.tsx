import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Web3Provider } from '@ethersproject/providers'; // Correct import
import { ethers } from "ethers";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '#home-section', current: false },
    { name: 'Upload', href: '/thiru', current: false },
    { name: 'Verify', href: '#features-section', current: false },
    { name: 'FAQ', href: '#faq-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


const Data = () => {
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  
    useEffect(() => {
      // Check if the wallet is connected here
      const checkWalletConnection = async () => {
        if (typeof window !== "undefined" && window.ethereum) {
          const ethProvider = new ethers.providers.Web3Provider(window.ethereum);
  
          try {
            await ethProvider.getSigner().getAddress();
            setProvider(ethProvider);
            setIsWalletConnected(true);
          } catch (error) {
            setIsWalletConnected(false);
          }
        }
      };
  
      checkWalletConnection();
    }, []);
  
    const connectWallet = async () => {
      if (typeof window !== "undefined" && window.ethereum) {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          setIsWalletConnected(true);
        } catch (error) {
          console.error("Error connecting wallet:", error);
        }
      }
    };
    return (
        <div className="rounded-md max-w-sm w-full">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                    'block  py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4"></div>
                        <button
          onClick={connectWallet}
          className={`bg-navyblue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded ${
            isWalletConnected ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
          }`}
          disabled={isWalletConnected}
        >
          {isWalletConnected ? "Connected" : "Connect Wallet"}
        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
