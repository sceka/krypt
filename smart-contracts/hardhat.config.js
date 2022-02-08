//https://eth-ropsten.alchemyapi.io/v2/rw0GL-mz4UAIHYkhDqdqXEoBdUB-Sku3

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/rw0GL-mz4UAIHYkhDqdqXEoBdUB-Sku3",
      accounts: [
        "b47e67f2e013a3af267d5113efe5b1af75d3daafa233de7f89418d1ec8fbc4aa",
      ],
    },
  },
};
