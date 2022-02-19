pragma solidity ^0.8.12;

abstract contract ERC20Basic {
  function totalSupply() public view virtual returns (uint256);
  function balanceOf(address who) public view virtual returns (uint256);
  function transfer(address to, uint256 value) public virtual returns (bool);
  event Transfer(address indexed from, address indexed to, uint256 value);
}

abstract contract ERC20 is ERC20Basic {
  function allowance(address owner, address spender) public view virtual returns (uint256);
  function transferFrom(address from, address to, uint256 value) public virtual returns (bool);
  function approve(address spender, uint256 value) public virtual returns (bool);
  event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract awarder{
    function award(address token, address hunter, string memory description, uint amount) public{
        ERC20(token).transferFrom(msg.sender,hunter,amount);
        _award memory newAward = _award(token,msg.sender,hunter,description,amount);
        _awards.push(newAward);
    }

    struct _award {
        address token;
        address poster;
        address hunter;
        string description;
        uint amount;
    }

    _award[] public _awards;

    function numAwards() public view returns(uint){
        return _awards.length;
    }

}
