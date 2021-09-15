import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && window.ethereum != null) {
    web3 = new Web3(window.ethereum);
} 

export default web3;