import React from "react";
import { ReactDOM } from "react-dom";
import styles from "./styles.module.css";
import Avatar from "../../../components/Avatar/Avatar";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonDark from "../../../components/Buttons/ButtonDark";
import ButtonHollow from "../../../components/Buttons/ButtonHollow";
import Modal from "../../../components/Modal/Modal";
import Info from "../../../components/Info/Info";
import { connect, useDispatch, useSelector } from "react-redux";
import { Button, IconButton, Tag } from "rsuite";
import { Icon } from "@rsuite/icons";
import { ethers } from "ethers";
import { setBalance, setWalletAddress } from "../../../state/auth/auth-slice";
import Swal from "sweetalert2";
import Loader from "react-js-loader";

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

function DocDash() {
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

  const [upAppEmpty, setUpAppEmpty] = useState(true);
  const [recAppEmpty, setRecAppEmpty] = useState(false);
  const [recTransEmpty, setRecTransEmpty] = useState(false);
  const [loading, setLoading] = useState(false);
  const [upcoming , setUpcoming] = useState([]);
  const [recent , setRecent] = useState([]);

  const getUpcomingAppointments = async () => {
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "doctors/getupcomingappointments/649e79d6d3828be03c885fcb",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (data.status == "success") {
        if (data.data.data.length == 0) {
          setUpAppEmpty(false);
        } else {
          setUpAppEmpty(true);
        }
        setUpcoming(data.data.data);
        console.log(upcoming);
      } else {
        Swal.fire({
          title: "Error!",
          text: data.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err.message,
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  }

  const getRecentAppointments = async () => {
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "doctors/getrecentappointments/649e79d6d3828be03c885fcb",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (data.status == "success") {
        if (data.data.data.length == 0) {
          setRecAppEmpty(false);
        } else {
          setRecAppEmpty(true);
        }
        setRecent(data.data.data);
        console.log(recent);
      } else {
        Swal.fire({
          title: "Error!",
          text: data.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err.message,
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  }

  useEffect(()=>{
    getUpcomingAppointments();
    getRecentAppointments();
  },[])
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
            {/* <Button
              appearance="primary"
              endIcon={<Icon as={MetaMaskIcon} />}
              style={{ width: "fit-content" }}
              onClick={connectWallet}
            >
              Connect Wallet
            </Button> */}
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.mainHeader}>
            <div className={styles.mainNameBox}>
              {userInfo && (
                <p style={{ fontSize: "1.4rem" }}>{userInfo.name}</p>
              )}
            </div>
          </div>
          <div className={styles.mainBody}>
            <div className={styles.dashLeft}>
              <div className={styles.upApp}>
                <div className={styles.upAppContainer}>
                  <div className={styles.dashDivHeader}>
                    Upcoming Appointments
                  </div>
                  <div className={styles.dashDivContent}>
                    {/* Use this div to map the upcoming appointments to */}
                    {upAppEmpty ? (
                      <div style={{textAlign: "left", width: "100%"}}>
                        <Tag size="lg" appearance="primary" color="blue">
                          22/02/23
                        </Tag>
                        <div style={{ display: "flex", flexDirection: "column", width: "98%"}}>
                          {upcoming.map((item)=>{
                            return(
                              <div onClick={(e)=>{
                                Navigate(`/dashboard/doctor/upcoming-appointment/`, {state: {item}})
                              }}>
                              <Info textRight={item.startTime}>{item.patientName}</Info>
                              </div>
                            )
                          })
                        }
                        </div>
                      </div>
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
            </div>
            <div className={styles.dashRight}>
              <div className={styles.rightTopContainer}>
                <div className={styles.recApp}>
                  <div className={styles.recAppContainer}>
                    <div className={styles.dashDivHeader}>
                      Recent Appointments
                    </div>
                    <div className={styles.dashDivContent}>
                      {/* Use this div to map the recent appointments to */}
                      {recAppEmpty ? (
                        <>
                          {
                            recent.map((item)=>{
                              return(
                                <Info textRight={`${item.startTime}-${item.endTime}`}>{item.patientName}</Info>
                              )
                            })
                          }
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
                            {/* <IconButton
                              appearance="primary"
                              icon={<Icon as={MetaMaskIcon} />}
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
                            )} */}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.rightBottomContainer}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DocDash;
