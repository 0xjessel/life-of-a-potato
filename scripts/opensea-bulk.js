const MNEMONIC = process.env.MNEMONIC;
const FACTORY_CONTRACT_ADDRESS = process.env.FACTORY_CONTRACT_ADDRESS;
const INFURA_KEY = process.env.INFURA_KEY;
const OPEN_SEA_API_KEY = process.env.OPEN_SEA_API_KEY || "";

if (!FACTORY_CONTRACT_ADDRESS) {
    console.error("Please specify a factory contract address.");
}

const opensea = require("opensea-js");
const RPCSubprovider = require("web3-provider-engine/subproviders/rpc");
const Web3ProviderEngine = require("web3-provider-engine");
const MnemonicWalletSubprovider = require("@0x/subproviders").MnemonicWalletSubprovider;

const OpenSeaPort = opensea.OpenSeaPort;
const Network = opensea.Network;

const BASE_DERIVATION_PATH = `44'/60'/0'/0`;
const network = "rinkeby";
const infuraRpcSubprovider = new RPCSubprovider({
  rpcUrl: `https://${network}.infura.io/v3/${INFURA_KEY}`
});
const mnemonicWalletSubprovider = new MnemonicWalletSubprovider({
    mnemonic: MNEMONIC,
    baseDerivationPath: BASE_DERIVATION_PATH,
  });

const providerEngine = new Web3ProviderEngine();
providerEngine.addProvider(mnemonicWalletSubprovider);
providerEngine.addProvider(infuraRpcSubprovider);
providerEngine.start();

const seaport = new OpenSeaPort(
  providerEngine,
  {
    networkName: Network.Rinkeby,
    apiKey: OPEN_SEA_API_KEY,
  },
  (arg) => console.log(arg)
);


const expirationTime = (Date.now() / 1000 + 60 * 60 * 24 * 180) // Expires 6mo from now

const sell = async () => {
    const sellOrders = await seaport.createFactorySellOrders({
        assetId: "1",
        factoryAddress: FACTORY_CONTRACT_ADDRESS,
        accountAddress,
        startAmount,
        expirationTime,
        numberOfOrders: 100 // Will create 100 sell orders in parallel batches to speed things up
      })
      
      console.log(sellOrders)
}

sell()