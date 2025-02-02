import BigNumber from "bignumber.js";
import { getContract } from "./web3";
import { CAKE } from "./constants";
import bep20 from "./abis/bep20.json";

const contract = getContract(bep20, CAKE);

export const getTotalSupply = async (): Promise<BigNumber> => {
  const supply = await contract.methods.totalSupply().call();

  return new BigNumber(supply);
};

export const getBurnedSupply = async (): Promise<BigNumber> => {
  const burned = await contract.methods.burnedAmount().call();

  return new BigNumber(burned);
};
