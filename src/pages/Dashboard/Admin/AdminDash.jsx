import React, { useState } from "react";
import styles from "./styles.module.css";
import WhiteButton from "../../../components/Buttons/WhiteButton";
import ButtonDark from "../../../components/Buttons/ButtonDark";
import DrugItem from "../../../components/DrugItem/DrugItem";
import { json, useLocation, useNavigate } from "react-router-dom";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { ethers } from "ethers";
import { contractAddresses } from "../../../constants/index.js";
import prescriptionIPFSABI from "../../../constants/frontEndAbiLocation/PrescriptionIPFS.json";
import { useSelector } from "react-redux";
import { Button, Dropdown, IconButton, Panel, Table } from "rsuite";
import { ArrowDown, ArrowDownLine } from "@rsuite/icons";
import { mockUsers } from "./mock";

const data = mockUsers(20);
console.log(data);
function AdminDash() {
  //   const [drugItems, setDrugItems] = useState([]);
  const Navigate = useNavigate();
  //   const [title , setTitle] = useState("");
  //   const [date , setDate] = useState("");
  //   const [diagnosis , setDiagnosis] = useState("");
  //   const [bp , setBp] = useState("");
  //   const [pulse , setPulse] = useState("");
  //   const [remarks , setRemarks] = useState();
  //   const location = useLocation();
  //   const {patient} = location.state;
  //   const userInfo = useSelector((state) => state.userInfo);
  //   const [loading , setLoading] = useState(false);
  //   console.log(patient , userInfo)

  //   //Handle contract connection
  //   const { Moralis, isWeb3Enabled, chainId: chainIdHex , web3 } = useMoralis()
  //   const contractIPFSAddress = "0xa72736eC5d995780f370630346b48319eEfC4239"
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();
  //   console.log(signer , contractIPFSAddress , prescriptionIPFSABI )
  //   const contract = new ethers.Contract(
  //     contractIPFSAddress,
  //     prescriptionIPFSABI,
  //     signer
  //   );
  //   const handleAddItem = () => {
  //     setDrugItems([...drugItems, { drugName: "", units: "", dosage: "" }]);
  //   };
  //   const handleInputChange = (index, field, value) => {
  //     const updatedDrugItems = [...drugItems];
  //     updatedDrugItems[index] = {
  //       ...updatedDrugItems[index],
  //       [field]: value,
  //     };
  //     setDrugItems(updatedDrugItems);
  //   };
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setLoading(true);
  //     const body = JSON.stringify({
  //       title,
  //       date,
  //       diagnosis,
  //       bp,
  //       pulse,
  //       drugItems,
  //       remarks,
  //       doctorAddress:userInfo.walletAddress,
  //       patientAddress: patient.walletAddress,
  //     });
  //     try{
  //       const result = await ipfs.add(body);
  //       const count = await contract.getPrescriptionCount(patient.walletAddress);
  //       console.log(count.toNumber())
  //       const data = await contract.addPrescription(result.path , patient.walletAddress, count.toNumber() , {
  //           from : userInfo.walletAddress
  //         });
  //         const pres = await contract.getPrescription(patient.walletAddress , count.toNumber() , {
  //             from :userInfo.walletAddress
  //           })
  //       console.log(pres)
  //       console.log(result)
  //       console.log(data);
  //     }
  //     catch(err){
  //       console.log(err);
  //     }
  //     finally{
  //       setLoading(false);
  //     }
  //   };
  const { Column, HeaderCell, Cell } = Table;

  const renderIconButton = (props, ref) => {
    return (
      <IconButton
        {...props}
        ref={ref}
        circle
        appearance="ghost"
        icon={<ArrowDownLine style={{ color: "white" }} />}
      ></IconButton>
    );
  };
  return (
    <div className={styles.fullscreenFrame}>
      {/* <script defer src="./index.js"></script> */}
      <div className={styles.container}>
        <div className={styles.headingBox}>
          <WhiteButton
            style={{
              background:
                "linear-gradient(113.96deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.6)",
              borderRadius: "10px",
              padding: "10px",
              margin: "0px",
            }}
          >
            <img
              style={{ width: "25px" }}
              src={require("../../../assets/images/homeIcon.png")}
              alt="home"
              onClick={() => {
                Navigate("/dashboard/user");
              }}
            />
          </WhiteButton>
          <div className={styles.header}>
            <h1>Admin Dashboard</h1>
          </div>
          <WhiteButton
            style={{
              background:
                "linear-gradient(113.96deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.6)",
              borderRadius: "10px",
              padding: "10px",
              margin: "0px",
            }}
          >
            <Dropdown renderToggle={renderIconButton} placement="leftStart">
              <Dropdown.Item
                panel
                style={{ padding: 10, width: 160, color: "black" }}
              >
                <p>Signed in as</p>
                <strong>name of Admin</strong>
              </Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </WhiteButton>
        </div>
        <div className={styles.dashBox}>
          <div className={styles.dashContainer}>
            <Table
              style={{ width: "100%" }}
              height={400}
              bordered
              cellBordered
              data={data}
              onRowClick={(rowData) => {
                console.log(rowData);
              }}
            >
              <Column flexGrow={1}>
                <HeaderCell>Id</HeaderCell>
                <Cell dataKey="id" />
              </Column>

              <Column flexGrow={3}>
                <HeaderCell>First Name</HeaderCell>
                <Cell dataKey="firstName" />
              </Column>

              <Column flexGrow={3}>
                <HeaderCell>Last Name</HeaderCell>
                <Cell dataKey="lastName" />
              </Column>

              <Column flexGrow={2}>
                <HeaderCell>Gender</HeaderCell>
                <Cell dataKey="gender" />
              </Column>

              <Column flexGrow={1}>
                <HeaderCell>Age</HeaderCell>
                <Cell dataKey="age" />
              </Column>

              <Column flexGrow={3}>
                <HeaderCell>Email</HeaderCell>
                <Cell dataKey="email" />
              </Column>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDash;
