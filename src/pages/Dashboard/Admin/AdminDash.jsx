import React, { useEffect, useState } from "react";
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
  const [doctors , setDoctors] = useState([]);
  const tag = 'IIITM'
  const getDetails = async () => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}admin/getstats/${tag}` , {
      method: "GET",
    })  
    const data = await res.json();
    setDoctors(data.data.doctors);
    console.log(doctors);
  }
  useEffect(()=>{
    getDetails()
  },[])
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
            <h1>Admin Dashboard (IIITM)</h1>
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
              data={doctors}
              onRowClick={(rowData) => {
                console.log(rowData);
              }}
            >
              <Column flexGrow={2}>
                <HeaderCell>Speaciality</HeaderCell>
                <Cell dataKey="specialities[0]" />
              </Column>

              <Column flexGrow={3}>
                <HeaderCell>First Name</HeaderCell>
                <Cell dataKey="name" />
              </Column>


              <Column flexGrow={1}>
                <HeaderCell>Experience</HeaderCell>
                <Cell dataKey="experience" />
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
