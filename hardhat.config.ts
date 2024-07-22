import { HardhatUserConfig } from "hardhat/types";
import "hardhat-deploy";
import "@nomicfoundation/hardhat-toolbox";
import "./tasks/greeting";
import * as dotenv from 'dotenv';

dotenv.config();

const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY;

if (!DEPLOYER_PRIVATE_KEY) {
  throw new Error("DEPLOYER_PRIVATE_KEY is not set in the .env file");
}

const config: HardhatUserConfig = {
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "https://rpc.dev.thefluent.xyz/",
      accounts: [DEPLOYER_PRIVATE_KEY],
      chainId: 20993,
    },
    dev: {
      url: "https://rpc.dev.thefluent.xyz/",
      accounts: [DEPLOYER_PRIVATE_KEY],
      chainId: 20993,
    },
  },
  solidity: {
    version: "0.  8.  24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  namedAccounts: {
    deployer: {
      default: 0
    },
  },
};

export default config;