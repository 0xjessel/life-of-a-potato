const hre = require("hardhat");
require('dotenv').config();

const OWNER_ADDRESS = process.env.OWNER_ADDRESS

async function main() {
    const NFT = await hre.ethers.getContractFactory("LifeOfAPotato");
    const nft = await NFT.deploy();
    await nft.deployed();
    console.log("NFT deployed to:", nft.address);

    // tv night with a potato
    await nft
      .mintItem(OWNER_ADDRESS, "https://ipfs.io/ipfs/bafkreihxdbfhgnumpevxwm5l34deoiuqj4ow35ljau7hy7d25nuffsgj74")
      .then(console.log("minted: tv night with a potato"))
      .catch(error => console.log(error));
	
    // beach day with a potato
    await nft
      .mintItem(OWNER_ADDRESS, "https://ipfs.io/ipfs/bafkreiek52nj62oyr5x2yphrqb3nln3dikleggtjdl2m4nlvvvdxmcxjd4")
      .then(console.log("minted: beach day with a potato"))
      .catch(error => console.log(error));
	
    // dreaming with a potato
    await nft
      .mintItem(OWNER_ADDRESS, "https://ipfs.io/ipfs/bafkreib3hy26jvyye54m3d2lqz4fjspf74eopmrolks3ufcip6uaawgaqm")
      .then(console.log("minted: dreaming with a potato"))
      .catch(error => console.log(error));

    // christmas with a potato
    await nft
      .mintItem(OWNER_ADDRESS, "https://ipfs.io/ipfs/bafkreidpi4o2gamqvqnt3khvtcqsc3ut6xe7lhh2mp2tanl3bw7d7dpgnq")
      .then(console.log("minted: christmas with a potato"))
      .catch(error => console.log(error));

    // camping with a potato
    await nft
      .mintItem(OWNER_ADDRESS, "https://ipfs.io/ipfs/bafkreigwzds6v2ogvlh4mljwi4pefc4frqis567x67y67hv6zntuv4done")
      .then(console.log("minted: camping with a potato"))
      .catch(error => console.log(error));
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
