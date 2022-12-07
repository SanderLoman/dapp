// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IERC20 {
    event Transfer(address indexed from, address indexed to, uint256 value);

    event Approval(address indexed owner, address indexed spender, uint256 value);

    function totalSupply() external view returns (uint256);

    function balanceOf(address account) external view returns (uint256);

    function transfer(address to, uint256 amount) external returns (bool);

    function allowance(address owner, address spender) external view returns (uint256);

    function approve(address spender, uint256 amount) external returns (bool);

    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);
}

error Staking__TransferFailed();

contract Staking {
    IERC20 public s_stakingToken;

    uint256 public constant REWARD_RATE = 100;
    uint256 public s_totalSupply;
    uint256 public s_rewardPerTokenStored;
    uint256 public s_lastUpdateTime;
    bool private locked;

    mapping (address => uint256) public s_balances;
    mapping (address => uint256) public s_userRewardPerTokenPaid;
    mapping (address => uint256) public s_rewards;

    event Staked(address indexed user, uint256 amount);

    modifier LTS() {
        require(!locked, "Tried reentrancy.");
        locked = true;
        _;
        locked = false;
    }

    modifier updateReward(address account) {
        s_rewardPerTokenStored = rewardPerToken();
        s_lastUpdateTime = block.timestamp;
        s_rewards[account] = earned(account);
        s_userRewardPerTokenPaid[account] = s_rewardPerTokenStored;
        _;
    }

    constructor (address stakeToken) {
        s_stakingToken = IERC20(stakeToken);
    }

    function earned(address account) public view returns (uint256) {
        uint256 currentBalance = s_balances[msg.sender];
        uint256 amountPaid = s_userRewardPerTokenPaid[msg.sender];
        uint256 currentRewardPerToken = rewardPerToken();
        uint256 pastRewards = s_rewards[account];

        uint256 _earned = ((currentBalance * (currentRewardPerToken - amountPaid)) / 1e18) + pastRewards;
        return _earned;
    }

    function rewardPerToken() public view returns (uint256) {
        if (s_totalSupply == 0) {
            return s_rewardPerTokenStored;
        }
        return s_rewardPerTokenStored + (((block.timestamp - s_lastUpdateTime) * REWARD_RATE * 1e18) / s_totalSupply);
    }

    function stake(uint256 amount) external updateReward(msg.sender) LTS {
        require(amount > 0, "Cannot stake 0");
        s_balances[msg.sender] += amount;
        s_totalSupply += amount;
        bool sucesss = s_stakingToken.transferFrom(msg.sender, address(this), amount);
        if (!sucesss) {
            revert Staking__TransferFailed();
        } else {
            emit Staked(msg.sender, amount);
        }
    }

    function withdraw(uint256 amount) external updateReward(msg.sender) LTS {
        require(amount > 0, "Cannot withdraw 0");
        require(s_balances[msg.sender] >= amount, "Not enough balance");
        s_balances[msg.sender] -= amount;
        s_stakingToken.transfer(msg.sender, amount);
    }

    function claimReward() external updateReward(msg.sender) LTS {
        uint256 reward = s_rewards[msg.sender];
        bool sucesss = s_stakingToken.transfer(msg.sender, reward);
        if (!sucesss) {
            revert Staking__TransferFailed();
        }
    }
}

// 