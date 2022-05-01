require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

require('dotenv').config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "matic_testnet",
  networks: {
    hardhat: {},
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/uT2RctkJV9BflgSPeXgcdW6lfQ3s0_Dq",
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
    matic_testnet: {
      url: "https://rpc-mumbai.maticvigil.com",
      //accounts: [process.env.PRIVATE_KEY],
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
    matic: {
      url: "https://rpc-mainnet.maticvigil.com/",
      //accounts: [process.env.PRIVATE_KEY],
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  }
};
