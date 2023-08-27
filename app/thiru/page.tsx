"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { addDocument } from "../config/BlockchainServices";
import { ethers } from "ethers";


const Upload = () => {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [upload, setUpload] = useState<File | null>(null);


  async function uploadFile() {
    const ipfsHash = "Hello"; // Calculate the actual IPFS hash here
    const usage = ".../"
    const name = "../"
    const token = await addDocument({ name, usage, ipfsHash });
    console.log(token);
  }
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);

  useEffect(() => {
    const checkWalletConnection = async (): Promise<void> => {
      if (typeof window !== "undefined" && isEthereumAvailable(window)) {
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

  const connectWallet = async (): Promise<void> => {
    if (typeof window !== "undefined" && isEthereumAvailable(window)) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setIsWalletConnected(true);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    }
  };



  return (
    <div className="mx-auto max-w-7xl my-0 md:my-10 pt-24 px-6 relative" id="upload-section">
      {/* Form */}
      <div className="mt-6">
        <h2 className="text-3xl font-semibold mb-4 text-center text-white">Upload Your Document</h2>
        <p className="mb-6 text-gray-600 text-center text-white">Securely upload and manage your important documents.</p>
        <form className="p-6 rounded-lg shadow-lg" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)' }}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="type" className="block text-gray-700 font-medium mb-2">Type</label>
            <input
              type="text"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="file" className="block text-gray-700 font-medium mb-2">File Upload</label>
            <input
              type="file"
              id="file"
              onChange={(e) => {
                if (e && e.target && e.target.files) {
                  setUpload(e?.target?.files[0]);
                }
              }}
              

              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={uploadFile}
            type="button"
            className="bg-gradient-to-r from-navyblue to-navyblue text-white border border-purple font-medium py-2 px-4 rounded-md hover:opacity-90"
          >
            Upload
          </button>
        </form>
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
  );
};

export default Upload;


function isEthereumAvailable(window: Window & typeof globalThis): window is Window & typeof globalThis & { ethereum: any } {
  return "ethereum" in window;
}
