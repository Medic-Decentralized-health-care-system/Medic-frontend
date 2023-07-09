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
  DatePicker,
  Divider,
  Input,
  InputPicker,
  Uploader,
} from "rsuite";
import { Icon, Plus } from "@rsuite/icons";
import CameraRetroIcon from "@rsuite/icons/legacy/CameraRetro";
import CardSelected from "../../components/CardSelected/CardSelected";
const dummyDoctorObj = {
  name: "Dr. Aditi Singh",
  degree: "MBBS",
  specialities: ["General Physician"],
  experience: "4 years",
  image:
    "https://i.pinimg.com/originals/35/57/55/355755832670880825ad87838e18d6b6.jpg",
  availability: {
    days: ["Monday", "Tuesday", "Thursday"],
    time: [
      "10:00AM-11:00AM",
      "02:00PM-3:00PM",
      "03:30PM-4:30PM",
      "05:00PM-6:00PM",
      "06:30PM-7:30PM",
      "08:00PM-9:00PM",
      "09:30PM-10:30PM",
      "11:00PM-12:00AM",
      "12:30AM-01:30AM",
      "02:00AM-03:00AM",
      "03:30AM-04:30AM",
    ],
  },
  clinicAddress: "BH-1 , ABV-IIIT Gwalior , Morena Link Road",
};
const PlusIcon = require("../../assets/images/hospital-svgrepo.png");

// const MetaMaskIcon = React.forwardRef((props, ref) => (
//   <svg
//     {...props}
//     width="2em"
//     height="2em"
//     fill="currentColor"
//     viewBox="0 0 320 512"
//     ref={ref}
//   >
//     <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
//   </svg>
// ));

function UserUpApp() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const [doctor, setDoctor] = useState({});
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { item , medRecords } = location.state;
  console.log(item)
  const navigate = useNavigate();

  useEffect(() => {
    getDoctorById();
  }, []);

  const getDoctorById = async (id) => {
    const res = await fetch(
      process.env.REACT_APP_BACKEND_URL +
        "doctors/getdoctorbyid/" +
        item.doctorId,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    console.log(data);
    if (data.data) {
      setDoctor(data.data.doctor);
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

  const [pending, setIsPending] = useState(true);
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
            <div className={styles.PlusIconContainer}>
              <img src={PlusIcon} width="50px" alt="" />
            </div>
            <div className={styles.mainHeadingText}>
              <h1 style={{ fontSize: "2rem" }}>Upcoming Appointments</h1>
            </div>
          </div>
          <div className={styles.mainBody}>
            <div className={styles.docInfoContainer}>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <CardSelected
                  doctor={doctor}
                  avatarStyle={{ width: "100px", height: "100px" }}
                  style={{ width: "250px", height: "500px" }}
                />
              )}
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
                      <p>{
                        item.startTime } - {item.endTime}</p>
                    </div>
                    <Divider vertical style={{ backgroundColor: "black" }} />
                    <div className={styles.pendingStatusBox}>
                      {pending ? (
                        <p>
                          {
                            item.status
                          }
                          <img
                            alt=""
                            src={require("../../assets/images/stopwatch.png")}
                            style={{ display: "inline", height: "0.7rem" }}
                          />
                        </p>
                      ) : (
                        <p>Completed</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.appBoxBottom}>
                <div className={styles.appBoxBottomLeft}>
                  <div className={styles.appBoxBottomLeftHeader}>
                    <p>Description:</p>
                  </div>
                  <div className={styles.appBoxBottomLeftBody}>
                  {loading ? (
                <div>Loading...</div>
              ) : (
                `Hey , I am Dr.${doctor.name} . I am a doctor by profession . I am a ${doctor.specialities[0]} . I have an experience of ${doctor.experience} years in this field . I have ${doctor.degree} degree . My clinic is at "${doctor.clinicAddress}" .` 
              )}     
                      </div>
                </div>
                <div className={styles.appBoxBottomRight}>
                  <div className={styles.appBoxBottomRightHeader}>
                    <p>Records:</p>
                  </div>
                  <div className={styles.appBoxBottomRightBody}>
                    <div className={styles.presContainer}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserUpApp;
