require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.INFURA_URL,
      accounts: [process.env.PRIVATE_KEY_ACCOUNT],
    },
  },
};
