const { JsonRpcProvider, Contract } = require("ethers");
const { uniswapFactoryAbi, pairAbi } = require("./abi");

const infuraApiKey = "f7430166c6284e1d943436bfe9f5cc66";
const uniswapFactoryAddress = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";

const infuraUrl = `https://mainnet.infura.io/v3/${infuraApiKey}`;
const provider = new JsonRpcProvider(infuraUrl);

const uniswapFactory = new Contract(
  uniswapFactoryAddress,
  uniswapFactoryAbi,
  provider
);

async function executeBuyOrder(pairAddress) {
  console.log("Buy order transaction", pairAddress);
}

uniswapFactory.on("PairCreated", async (token0, token1, pairAddress, event) => {
  console.log("PairCreated event", event);

  await executeBuyOrder(pairAddress);
});
