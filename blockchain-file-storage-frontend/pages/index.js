import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { motion } from "framer-motion";
import Web3Modal from "web3modal";
import contractABI from "../utils/contractABI.json"; // Replace with your actual ABI
import { Button, Card, Input } from "../components/ui"; // Adjust the relative path




const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS"; // Replace with your deployed contract address

export default function Home() {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [file, setFile] = useState(null);
  const [fileHash, setFileHash] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const checkIfWalletIsConnected = async () => {
    try {
      const web3Modal = new Web3Modal();
      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const accounts = await provider.listAccounts();
      setProvider(provider);
      setAccount(accounts[0]);
    } catch (error) {
      console.log("No wallet connected");
    }
  };

  const uploadFileToBlockchain = async () => {
    if (!file) {
      alert("Please select a file to upload!");
      return;
    }

    const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, provider.getSigner());

    try {
      const uploadTransaction = await contract.uploadFile(file.name, fileHash);
      await uploadTransaction.wait();
      setUploadedFiles([...uploadedFiles, { name: file.name, hash: fileHash }]);
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    // Simulate file hashing (for demo purposes)
    const hash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(selectedFile.name));
    setFileHash(hash);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold text-gray-900">Blockchain File Storage</h1>
        <p className="text-lg mt-4">Upload your files securely to the blockchain</p>

        {account ? (
          <p className="text-green-600 mt-4">Connected: {account}</p>
        ) : (
          <Button onClick={checkIfWalletIsConnected} className="mt-4">Connect Wallet</Button>
        )}
      </motion.div>

      {account && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full max-w-lg mt-6"
        >
          <Card>
            <h2 className="text-xl font-semibold mb-2">Upload a File</h2>
            <Input type="file" onChange={handleFileChange} className="mb-4" />
            <Button onClick={uploadFileToBlockchain}>Upload to Blockchain</Button>

            {file && <p className="mt-2 text-gray-700">File selected: {file.name}</p>}
          </Card>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Uploaded Files</h2>
            <ul className="space-y-2">
              {uploadedFiles.map((uploadedFile, index) => (
                <li key={index} className="bg-white shadow rounded p-4">
                  <strong>{uploadedFile.name}</strong>
                  <p className="text-sm text-gray-600">Hash: {uploadedFile.hash}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
}
