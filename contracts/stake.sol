// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract StakeContract {
    // define a struct that represents a stake
    struct Stake {
        uint256 amount;
        uint256 time;
    }

    // define a mapping that maps an address to a stake
    mapping(address => Stake) public stakes;

    // define a function that allows users to stake tokens
    function stake(uint256 _amount, uint256 _time) public {
        // create a new stake
        Stake memory newStake = Stake(_amount, _time);

        // add the new stake to the mapping
        stakes[msg.sender] = newStake;
    }

    // define a function that allows users to withdraw their tokens
    function withdraw() public {
        // get the stake for the user
        Stake memory userStake = stakes[msg.sender];

        // check if the time has passed
        require(userStake.time < block.timestamp, "Time has not passed");

        // transfer the tokens to the user
        payable(msg.sender).transfer(userStake.amount);

        // remove the stake from the mapping
        delete stakes[msg.sender];
    }
}