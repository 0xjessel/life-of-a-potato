const hre = require("hardhat");
require('dotenv').config();

const OWNER_ADDRESS = process.env.OWNER_ADDRESS

async function main() {
    const NFT = await hre.ethers.getContractFactory("LifeWithAPotato");
    const nft = await NFT.attach("0x06FaE1bBc2C72f0c0D9A3c96c98BCB1d83004Da1");
    console.log("attached to:", nft.address);

    // tv night with a potato
    await nft
      .mintItem(OWNER_ADDRESS, "https://ipfs.io/ipfs/bafkreihxdbfhgnumpevxwm5l34deoiuqj4ow35ljau7hy7d25nuffsgj74")
      .then(console.log("minted: tv night with a potato"))
      .catch(error => console.log(error));
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
