const hre = require("hardhat");
require('dotenv').config();


async function main() {
    const NFT = await hre.ethers.getContractFactory("LifeWithAPotato1155");
    const nft = await NFT.deploy();
    await nft.deployed();
    console.log("NFT deployed to:", nft.address);
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
