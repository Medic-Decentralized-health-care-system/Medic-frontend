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
  const [recAppEmpty, setRecAppEmpty] = useState(true);
  const [presEmpty, setPresEmpty] = useState(true);
  const [recTransEmpty, setRecTransEmpty] = useState(true);
  const [haveMetamask, sethaveMetamask] = useState(false);
  const [accountAddress, setAccountAddress] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  const { ethereum } = window;

  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      sethaveMetamask(true);
    };
    checkMetamaskAvailability();
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
      await walletAddress(userInfo._id, accountAddress);
      console.log(accountAddress, accountBalance);
    } catch (error) {
      setIsConnected(false);
    } finally {
      setLoading(false);
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
            >
              Connect Wallet
            </Button>
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
                          <Info textRight={"10-11AM"}>Rahul Yadav</Info>
                          <Info textRight={"10-11AM"}>Rahul Yadav</Info>
                          <Info textRight={"10-11AM"}>Rahul Yadav</Info>
                          <Info textRight={"10-11AM"}>Rahul Yadav</Info>
                          <Info textRight={"10-11AM"}>Rahul Yadav</Info>
                        </div>
                        <Tag size="lg" appearance="primary" color="blue">
                          22/02/23
                        </Tag>
                        <div style={{ display: "flex", flexDirection: "column", width: "98%"}}>
                          <Info textRight={"10-11AM"}>Rahul Yadav</Info>
                          <Info textRight={"10-11AM"}>Rahul Yadav</Info>
                          <Info textRight={"10-11AM"}>Rahul Yadav</Info>
                          <Info textRight={"10-11AM"}>Rahul Yadav</Info>
                          <Info textRight={"10-11AM"}>Rahul Yadav</Info>
                        </div>
                        <Tag size="lg" appearance="primary" color="blue">
                          23/02/23
                        </Tag>
                        <div style={{ display: "flex", flexDirection: "column", width: "98%"}}>
                          <Info textRight={"10-11AM"}>Rahul Yadav</Info>
                          <Info textRight={"10-11AM"}>Rahul Yadav</Info>
                          <Info textRight={"10-11AM"}>Rahul Yadav</Info>
                        </div>
                        <Tag size="lg" appearance="primary" color="blue">
                          26/02/23
                        </Tag>
                        <div style={{ display: "flex", flexDirection: "column", width: "98%"}}>
                          <Info textRight={"10-11AM"}>Rahul Yadav</Info>
                          <Info textRight={"10-11AM"}>Rahul Yadav</Info>
                          <Info textRight={"10-11AM"}>Rahul Yadav</Info>
                          <Info textRight={"10-11AM"}>Rahul Yadav</Info>
                          <Info textRight={"10-11AM"}>Rahul Yadav</Info>
                          <Info textRight={"10-11AM"}>Rahul Yadav</Info>
                          <Info textRight={"10-11AM"}>Rahul Yadav</Info>
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
                          <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
                          <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
                          <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
                          <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
                          <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
                          <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
                          <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
                          <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
                          <Info textRight={"19/04/23"}>Dr. Rajesh Joshi</Info>
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
                            <IconButton
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
                            )}
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
