import React, { useEffect } from "react";
import styles from "./styles.module.css";
import Avatar from "../../components/Avatar/Avatar";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ButtonDark from "../../components/Buttons/ButtonDark";
import ButtonHollow from "../../components/Buttons/ButtonHollow";
import Modal from "../../components/Modal/Modal";
import Info from "../../components/Info/Info";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  ButtonGroup,
  DatePicker,
  Divider,
  IconButton,
  Input,
  InputPicker,
  Panel,
  Tag,
  Tooltip,
  Uploader,
  Whisper,
} from "rsuite";
import {
  ArowBack,
  CheckRound,
  Icon,
  PagePrevious,
  Plus,
  TimeRound,
} from "@rsuite/icons";
import PatientCard from "../../components/PatientCard/PatientCard";
import prescriptionIPFSABI from "../../constants/frontEndAbiLocation/PrescriptionIPFS.json";
import { contractAddresses } from "../../constants";
import PlusIcon from "../../assets/images/hospital-svgrepo.png";
import { ethers } from "ethers";

function DocUpApp() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const [patient, setPatient] = useState({});
  const [medRecords, setMedRecords] = useState([]);
  const [presEmpty, setPresEmpty] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { item } = location.state;

  useEffect(() => {
    getPatientById();
    getMedicalRecords();
  }, [patient]);

  const getPatientById = async () => {
    const res = await fetch(
      process.env.REACT_APP_BACKEND_URL +
        `patient/getpatientbyid/${item.patientId}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    if (data.data.patient) {
      setPatient(data.data.patient);
      setLoading(false);
    }
  };

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

  const [pending, setIsPending] = useState(item.status!="Done");

  const handleCompleteAppointment = async () => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}doctors/completeappointment/`+item._id, {
      method: "PUT",
    })
    const data = await res.json();
    console.log(data);
    setIsPending(false);
  };

  /*Handling smart contracts*/
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
      setLoading(true);
      const getAllmedRecords = await contract.getAllPrescriptions(
        patient.walletAddress
      );
      const fetchRequests = getAllmedRecords.map((medicalRecord, index) => {
        return fetch(
          `https://skywalker.infura-ipfs.io/ipfs/` + medicalRecord[0]
        )
          .then((response) => response.json())
          .catch((error) => {
            console.error(error);
          });
      });

      const fetchedRecords = await Promise.all(fetchRequests);
      setMedRecords(fetchedRecords);
      if (medRecords.length > 0) {
        setPresEmpty(true);
      }
    } catch (err) {
      console.log(err);
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
                src={require("../../assets/images/down.png")}
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
              imgURL={require("../../assets/images/pfptemplate.png")}
              imgStyle={{ width: "50px", height: "50px" }}
            />
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.mainHeader}>
            <IconButton
              appearance="primary"
              style={{
                backgroundColor: "transparent",
              }}
              icon={
                <PagePrevious
                  size="lg"
                  style={{
                    fontSize: "1.5rem",
                    backgroundColor: "transparent",
                    color: "black",
                    border: "0px",
                  }}
                />
              }
              onClick={() => Navigate("/dashboard/doctor")}
            />
            <div className={styles.PlusIconContainer}>
              <img src={PlusIcon} width="50px" alt="" />
            </div>
            <div className={styles.mainHeadingText}>
              <h1 style={{ fontSize: "2rem" }}>Upcoming Appointment</h1>
            </div>
          </div>
          <div className={styles.mainBody}>
            <div className={styles.docInfoContainer}>
              <PatientCard
                patient={patient}
                avatarStyle={{ width: "150px", height: "150px" }}
                style={{ height: "100%" }}
              />
            </div>
            <div className={styles.appBox}>
              <div className={styles.appBoxTop}>
                <p style={{ fontSize: "1.8rem" }}>Appointment Scheduled on:</p>
                <div className={styles.appTimeDateBoxContainer}>
                  <div className={styles.appTimeDateBox}>
                    <div className={styles.appDate}>
                      <p>23rd May</p>
                    </div>
                    <Divider vertical style={{ backgroundColor: "black" }} />
                    <div className={styles.appTime}>
                      <p>
                        {item.startTime} - {item.endTime}
                      </p>
                    </div>
                    <Divider vertical style={{ backgroundColor: "black" }} />
                    <div className={styles.pendingStatusBox}>
                      {pending ? (
                        <Tag size="lg" style={{ fontSize: "0.8rem" }}>
                          Pending <TimeRound />
                          {"  `"}
                        </Tag>
                      ) : (
                        <Tag size="lg" style={{ fontSize: "0.8rem" }}>
                          Completed <CheckRound color="green" />{" "}
                        </Tag>
                      )}
                    </div>
                  </div>
                  <div className={styles.btnContainer}>
                    <ButtonGroup>
                      <Whisper
                        placement="top"
                        controlId="control-id-hover"
                        trigger="hover"
                        speaker={
                          <Tooltip children="Warning! Do not click this if you want to add prescriptions." />
                        }
                      >
                        <Button
                          size="lg"
                          disabled={pending ? false : true}
                          appearance="ghost"
                          className={styles.btnWhite}
                          onClick={handleCompleteAppointment}
                        >
                          Complete Appointment
                        </Button>
                      </Whisper>
                      <Button
                        size="lg"
                        disabled={pending ? false : true}
                        appearance="ghost"
                        className={styles.btnBlack}
                        onClick={()=>{
                          Navigate("/view/medicalrecord", {
                            state: { patient},
                          })
                        }}
                      >
                        {pending ? (
                           " Add a prescription"
                        ) : (
                          <Link
                            style={{
                              textDecoration: "none",
                              color: "white",
                              cursor: "not-allowed",
                            }}
                          >
                            Add a prescription
                          </Link>
                        )}
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
              <div className={styles.appBoxBottom}>
                <div className={styles.appBoxBottomLeft}>
                  <Panel shaded>
                    <div className={styles.appBoxBottomLeftHeader}>
                      <p>Description:</p>
                    </div>
                    <div className={styles.appBoxBottomLeftBody}>
                      Hey , I am {patient.name} . I am {patient.age} years old .
                      I have my medical records to the right . Please have a
                      look at them . You can contact me on my email :{" "}
                      {patient.email} . Hoping to have a wonderful experience
                      with you .
                    </div>
                  </Panel>
                </div>
                <div className={styles.appBoxBottomRight}>
                  <Panel shaded style={{ width: "100%" }}>
                    <div className={styles.appBoxBottomRightHeader}>
                      <p>Records:</p>
                    </div>
                    <div className={styles.appBoxBottomRightBody}>
                      <div className={styles.presContainer}>
                      {/* {!medRecords ? (
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
                                Navigate("/view/pastmedrecord", {
                                  state: { item , patient : patient },
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
                    )} */}
                    {
                      medRecords && medRecords.length != 0 && 
                        medRecords.map((item, index) => {
                        return (
                          <div
                            key={index}
                            onClick={() =>
                              Navigate("/view/pastmedrecord", {
                                state: { item , patient : patient },
                              })
                            }
                            className={styles.prevRecords}
                          >
                            <Info textRight={item.date.slice(0, 10)}>
                              {item.title}
                            </Info>
                          </div>
                        );
                      })
                    }
                      </div>
                    </div>
                  </Panel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DocUpApp;
