pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TeamToken is ERC20 {
    string public teamURI;
    string public teamName;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _teamURI,
        string memory _teamName
    ) ERC20(_name, _symbol) {
        teamURI = _teamURI;
        teamName = _teamName;
        _mint(tx.origin, 1_000_000_000 * 10**18);
    }
}

contract TokenLauncher {
    address[] public allTokens;

    function launchToken(
        string memory _name,
        string memory _symbol,
        string memory _teamURI,
        string memory _teamName
    ) public {
        TeamToken T = new TeamToken(_name, _symbol, _teamURI, _teamName);
        allTokens.push(address(T));
    }

    function getAllTokens() public view returns (address[] memory) {
        return allTokens;
    }
}
