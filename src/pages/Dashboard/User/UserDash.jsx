import React, { useEffect } from "react";
import styles from "./styles.module.css";
import Avatar from "../../../components/Avatar/Avatar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonDark from "../../../components/Buttons/ButtonDark";
import ButtonHollow from "../../../components/Buttons/ButtonHollow";
import Modal from "../../../components/Modal/Modal";
import Info from "../../../components/Info/Info";
import { connect, useDispatch, useSelector } from "react-redux";
import { Button, IconButton } from "rsuite";
import { Icon } from "@rsuite/icons";
import { ethers } from "ethers";
import { setBalance, setWalletAddress } from "../../../state/auth/auth-slice";
import Swal from "sweetalert2";
import Loader from "react-js-loader";
import prescriptionIPFSABI from "../../../constants/frontEndAbiLocation/PrescriptionIPFS.json";

const MetaMaskIcon = React.forwardRef((props, ref) => (
  <svg
    {...props}
    width="2em"
    height="2em"
    fill="currentColor"
    viewBox="0 0 320 512"
    ref={ref}
  >
    <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
  </svg>
));
function UserDash() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const onModalClose = () => {
    setModal(false);
  };
  const handleTagSave = () => {
    // TODO: Handle the actual saving of the tag in the backend

    setModal(false);
  };

  const [editProfile, setEditProfile] = useState(false);

  const [upAppEmpty, setUpAppEmpty] = useState(false);
  const [recAppEmpty, setRecAppEmpty] = useState(false);
  const [presEmpty, setPresEmpty] = useState(false);
  const [recTransEmpty, setRecTransEmpty] = useState(false);
  const [haveMetamask, sethaveMetamask] = useState(false);
  const [accountAddress, setAccountAddress] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [recentAppointments, setRecentAppointments] = useState([]);
  const [medRecords, setMedRecords] = useState([]);
  const [loading, setLoading] = useState(false);

  const { ethereum } = window;
  const navigate = useNavigate();

  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      sethaveMetamask(true);
    };
    checkMetamaskAvailability();
    getUpcomingAppointments();
    getrecentAppointments();
    getMedicalRecords();
  }, []);

  const walletAddress = async (id, walletAddress) => {
    console.log("Hiiiii");
    const res = await fetch(
      process.env.REACT_APP_BACKEND_URL + "common/setwalletaddress",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          walletAddress,
        }),
      }
    );
    const data = await res.json();
    console.log(data);
    if (data.user) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Wallet connected successfully",
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Please try again",
        text: data.message,
      });
    }
  };

  const connectWallet = async () => {
    setLoading(true);
    try {
      if (!haveMetamask) {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Please install metamask",
        });
        return;
      }
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
      setAccountAddress(accounts[0]);
      setAccountBalance(bal);
      setIsConnected(true);
      dispatch(setWalletAddress(accountAddress));
      dispatch(setBalance(accountBalance));
      console.log("hi");
      console.log(userInfo._id);
      // await walletAddress(userInfo._id, accountAddress);
      console.log(accountAddress, accountBalance);
    } catch (error) {
      setIsConnected(false);
    } finally {
      setLoading(false);
    }
  };

  /******Get appointment details*** */
  const getUpcomingAppointments = async () => {
    const res = await fetch(
      process.env.REACT_APP_BACKEND_URL +
        "patient/getpatientupcomingappointments/" +
        userInfo._id,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    if (data.data.data.length > 0) {
      setUpcomingAppointments(data.data.data);
      setUpAppEmpty(true);
    } else {
      setUpAppEmpty(false);
    }
  };
  const getrecentAppointments = async () => {
    const res = await fetch(
      process.env.REACT_APP_BACKEND_URL +
        "patient/getrecentappointments/" +
        userInfo._id,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    if (data.data.data.length > 0) {
      setRecentAppointments(data.data.data);
      setRecAppEmpty(true);
    } else {
      setRecAppEmpty(false);
    }
  };

  /*********Medical records********/
  const contractIPFSAddress = "0xa72736eC5d995780f370630346b48319eEfC4239";
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    contractIPFSAddress,
    prescriptionIPFSABI,
    signer
  );
  const getMedicalRecords = async () => {
    try {
      console.log(userInfo.walletAddress, "walletAddress");
      console.log(contract);
      const getAllmedRecords = await contract.getAllPrescriptions(
        userInfo.walletAddress
      );
      console.log(getAllmedRecords);
      getAllmedRecords.map((medicalRecord, index) => {
        fetch(`https://skywalker.infura-ipfs.io/ipfs/` + medicalRecord[0])
          .then((response) => response.json())
          .then((jsonData) => {
            console.log(jsonData);
            setMedRecords([...medRecords, jsonData]);
          })
          .catch((error) => {
            console.error(error);
          });
      });
      // setMedRecords(getAllmedRecords);
      console.log(medRecords);
      if (medRecords.length > 0) {
        setPresEmpty(true);
      }
      console.log(medRecords);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className={styles.container}>
        {modal && (
          <div className={styles.modal}>
            <Modal
              type="editTag"
              onClose={onModalClose}
              handleEditClick={handleTagSave}
            />
          </div>
        )}
        <div className={styles.header}>
          <p className={styles.logotext}>MEDIC.</p>
          <div className={styles.pfBox}>
            <div className={styles.dropdown}>
              <img
                src={require("../../../assets/images/down.png")}
                alt=""
                draggable={false}
                height={"18px"}
              />
              <div className={styles.dropdownContent}>
                <Link
                  to="/dashboard/user/editprofile"
                  style={{ textDecoration: "none" }}
                >
                  Edit Profile
                </Link>
                <p onClick={toggleModal}>Edit Tag</p>
                <a href="/" style={{ textDecoration: "none" }}>
                  Logout
                </a>
              </div>
            </div>
            <Avatar
              imgURL={require("../../../assets/images/pfptemplate.png")}
              imgStyle={{ width: "50px", height: "50px" }}
            />
            <Button
              appearance="primary"
              endIcon={<Icon as={MetaMaskIcon} />}
              style={{ width: "fit-content" }}
              onClick={connectWallet}
            >
              Connect Wallet
            </Button>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.mainHeader}>
            <div className={styles.mainButtonContainer}>
              <ButtonDark
                text="Search for Doctors"
                style={{ borderRadius: "100px" }}
                ClickFunction={() => {
                  Navigate("/search");
                }}
              />
              <ButtonHollow
                text="New Medical Card"
                style={{ borderRadius: "100px" }}
                ClickFunction={() => {
                  Navigate("/view/medicalrecord");
                }}
              />
            </div>
            <div className={styles.mainNameBox}>
              {userInfo && (
                <p style={{ fontSize: "1.4rem" }}>{userInfo.name}</p>
              )}
            </div>
          </div>
          <div className={styles.mainBody}>
            <div className={styles.dashTop}>
              <div className={styles.upApp}>
                <div className={styles.upAppContainer}>
                  <div className={styles.dashDivHeader}>
                    Upcoming Appointments
                  </div>
                  <div className={styles.dashDivContent}>
                    {/* Use this div to map the upcoming appointments to */}
                    {upAppEmpty ? (
                      <>
                        {/* <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
                        <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
                        <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
                        <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
                        <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
                        <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
                        <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
                        <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
                        <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info> */}
                        {
                          console.log(upcomingAppointments)
                        }
                        {upcomingAppointments.map((item, index) => {
                          return (
                            <div className={styles.eachUpcomingAppointment} onClick={()=>{
                              navigate('/dashboard/user/upcoming-appointment' , {state:{item , medRecords}})
                            }}>
                            <Info textRight={item.startTime}>
                              {item.doctorName}
                            </Info>
                            </div>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        <div className={styles.placeholderCont}>
                          <p
                            style={{
                              textAlign: "center",
                              fontSize: "1.5rem",
                            }}
                          >
                            No Upcoming Appointments
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.recApp}>
                <div className={styles.recAppContainer}>
                  <div className={styles.dashDivHeader}>
                    Recent Appointments
                  </div>
                  <div className={styles.dashDivContent}>
                    {/* Use this div to map the upcoming appointments to */}
                    {recAppEmpty ? (
                      <>
                        {/* <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
                        <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
                        <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
                        <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
                        <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
                        <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
                        <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
                        <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
                        <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info> */}
                        {recentAppointments.map((item, index) => {
                          return (
                            <Info textRight={"19/04/23"}>
                              {item.doctorName}
                            </Info>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        <div className={styles.placeholderCont}>
                          <p
                            style={{
                              textAlign: "center",
                              fontSize: "1.5rem",
                            }}
                          >
                            No Recent Appointments
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.dashBottom}>
              <div className={styles.MedicalRecords}>
                <div className={styles.MedicalRecordsContainer}>
                  <div className={styles.dashDivHeader}>Medical Record</div>
                  <div className={styles.dashDivContent}>
                    {!medRecords ? (
                      <>
                        <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
                          Loading...
                        </p>
                      </>
                    ) : medRecords.length === 0 ? (
                      <>
                        <div className={styles.placeholderCont}>
                          <p
                            style={{ textAlign: "center", fontSize: "1.5rem" }}
                          >
                            No Prescriptions Yet
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        {medRecords.map((item, index) => {
                          return (
                            <div
                              key={index}
                              onClick={() =>
                                navigate("/view/pastmedrecord", {
                                  state: { item },
                                })
                              }
                              className={styles.prevRecords}
                            >
                              <Info textRight={item.date.slice(0, 10)}>
                                {item.title}
                              </Info>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.RecTransactions}>
                <div className={styles.RecTransactionsContainer}>
                  <div className={styles.dashDivHeader}>
                    Recent Transactions
                  </div>
                  <div className={styles.dashDivContent}>
                    {recTransEmpty ? (
                      <>
                        <Info textRight={"19/04/23"}>0.04ETH</Info>
                        <Info textRight={"19/04/23"}>0.04ETH</Info>
                        <Info textRight={"19/04/23"}>0.04ETH</Info>
                        <Info textRight={"19/04/23"}>0.04ETH</Info>
                        <Info textRight={"19/04/23"}>0.04ETH</Info>
                        <Info textRight={"19/04/23"}>0.04ETH</Info>
                      </>
                    ) : (
                      <>
                        <div className={styles.placeholderCont}>
                          <p
                            style={{
                              textAlign: "center",
                              fontSize: "1.5rem",
                            }}
                          >
                            No Transactions to show
                          </p>
                          <IconButton
                            appearance="primary"
                            classPrefix="btn-icon"
                            icon={
                              <Icon as={MetaMaskIcon} appearance="primary" />
                            }
                            onClick={connectWallet}
                          />
                          {isConnected ? (
                            loading ? (
                              <Loader
                                type="bubble-loop"
                                bgColor="#FFFFFF"
                                color="#FFFFFF"
                                size={30}
                              />
                            ) : (
                              `${accountAddress.slice(
                                0,
                                5
                              )}...${accountAddress.slice(38, 42)}`
                            )
                          ) : (
                            "Connect wallet"
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDash;
