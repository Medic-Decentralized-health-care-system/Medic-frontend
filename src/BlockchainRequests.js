import { contractAddresses } from "./constants/index.js";
import { prescriptionIPFSABI } from "./constants/index.js";
import { useMoralis, useWeb3Contract } from "react-moralis";

const { Moralis, isWeb3Enabled, chainId: chainIdHex, web3 } = useMoralis();
console.log(Moralis, isWeb3Enabled, chainIdHex);

const contractIPFSAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const { runContractFunction } = useWeb3Contract({
  abi: prescriptionIPFSABI,
  address: contractIPFSAddress,
  functionName: "addPrescription",
});
