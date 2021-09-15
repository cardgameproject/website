import web3 from './web3';
import CardGameJSON from './abis/CardGame.json'


class CardGame {
    constructor(address) {
        if (web3 == null) return;
        this.address = address;
        this.contract = new web3.eth.Contract(
            CardGameJSON.abi,
            address
        );
    }

    async mint(total) {
        if (web3 == null) return alert("No Web3 browser extension found");
        window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        this.contract.methods.mint(accounts[0], total)
            .send({
                from: accounts[0]
            });
    }
}

export default CardGame;