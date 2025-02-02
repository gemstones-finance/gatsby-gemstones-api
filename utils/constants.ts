import { ChainId, Token } from "@pancakeswap-libs/sdk";

const chainId = 137; // replaced the PancakeSwap ChainId

// BEP-20 addresses.
export const CAKE = "0x1f546aD641B56b86fD9dCEAc473d1C7a357276B7";                   // GMS
export const WBNB = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";                   // ??Matic

// Contract addresses.
export const CAKE_BNB_FARM = "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6";          // GMS-Matic
export const MASTERCHEF_CONTRACT = "0x058451C62B96c594aD984370eDA8B6FD7197bbd4";    // MasterChef
export const LOTTERY_CONTRACT = "0xd75dc5a09bcfe4c508e2aa3320188c0742ee717a";       // Lottery
export const MULTICALL_CONTRACT = "0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb";     // MultiCall ?

// PancakeSwap SDK Token.
export const CAKE_TOKEN = new Token(chainId, CAKE, 18);
export const WBNB_TOKEN = new Token(chainId, WBNB, 18); // CAKE-WBNB pair equivalent??
export const CAKE_BNB_TOKEN = new Token(chainId, CAKE_BNB_FARM, 18);
