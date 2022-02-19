let TLContract
let TokenList
let TLContractAddress = '0xabd8a23eb103cfb15221cbe910869859bbff1ad3'
let TLContractABI = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'allTokens',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAllTokens',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_symbol',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_teamURI',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_teamName',
        type: 'string',
      },
    ],
    name: 'launchToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

let ERC20ABI = [
  {
    inputs: [
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_symbol',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_teamURI',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_teamName',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'teamName',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'teamURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

let TeamTokenABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_teamURI",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_teamName",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "teamName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "teamURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const awarderABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "_awards",
		"outputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "poster",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "hunter",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "hunter",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "award",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "numAwards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const awarderAddress = "0x19d9CB97d2C14B6621aAAC36deaB90494A4A0085"
let Awarder
let provider
let signer

let eventLogs

async function login() {
	await ethereum.enable()
	provider = new ethers.providers.Web3Provider(window.ethereum);

	let accounts = await provider.listAccounts()

		signer = provider.getSigner(accounts[0]);

		document.getElementById("addressLabel").innerHTML = "Address: " + accounts[0]


		await updateEverything()
}

async function updateEverything() {
	let balance = await signer.getBalance()
	let formattedBalance = await ethers.utils.formatEther(balance)
	document.getElementById("statusLabel").innerHTML = "STATUS: CONNECTED"
	document.getElementById("balanceLabel").innerHTML = "Balance: " + formattedBalance + " ONE"

	let BATable = document.getElementById("BATable")
	while(BATable.hasChildNodes())
	{
	   BATable.removeChild(BATable.firstChild);
	}	document.getElementById("teamSelect").innerHTML=""
	Awarder = new _ethers.Contract(awarderAddress, awarderABI, signer);
	TLContract = new _ethers.Contract(TLContractAddress, TLContractABI, signer)
  TokenList = await getTokenDetails(TLContract, signer)
	console.log("pass")
	await populateTeamSelect()
	console.log("pass2")

	await getBalance()
	console.log("pass3")
	await getAwarded()
	await populateAwarded()
}

async function selectChange() {
	await getBalance()
	await getAwarded()
}


async function getBalance(){
	let select = document.getElementById("teamSelect")

	let tokenAddress = TokenList[select.selectedIndex].address

	let token = new _ethers.Contract(tokenAddress, ERC20ABI, signer)

	let symbol = await token.symbol()
	let decimals = await token.decimals()

	let approved = await token.allowance(signer._address, awarderAddress)
	let balance = await token.balanceOf(signer._address)

	approved = ethers.utils.formatUnits(approved,decimals)
	approved = ethers.utils.commify(approved)

	balance = ethers.utils.formatUnits(balance,decimals)
	balance = ethers.utils.commify(balance)


	document.getElementById("tokenBalanceLabel").innerHTML = "Balance: " + balance + " " + symbol

	document.getElementById("tokenApprovedLabel").innerHTML = "Approved: " + approved + " " + symbol

}


async function approve() {
	let select = document.getElementById("teamSelect")

	let tokenAddress = TokenList[select.selectedIndex].address

	let token = new _ethers.Contract(tokenAddress, ERC20ABI, signer)
	let decimals = await token.decimals()

  let amount = document.getElementById("approveAmount").value;
  amount = ethers.utils.parseUnits(amount, decimals)

  await token.approve(awarderAddress,amount)
}

async function award(){
	let select = document.getElementById("teamSelect")

	let tokenAddress = TokenList[select.selectedIndex].address
	let token = new _ethers.Contract(tokenAddress, ERC20ABI, signer)
	let decimals = await token.decimals()

	let hunter = document.getElementById("bountyHunter").value;
	let description = document.getElementById("bountyDescription").value;
	let amount = document.getElementById("bountyAmount").value;



	amount = ethers.utils.parseUnits(amount, decimals)
	await Awarder.award(tokenAddress,hunter,description,amount)
}

let awarded = new Array()
async function getAwarded() {
	let numAwards = await Awarder.numAwards()
	for(let m=0;m<numAwards;m++){
		let award = await Awarder._awards(m)

		awarded.push(award)
	}

}

async function populateAwarded() {

	for(let n=0;n<awarded.length;n++){

		let tokenAddress = awarded[n].token
		let teamToken = new _ethers.Contract(tokenAddress, TeamTokenABI, signer)
		let decimals = await teamToken.decimals()
		let symbol = await teamToken.symbol()

		let row=document.createElement("tr");
		cell1 = document.createElement("td");
		cell2 = document.createElement("td");
		cell3 = document.createElement("td");
		cell4 = document.createElement("td");
		cell5 = document.createElement("td");
		cell6 = document.createElement("td");

		let teamName = await teamToken.teamName()
		console.log(teamName)
		let token = awarded[n].token
		let poster = awarded[n].poster
		let hunter = awarded[n].hunter
		let amount = awarded[n].amount
		let description = awarded[n].description

		amount = ethers.utils.formatUnits(amount,decimals)
		amount = ethers.utils.commify(amount)
		amount = amount + " " + symbol

		let textnode1 = document.createTextNode(teamName)
		let textnode2 = document.createTextNode(token)
		let textnode3 = document.createTextNode(poster)
		let textnode4 = document.createTextNode(hunter)
		let textnode5 = document.createTextNode(amount)
		let textnode6 = document.createTextNode(description)

		cell1.appendChild(textnode1)
		cell2.appendChild(textnode2)
		cell3.appendChild(textnode3)
		cell4.appendChild(textnode4)
		cell5.appendChild(textnode5)
		cell6.appendChild(textnode6)

		row.appendChild(cell1)
		row.appendChild(cell2)
		row.appendChild(cell3)
		row.appendChild(cell4)
		row.appendChild(cell5)
		row.appendChild(cell6)

		document.getElementById("BATable").appendChild(row);
	}
}

async function getTokenDetails(TLContract, signer) {
  console.log(TLContract)
  let tokenList = await TLContract.getAllTokens()
  //console.log(tokenList)
  let Details = []
  for (let i = 0; i < tokenList.length; i++) {
    let ERC20 = new _ethers.Contract(tokenList[i], ERC20ABI, signer)
    console.log(ERC20)
    let _symbol = ERC20.symbol()
    let _name = ERC20.name()
    let _teamName = ERC20.teamName()
    let _teamURI = ERC20.teamURI()
		let _address = tokenList[i]
    let result = await Promise.all([_name, _symbol, _teamName, _teamURI,_address])
    Details.push({
      name: result[0],
      symbol: result[1],
      teamName: result[2],
      teamURI: result[3],
			address: result[4]
    })
  }
  return Details
}


async function populateTeamSelect() {
	let select = document.getElementById("teamSelect")
	for(t=0;t<TokenList.length;t++){
		let option = document.createElement('option');
		option.setAttribute('value', t);
		option.appendChild(document.createTextNode(TokenList[t].name));
		select.appendChild(option);
	}
}
