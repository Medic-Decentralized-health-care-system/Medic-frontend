// import { contractAddresses } from "./contractAddresses.json";
// import { MoneyTransferABI } from "./frontEndAbiLocation/MoneyTransfer.json";
// import { PrescriptionIPFSABI } from "./frontEndAbiLocation/PrescriptionIPFS.json";

// console.log(contractAddresses, MoneyTransferABI, PrescriptionIPFSABI);
// export { contractAddresses, MoneyTransferABI, PrescriptionIPFSABI };

const { contractAddresses } = require("./contractAddresses.json");
const {
  MoneyTransferABI,
} = require("./frontEndAbiLocation/MoneyTransfer.json");
const {
  PrescriptionIPFSABI,
} = require("./frontEndAbiLocation/PrescriptionIPFS.json");

module.exports = { contractAddresses, MoneyTransferABI, PrescriptionIPFSABI };
