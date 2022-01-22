//https://eth-ropsten.alchemyapi.io/v2/rw0GL-mz4UAIHYkhDqdqXEoBdUB-Sku3

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/rw0GL-mz4UAIHYkhDqdqXEoBdUB-Sku3",
      accounts: [
        "f6bd24551df2b8c62de167d6955d95593473f98b425651fa42dbcf62b3dea22a",
      ],
    },
  },
};
