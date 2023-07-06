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
  IconButton,
  Input,
  InputPicker,
  Tag,
  Uploader,
} from "rsuite";
import { ArowBack, Icon } from "@rsuite/icons";

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
function ViewMedRecord() {
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

  const handleUpdateDetails = () => {
    // TODO: Handle the updating of details in the backend
    console.log("Details updated!");
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
            <div className={styles.leftHeader}>
              <div className={styles.leftHeaderContainer}>
                <IconButton
                  appearance="primary"
                  style={{
                    backgroundColor: "transparent",
                  }}
                  icon={
                    <ArowBack
                      style={{
                        backgroundColor: "transparent",
                        color: "black",
                        border: "0px",
                      }}
                    />
                  }
                  link=""
                />
                <div className={styles.leftHeaderSub}>
                  <h2 style={{ fontSize: "xx-large" }}>Diabetes Appointment</h2>
                  <p>22/05/23</p>
                </div>
              </div>
            </div>
            <div className={styles.rightHeader}>
              <div className={styles.rightHeaderContainer}>
                <Button
                  appearance="ghost"
                  style={{
                    fontSize: "medium",
                    backgroundColor: "transparent",
                    color: "black",
                    borderRadius: "100px",
                    border: "1px solid black",
                    margin: "0.6rem",
                    padding: "0.5rem",
                  }}
                >
                  Edit Record
                </Button>
                <Button
                  appearance="ghost"
                  style={{
                    padding: "0.5rem",
                    fontSize: "medium",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "100px",
                    border: "1px solid red",
                    margin: "0.6rem",
                  }}
                >
                  Delete Record
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.mainBody}>
            <div className={styles.bodyHeader}></div>
            <Form readOnly="true">
              <div className={styles.topFormBox}>
                <Form.Group controlId="input">
                  <Form.ControlLabel>Full Name</Form.ControlLabel>
                  <Form.Control name="fullName" className={styles.inputElem} />
                </Form.Group>
                <Form.Group controlId="input">
                  <Form.ControlLabel>Age</Form.ControlLabel>
                  <Form.Control name="age" className={styles.inputElem} />
                </Form.Group>
                <Form.Group controlId="input">
                  <Form.ControlLabel>Gender</Form.ControlLabel>
                  <Form.Control
                    name="gender"
                    value={"Male"}
                    className={styles.inputElem}
                  />
                </Form.Group>
              </div>
              <div className={styles.topFormBox}>
                <Form.Group controlId="input">
                  <Form.ControlLabel>Diagnosed with</Form.ControlLabel>
                  <Form.Control className={styles.inputElem} name="diagnosis" />
                </Form.Group>
                <Form.Group controlId="input">
                  <Form.ControlLabel>Blood Pressure</Form.ControlLabel>
                  <Form.Control name="bp" className={styles.inputElem} />
                </Form.Group>
                <Form.Group controlId="input">
                  <Form.ControlLabel>Pulse Rate</Form.ControlLabel>
                  <Form.Control
                    name="pulse"
                    value={"78BPM"}
                    className={styles.inputElem}
                  />
                </Form.Group>
              </div>
              <div className={styles.bottomFormBox}>
                <Form>
                  <div className={styles.bottomFormBoxHeader}>
                    <Tag
                      size="lg"
                      color="blue"
                      style={{
                        flex: "1",
                        position: "sticky",
                        fontSize: "small",
                        borderRadius: "100px",
                      }}
                    >
                      Prescribed Drugs
                    </Tag>
                    <Tag
                      size="lg"
                      color="blue"
                      style={{
                        flex: "1",
                        position: "sticky",
                        fontSize: "small",
                        borderRadius: "100px",
                      }}
                    >
                      Units
                    </Tag>
                    <Tag
                      size="lg"
                      color="blue"
                      style={{
                        flex: "1",
                        position: "sticky",
                        fontSize: "small",
                        borderRadius: "100px",
                      }}
                    >
                      Dosage
                    </Tag>
                  </div>
                  <div className={styles.bottomFormBoxBody}>
                    {/* Map the following div (drugContainer) for the list of drugs prescribed: */}
                    <div className={styles.drugContainer}>
                      <Form.Control
                        className={styles.inputElem}
                        name="drug1"
                        value={"Novocaine"}
                      />
                      <Form.Control
                        className={styles.inputElem}
                        name="drug1"
                        value={"syrup"}
                      />
                      <Form.Control
                        className={styles.inputElem}
                        name="drug1"
                        value={"50ml day/night"}
                      />
                    </div>
                    <div className={styles.drugContainer}>
                      <Form.Control
                        className={styles.inputElem}
                        name="drug1"
                        value={"Novocaine"}
                      />
                      <Form.Control
                        className={styles.inputElem}
                        name="drug1"
                        value={"syrup"}
                      />
                      <Form.Control
                        className={styles.inputElem}
                        name="drug1"
                        value={"50ml day/night"}
                      />
                    </div>
                    <div className={styles.drugContainer}>
                      <Form.Control
                        className={styles.inputElem}
                        name="drug1"
                        value={"Novocaine"}
                      />
                      <Form.Control
                        className={styles.inputElem}
                        name="drug1"
                        value={"syrup"}
                      />
                      <Form.Control
                        className={styles.inputElem}
                        name="drug1"
                        value={"50ml day/night"}
                      />
                    </div>
                    
                  </div>
                </Form>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewMedRecord;
