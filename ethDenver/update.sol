pragma solidity ^0.8.12;

interface ERC20Basic {
    function totalSupply() external view returns (uint256);

    function balanceOf(address who) external view returns (uint256);

    function transfer(address to, uint256 value) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);
}

interface ERC20 is ERC20Basic {
    function transferFrom(
        address from,
        address to,
        uint256 value
    ) external returns (bool);
}

contract awarder {
    event awarded(
        address employer,
        address hunter,
        string description,
        uint256 amount,
        address token
    );

    function award(
        string memory description,
        address hunter,
        uint256 amount,
        address token
    ) public {
        ERC20(token).transferFrom(msg.sender, hunter, amount);
        emit awarded(msg.sender, hunter, description, amount, token);
    }
}
