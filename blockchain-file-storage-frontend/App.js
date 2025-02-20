import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from './contractABI';
import './App.css';

function App() {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [storageValue, setStorageValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  // Connect to MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setCurrentAccount(accounts[0]);
        initializeContract();
      } catch (error) {
        console.log("Error connecting to MetaMask", error);
      }
    } else {
      alert("Please install MetaMask to interact with this dApp.");
    }
  };

  // Initialize provider and contract
  const initializeContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    setProvider(provider);
    setContract(contract);
  };

  // Fetch storage value from the contract
  const getStorageValue = async () => {
    if (contract) {
      try {
        const value = await contract.retrieve();  // Assuming the contract has a `retrieve` function
        setStorageValue(value);
      } catch (error) {
        console.error("Error retrieving value", error);
      }
    }
  };

  // Set storage value in the contract
  const setStorageValueInContract = async () => {
    if (contract && inputValue) {
      try {
        const tx = await contract.store(inputValue);  // Assuming the contract has a `store` function
        await tx.wait();
        setInputValue('');
        getStorageValue();  // Fetch updated value after transaction
      } catch (error) {
        console.error("Error setting value", error);
      }
    }
  };

  useEffect(() => {
    if (currentAccount) {
      getStorageValue();  // Fetch initial storage value on account connection
    }
  }, [currentAccount, contract]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Blockchain File Storage dApp</h1>
        {currentAccount ? (
          <p>Connected Account: {currentAccount}</p>
        ) : (
          <button onClick={connectWallet}>Connect MetaMask Wallet</button>
        )}

        {currentAccount && (
          <div>
            <h2>Stored Value: {storageValue}</h2>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter new value"
            />
            <button onClick={setStorageValueInContract}>Set Value</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
