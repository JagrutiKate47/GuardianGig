// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FreelancePaymentContract is Ownable, ReentrancyGuard {
    address payable public freelancer;
    address public client;
    uint256 public taskValue;
    bool public halfTaskCompleted = false;
    bool public taskCompleted = false;

    enum State { AWAITING_PAYMENT, AWAITING_COMPLETION, COMPLETED }
    State public currentState = State.AWAITING_PAYMENT;

    modifier onlyFreelancer() {
        require(msg.sender == freelancer, "Only the freelancer can perform this action");
        _;
    }

    modifier onlyClient() {
        require(msg.sender == client, "Only the client can perform this action");
        _;
    }

    modifier inState(State expectedState) {
        require(currentState == expectedState, "Contract is not in the correct state");
        _;
    }

    event Deposit(uint256 amount, address from);
    event HalfPaymentReleased(uint256 amount);
    event FullPaymentReleased(uint256 amount);
    event TaskCompletionStatus(bool halfCompleted, bool fullCompleted);

    constructor(address payable _freelancer, address _client, uint256 _taskValue) {
        require(_freelancer != address(0) && _client != address(0), "Invalid address");
        require(_taskValue > 0, "Task value must be greater than 0");

        transferOwnership(msg.sender); // Set the contract creator as the initial owner
        freelancer = _freelancer;
        client = _client;
        taskValue = _taskValue;
    }

    function deposit() external payable onlyClient inState(State.AWAITING_PAYMENT) {
        require(msg.value == taskValue, "Deposit must match the task value");
        currentState = State.AWAITING_COMPLETION;
        emit Deposit(msg.value, msg.sender);
    }

    function markHalfTaskCompleted() external onlyOwner inState(State.AWAITING_COMPLETION) {
        halfTaskCompleted = true;
        emit TaskCompletionStatus(halfTaskCompleted, taskCompleted);
    }

    function releaseHalfPayment() external onlyOwner nonReentrant inState(State.AWAITING_COMPLETION) {
        require(halfTaskCompleted, "Half of the task is not completed yet");
        
        uint256 paymentAmount = taskValue / 2;
        freelancer.transfer(paymentAmount);
        emit HalfPaymentReleased(paymentAmount);
    }

    function markTaskCompleted() external onlyOwner inState(State.AWAITING_COMPLETION) {
        taskCompleted = true;
        currentState = State.COMPLETED;
        emit TaskCompletionStatus(halfTaskCompleted, taskCompleted);
    }

    function releaseFullPayment() external onlyOwner nonReentrant inState(State.COMPLETED) {
        uint256 remainingBalance = address(this).balance;
        freelancer.transfer(remainingBalance);
        emit FullPaymentReleased(remainingBalance);
    }

    function refundClient() external onlyClient nonReentrant inState(State.AWAITING_COMPLETION) {
        require(!halfTaskCompleted, "Half of the task is already marked as completed");
        uint256 contractBalance = address(this).balance;
        payable(client).transfer(contractBalance);
        currentState = State.COMPLETED; // Prevent further actions after refund
    }
}
