import React from "react";
import styles from "./styles.module.css";
import Avatar from "../../components/Avatar/Avatar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonDark from "../../components/Buttons/ButtonDark";
import ButtonHollow from "../../components/Buttons/ButtonHollow";
import Modal from "../../components/Modal/Modal";
import Info from "../../components/Info/Info";
import { useDispatch, useSelector } from "react-redux";
import { Button, Uploader } from "rsuite";
import { Icon } from "@rsuite/icons";

import CameraRetroIcon from "@rsuite/icons/legacy/CameraRetro";

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
  console.log(userInfo);

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

  const [upAppEmpty, setUpAppEmpty] = useState(false);
  const [recAppEmpty, setRecAppEmpty] = useState(false);
  const [presEmpty, setPresEmpty] = useState(false);
  const [recTransEmpty, setRecTransEmpty] = useState(false);

  const [fileURL, setFileURL] = useState("");
  const handleUpload = (file) => {
    setFileURL(URL.createObjectURL(file.blobFile));
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
            <Avatar
              imgURL={
                fileURL === ""
                  ? require("../../assets/images/pfptemplate.png")
                  : fileURL
              }
              imgStyle={{ width: "50px", height: "50px" }}
            />
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.mainHeader}>
            <div className={styles.mainAvatarContainer}>
              <div className={styles.profilePicBox}>
                <div className={styles.AvatarContainer}>
                  <Avatar
                    imgURL={
                      fileURL === ""
                        ? require("../../assets/images/pfptemplate.png")
                        : fileURL
                    }
                    imgStyle={{ width: "200px", height: "200px" }}
                  />
                </div>
                <div className={styles.mainUploadContainer}>
                  <Uploader
                    accept="image/*"
                    appearance="ghost"
                    fileListVisible={false}
                    onUpload={handleUpload}
                    renderFileInfo={(file, fileElement) => {
                      setFileURL(URL.createObjectURL(file.blobFile));
                    }}
                  >
                    <button style={{ backgroundColor: "transparent" }}>
                      <CameraRetroIcon
                        style={{ backgroundColor: "transparent" }}
                      />
                    </button>
                  </Uploader>
                </div>
              </div>
            </div>
            <div className={styles.mainNameBox}>
              {/* {userInfo && (
                <p style={{ fontSize: "1.4rem" }}>{userInfo.name}</p>
              )} */}
              <h1>John Dahl</h1>
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
            </div>
            <div className={styles.dashBottom}>
              <div className={styles.MedicalRecords}>
                <div className={styles.MedicalRecordsContainer}>
                  <div className={styles.dashDivHeader}>Medical Record</div>
                  <div className={styles.dashDivContent}>
                    {presEmpty ? (
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
                            No Prescriptions Yet
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
