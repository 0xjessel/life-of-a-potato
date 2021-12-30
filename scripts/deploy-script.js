const hre = require("hardhat");
require('dotenv').config();

const OWNER_ADDRESS = process.env.OWNER_ADDRESS

async function main() {
    const NFT = await hre.ethers.getContractFactory("LifeOfAPotato");
    const nft = await NFT.deploy();
    await nft.deployed();
    console.log("NFT deployed to:", nft.address);

    // tv night with potato
    await nft
      .mintItem(OWNER_ADDRESS, "https://ipfs.io/ipfs/bafkreia2somiw3f3zu7zjfnictoyt22z4rindna4ikjavjq4qoc57opdie")
      .then(console.log("minted: tv night with potato"))
      .catch(error => console.log(error));
	
    // chilling at the beach with a potato
    await nft
      .mintItem(OWNER_ADDRESS, "https://ipfs.io/ipfs/bafkreicvcm7jtybqfn3n4kbbigbstoqbgcdkgwyz6ygtap3wgffaqscrbu")
      .then(console.log("minted: chilling at the beach with a potato"))
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
      .mintItem(OWNER_ADDRESS, "https://ipfs.io/ipfs/bafkreidpi4o2gamqvqnt3khvtcqsc3ut6xe7lhh2mp2tanl3bw7d7dpgnq")
      .then(console.log("minted: camping with a potato"))
      .catch(error => console.log(error));
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
