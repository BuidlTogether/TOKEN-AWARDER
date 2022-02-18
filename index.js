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
	}
]

const awarderAddress = "0x91Eaf99A79073b064533be3279640b119a2e943C"
let Awarder
let provider
let signer

let eventLogs

async function login() {
	await ethereum.enable()
	provider = new ethers.providers.Web3Provider(window.ethereum);

	let accounts = await provider.listAccounts()

		signer = provider.getSigner(accounts[0]);

	let balance = await signer.getBalance()
	let formattedBalance = await ethers.utils.formatEther(balance)
	document.getElementById("statusLabel").innerHTML = "STATUS: CONNECTED"
	document.getElementById("addressLabel").innerHTML = "Address: " + accounts[0]
	document.getElementById("balanceLabel").innerHTML = "Balance: " + formattedBalance + " ONE"

	Awarder = new _ethers.Contract(awarderAddress, awarderABI, signer);


	// await getAwarded()
	// await populateAwarded()
}


async function getBalance(){

  let balance = await devcash.balanceOf(signer._address)

	balance = ethers.utils.formatUnits(balance,decimals)
	balance = ethers.utils.commify(balance)
  document.getElementById("balanceLabel").innerHTML = "Balance: " + balance + " " + symbol
}

async function getApproved(){
	let approved = await devcash.allowance(signer._address, awarderAddress)
	approved = ethers.utils.formatUnits(approved,decimals)
	approved = ethers.utils.commify(approved)
	console.log(signer._address)
	console.log(approved)
	document.getElementById("approvedLabel").innerHTML = "Approved: " + approved + " " + symbol

}

async function approve() {
  let amount = document.getElementById("approveAmount").value;
  amount = ethers.utils.parseUnits(amount, decimals)
  await devcash.approve(awarderAddress,amount)
}

async function award(){
	let hunter = document.getElementById("bountyHunter").value;
	let description = document.getElementById("bountyDescription").value;
	let amount = document.getElementById("bountyAmount").value;
	amount = ethers.utils.parseUnits(amount, decimals)
	await awarder.award(description,hunter,amount)
}

async function getAwarded() {


}

async function populateAwarded() {
	for(let n=0;n<eventLogs.length;n++){
		let log = eventLogs[n]
		let row=document.createElement("tr");
		cell1 = document.createElement("a");
		cell2 = document.createElement("td");
		cell3 = document.createElement("a");
		cell4 = document.createElement("td");

		let poster = log.poster
		let hunter = log.hunter
		let amount = log.amount + " " + symbol
		let description = log.description

		cell1.innerHTML = poster + ""
		cell1.href = "https://etherscan.io/address/" + poster
		cell2.innerHTML = hunter + ""
		cell2.href = "https://etherscan.io/address/" + hunter
		textnode2=document.createTextNode(hunter);
		cell3.innerHTML = amount
		cell3.href = "https://etherscan.io/tx/" + log.txHash
		textnode4=document.createTextNode(description)

		cell4.appendChild(textnode4);

		row.appendChild(cell1);
		row.appendChild(cell2);
		row.appendChild(cell3);
		row.appendChild(cell4);

		document.getElementById("BATable").appendChild(row);
	}
}
