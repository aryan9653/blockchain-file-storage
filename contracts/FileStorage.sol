// contracts/FileStorage.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FileStorage {
    struct File {
        string ipfsHash;
        uint256 timestamp;
        address owner;
    }

    mapping(string => File) private files;

    event FileUploaded(string indexed ipfsHash, uint256 timestamp, address indexed owner);

    function uploadFile(string memory _ipfsHash) public {
        require(bytes(_ipfsHash).length > 0, "IPFS hash is required");
        files[_ipfsHash] = File(_ipfsHash, block.timestamp, msg.sender);
        emit FileUploaded(_ipfsHash, block.timestamp, msg.sender);
    }

    function getFile(string memory _ipfsHash) public view returns (File memory) {
        require(bytes(files[_ipfsHash].ipfsHash).length > 0, "File not found");
        return files[_ipfsHash];
    }
}
