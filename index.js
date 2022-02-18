const awarderABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "hunter",
				"type": "address"
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "employer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "hunter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "awarded",
		"type": "event"
	}
]
const awarderAddress = "0x93A91EF833714eB0B4A7591eDf94D34B5E692836"
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
	console.log("get Event Logs")
	let topic = ethers.utils.id("awarded(address,address,string,uint256)");
	let filter = {
    address: awarderAddress,
    fromBlock: 11330000,
    toBlock: 99999999,
    topics: [ topic ]
	}

	let result = await persistentProvider.getLogs(filter)	//get event logs of all instances of bounties awarded
	eventLogs = new Array()
	for (n=0;n<result.length;n++){
		let log = new Object()
		let data = result[n].data
		data = data.substring(2)
		data = data.match(/.{1,64}/g) //divide data from event log into 64 length sections
		for (j=0;j<6;j++){
			data[j] = "0x" + data[j]
		}
		let descriptionData = ""
		for (j=5;j<data.length;j++){
			descriptionData += data[j]
		}
		let poster = "0x" + data[0].substring(26)
		let hunter = "0x" + data[1].substring(26)
		let amount = ethers.utils.formatUnits(ethers.utils.bigNumberify(data[3]),8)
		let description = web3.toAscii(descriptionData)
		log.poster = poster
		log.hunter = hunter
		log.amount = amount
		log.description = description
		log.txHash = result[n].transactionHash
		eventLogs.push(log)
	}
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
