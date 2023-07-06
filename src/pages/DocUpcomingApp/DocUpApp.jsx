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
  specialty: "General Physician",
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

function DocUpApp() {
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
              <CardSelected
                doctor={dummyDoctorObj}
                avatarStyle={{ width: "100px", height: "100px" }}
                style={{ width: "250px", height: "500px" }}
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
                      <p>10-11AM</p>
                    </div>
                    <Divider vertical style={{ backgroundColor: "black" }} />
                    <div className={styles.pendingStatusBox}>
                      {pending ? (
                        <p>
                          pending
                          <img
                            alt=""
                            src={require("../../assets/images/stopwatch.png")}
                            style={{ display: "inline", height: "0.7rem" }}
                          />
                        </p>
                      ) : (
                        <p>complete</p>
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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro non vel assumenda nisi iure dolorem, adipisci
                    veritatis blanditiis consequatur architecto cupiditate
                    maxime consequuntur possimus quam nesciunt rem? Voluptas,
                    quo. Cumque.
                  </div>
                </div>
                <div className={styles.appBoxBottomRight}>
                  <div className={styles.appBoxBottomRightHeader}>
                    <p>Records:</p>
                  </div>
                  <div className={styles.appBoxBottomRightBody}>
                    <div className={styles.presContainer}>
                      <Info textRight="22/04/23" link="">
                        Diabetes Prescription
                      </Info>
                      <Info textRight="22/04/23" link="">
                        Diabetes Prescription
                      </Info>
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

export default DocUpApp;
