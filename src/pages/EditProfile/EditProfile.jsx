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
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputPicker,
  Panel,
  SelectPicker,
  Toggle,
  Uploader,
} from "rsuite";
import { Icon } from "@rsuite/icons";

import CameraRetroIcon from "@rsuite/icons/legacy/CameraRetro";
import { createEntityAdapter } from "@reduxjs/toolkit";

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

const data = ["iiitm", "nitk", "mits", "amity"].map((item) => ({
  label: item,
  value: item,
}));
function EditProfile() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  console.log(userInfo);

  // We need to have a tag key in the userInfo object which is empty if there's no tag selectd and contains a string of the exact tag if it is selected. Temporarily using a temp string named userTag to simulate this implementation
  const userTag = "";

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

  const handleUpdateDetails = () => {
    // TODO: Handle the updating of details in the backend
    console.log("Details updated!");
  };

  const [toggleChecked, setToggleChecked] = useState(false);
  const handleToggleChange = () => {
    setToggleChecked(!toggleChecked);
    if (userTag !== "") {
      // Display an empty select dropdown
    } else {
      // Display an already selected tag from the select dropdown
    }
  };

  const [fileURL, setFileURL] = useState("");
  const handleUpload = (file) => {
    setFileURL(URL.createObjectURL(file.blobFile));
  };

  const sex = ["Male", "Female", "Non-binary"].map((item) => ({
    label: item,
    value: item,
  }));

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
          <p className={styles.logotext}>DeMedic.</p>
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
                    <button
                      style={{
                        borderRadius: "100px",
                        backgroundColor: "white",
                        height: "1.6rem",
                        width: "1.6rem",
                      }}
                    >
                      <CameraRetroIcon
                        style={{
                          backgroundColor: "transparent",
                          fontSize: "1rem",
                        }}
                      />
                    </button>
                  </Uploader>
                </div>
              </div>
            </div>
            {/* {userInfo && (
                <p style={{ fontSize: "1.4rem" }}>{userInfo.name}</p>
              )} */}
            {/* <div className={styles.mainNameBox}>
              <h1>John Dahl</h1>
            </div> */}
          </div>
          <div className={styles.mainBody}>
            <Panel shaded className={styles.panel1}>
              <div className={styles.bodyHeader}>
                <h2 style={{ textAlign: "center" }}></h2>
              </div>
              <div className={styles.FormBox}>
                <div className={styles.topFormBox}>
                  <div className={styles.firstName}>
                    <p>First Name</p>
                    <Input
                      type="text"
                      id="fName"
                      appearance="ghost"
                      placeholder="First Name"
                    />
                  </div>
                  <div className={styles.lastName}>
                    <p>Last Name</p>
                    <Input
                      type="text"
                      id="lName"
                      appearance="ghost"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className={styles.dob}>
                    <p>Date of Birth</p>
                    <DatePicker
                      style={{ backgroundColor: "white", borderRadius: "10px" }}
                      type="text"
                      id="dob"
                      appearance="primary"
                      placeholder="Date Of Birth"
                    />
                  </div>
                </div>
                <div className={styles.bottomFormBox}>
                  <div className={styles.sex}>
                    <p>Gender</p>
                    <InputPicker
                      data={sex}
                      id="sex"
                      appearance="default"
                      placeholder="Gender"
                    />
                  </div>
                  <div className={styles.email}>
                    <p>Email</p>
                    <Input
                      type="email"
                      id="email"
                      appearance="default"
                      placeholder="Email"
                    />
                  </div>
                  <div className={styles.pwd}>
                    <p>Password</p>
                    <Input
                      type="password"
                      id="pwd"
                      appearance="default"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <Panel className={styles.panelTagEdit}>
                  <div className={styles.toggleBox}>
                    <Toggle
                      className={styles.toggle}
                      checked={toggleChecked}
                      onChange={handleToggleChange}
                    ></Toggle>
                    <p>
                      Do you want to share your information to your institute?
                    </p>
                  </div>
                  {toggleChecked && (
                    <Panel>
                      <div className={styles.selectTagBox}>
                        <SelectPicker
                          placement="topStart"
                          label="Tag"
                          data={data}
                        />
                      </div>
                    </Panel>
                  )}
                </Panel>
                <div className={styles.updateBtnBox}>
                  <Button
                    appearance="primary"
                    style={{ margin: "10px", backgroundColor: "#023020" }}
                    onClick={handleUpdateDetails}
                  >
                    Update Details
                  </Button>
                </div>
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
