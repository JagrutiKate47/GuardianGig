import React, { useState } from "react";
import { ethers } from "ethers";
import { FaUserCircle } from "react-icons/fa";

function BuyerUserP() {
  const [data, setdata] = useState({
    address: "",
    Balance: null,
});

// Button handler button for handling a
// request event for metamask
const btnhandler = () => {
    // Asking if metamask is already present or not
    if (window.ethereum) {
        // res[0] for fetching a first wallet
        window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((res) =>
                accountChangeHandler(res[0])
            );
    } else {
        alert("install metamask extension!!");
    }
};

// getbalance function for getting a balance in
// a right format with help of ethers
const getbalance = (address) => {
    // Requesting balance method
    window.ethereum
        .request({
            method: "eth_getBalance",
            params: [address, "latest"],
        })
        .then((balance) => {
            // Setting balance
            setdata({
                Balance:
                    ethers.utils.formatEther(balance),
            });
        });
};

// Function for getting handling all events
const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
        address: account,
    });

    // Setting a balance
    getbalance(account);
};
  return (
    <div className="bg-[#071A2D] h-screen pt-10 px-4 md:px-8">
      <div className="App">
 
            <div className="text-center text-white">
                
                    <strong>Address: </strong>
                    {data.address}
                        <strong>Balance: </strong>
                        {data.Balance}
                        <button className="h-8 w-48 bg-black" onClick={btnhandler}>
                        Connect to wallet
                        </button>
                
            </div>
        </div>
      <div className="flex md:grid items-center justify-between">
        <a href="#">
          <button className="bg-[#00B2FF] hover:bg-[#003F59] text-black font-semibold px-4 py-1 md:px-12 md:py-2 md:ml-[45rem] md:mb-4 md:mr-4">
            Buyer
          </button>
        </a>

        <div className="text-white font-bold md:pl-4">
          <FaUserCircle size={42} className="pb-2 md:pb-0 md:mr-2" />
          <div>
            <h4 className="text-xl md:text-2xl">Name</h4>
            <p className="text-sm md:text-base">
              Company Name- <span className="text-blue-300">Input</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-8">
        <div className="bg-[#0D2F4A] p-4 rounded-md">
          <h4 className="text-white text-xl">Designer</h4>
          <button className="bg-[#00B2FF] hover:bg-[#003F59] text-black font-semibold px-4 py-1 mt-2 md:px-6 md:py-2">
            Hired
          </button>
          <p className="text-white mt-2 md:text-base">Name</p>
          <p className="text-white md:text-base">Total fees - 5000</p>
          <button className="bg-blue-400 text-black px-4 py-1 mt-2 md:px-6 md:py-2">
            Smart Contract
          </button>
        </div>

        <div className="bg-[#0D2F4A] p-4 rounded-md">
          <select className="w-full bg-black text-white p-2 md:text-lg">
            <option className="text-lg">Details</option>
            <option>Project done-25%</option>
            <option>Payment done-Rs1250</option>
            <option>Amount left-Rs3750</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default BuyerUserP;
