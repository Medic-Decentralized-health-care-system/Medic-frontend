import React, { useEffect } from "react";
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
  InputGroup,
  InputNumber,
  InputPicker,
  Panel,
  SelectPicker,
  Toggle,
  Uploader,
} from "rsuite";
import { Icon } from "@rsuite/icons";

import CameraRetroIcon from "@rsuite/icons/legacy/CameraRetro";
import { createEntityAdapter } from "@reduxjs/toolkit";
import { TagPicker } from "rsuite";
import Swal from "sweetalert2";

// const timeSlots = [];
// for (let i = 8; i <= 20; i++) {
//   const hour = i < 10 ? `0${i}` : i;
//   const amPMHour = i <= 11 ? hour : (i === 12 ? '12' : `0${i - 12}`);

//   const nextHour = i === 20 ? '08' : (i + 1 < 10 ? `0${i + 1}` : i + 1);
//   const amPMNextHour = nextHour <= 11 ? nextHour : (nextHour === 12 ? '12' : `0${nextHour - 12}`);

//   timeSlots.push({
//     label: `${amPMHour}:00 ${i <= 11 ? 'AM' : 'PM'} - ${amPMHour}:30 ${i <= 11 ? 'AM' : 'PM'}`,
//     value: `${hour}:00-${hour}:30`,
//   });
//   timeSlots.push({
//     label: `${amPMHour}:30 ${i <= 11 ? 'AM' : 'PM'} - ${amPMNextHour}:00 ${i === 20 ? 'AM' : (i <= 11 ? 'AM' : 'PM')}`,
//     value: `${hour}:30-${nextHour}:00`,
//   });
// }
const timeSlots = [
  {
    label: "08:00AM - 08:30AM",
    value: {
      startTime: "08:00AM",
      endTime: "08:30AM",
    },
  },
  {
    label: "08:30AM - 09:00AM",
    value: {
      startTime: "08:30AM",
      endTime: "09:00AM",
    },
  },
  {
    label: "09:00AM - 09:30AM",
    value: {
      startTime: "09:00AM",
      endTime: "09:30AM",
    },
  },
  {
    label: "09:30AM - 10:00AM",
    value: {
      startTime: "09:30AM",
      endTime: "10:00AM",
    },
  },
  {
    label: "10:00AM - 10:30AM",
    value: {
      startTime: "10:00AM",
      endTime: "10:30AM",
    },
  },
  {
    label: "10:30AM - 11:00AM",
    value: {
      startTime: "10:30AM",
      endTime: "11:00AM",
    },
  },
  {
    label: "11:00AM - 11:30AM",
    value: {
      startTime: "11:00AM",
      endTime: "11:30AM",
    },
  },
  {
    label: "11:30AM - 12:00PM",
    value: {
      startTime: "11:30AM",
      endTime: "12:00PM",
    },
  },
  {
    label: "12:00PM - 12:30PM",
    value: {
      startTime: "12:00PM",
      endTime: "12:30PM",
    },
  },
  {
    label: "12:30PM - 01:00PM",
    value: {
      startTime: "12:30PM",
      endTime: "01:00PM",
    },
  },
  {
    label: "01:00PM - 01:30PM",
    value: {
      startTime: "01:00PM",
      endTime: "01:30PM",
    },
  },
  {
    label: "01:30PM - 02:00PM",
    value: {
      startTime: "01:30PM",
      endTime: "02:00PM",
    },
  },
  {
    label: "02:00PM - 02:30PM",
    value: {
      startTime: "02:00PM",
      endTime: "02:30PM",
    },
  },
  {
    label: "02:30PM - 03:00PM",
    value: {
      startTime: "02:30PM",
      endTime: "03:00PM",
    },
  },
  {
    label: "03:00PM - 03:30PM",
    value: {
      startTime: "03:00PM",
      endTime: "03:30PM",
    },
  },
  {
    label: "03:30PM - 04:00PM",
    value: {
      startTime: "03:30PM",
      endTime: "04:00PM",
    },
  },
  {
    label: "04:00PM - 04:30PM",
    value: {
      startTime: "04:00PM",
      endTime: "04:30PM",
    },
  },
  {
    label: "04:30PM - 05:00PM",
    value: {
      startTime: "04:30PM",
      endTime: "05:00PM",
    },
  },
  {
    label: "05:00PM - 05:30PM",
    value: {
      startTime: "05:00PM",
      endTime: "05:30PM",
    },
  },
  {
    label: "05:30PM - 06:00PM",
    value: {
      startTime: "05:30PM",
      endTime: "06:00PM",
    },
  },
  {
    label: "06:00PM - 06:30PM",
    value: {
      startTime: "06:00PM",
      endTime: "06:30PM",
    },
  },
  {
    label: "06:30PM - 07:00PM",
    value: {
      startTime: "06:30PM",
      endTime: "07:00PM",
    },
  },
  {
    label: "07:00PM - 07:30PM",
    value: {
      startTime: "07:00PM",
      endTime: "07:30PM",
    },
  },
  {
    label: "07:30PM - 08:00PM",
    value: {
      startTime: "07:30PM",
      endTime: "08:00PM",
    },
  },
];

console.log(timeSlots);

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
function EditProfileDoc() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [clinicAddress, setClinicAddress] = useState("");
  const [pPic, setPPic] = useState("");
  const [fee, setFee] = useState(userInfo.fees);
  const [availability, setAvailability] = useState([]);

  useEffect(() => {
    setFirstName(userInfo.name.split(" ")[0]);
    setLastName(userInfo.name.split(" ")[1]);
    setEmail(userInfo.email);
    setClinicAddress(userInfo.clinicAddress);
    setPPic(userInfo.image);
  }, []);

  // We need to have a tag key in the userInfo object which is empty if there's no tag selectd and contains a string of the exact tag if it is selected. Temporarily using a temp string named userTag to simulate this implementation
  const userTag = "";

  const handleUpdateDetails = async () => {
    // TODO: Handle the updating of details in the backend
    console.log({
      name: firstName + " " + lastName,
      email: email,
      clinicAddress: clinicAddress,
    });
    const res = await fetch(
      process.env.REACT_APP_BACKEND_URL + "doctors/editdoctor/" + userInfo._id,
      {
        method: "PUT",
        contentType: "application/json",
        body: JSON.stringify({
          name: firstName + " " + lastName,
          email: email,
          clinicAddress: clinicAddress,
          // image:pPic
        }),
      }
    );
    const data = await res.json();
    console.log(data);
    if (data.data) {
      console.log("Details updated!");
      Swal.fire({
        icon: "success",
        title: "Details updated!",
        showConfirmButton: true,
      });
    } else {
      console.log("Details not updated!");
      Swal.fire({
        icon: "error",
        title: "Details not updated!",
        showConfirmButton: true,
      });
    }
  };
  const handleTimeSlotChange = (selectedTimeSlots) => {
    setAvailability(selectedTimeSlots);
  };
  const handleFeeChange = (value) => {
    setFee(value);
  };

  const handleSetAvailability = async () => {
    console.log(availability);
    console.log(fee);
    const res = await fetch(
      process.env.REACT_APP_BACKEND_URL +
        "doctors/doctor/setavailabilityofdoctor/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doctorId: userInfo._id,
          slots: availability,
          fees: fee,
        }),
      }
    );
    const data = await res.json();
    console.log(data);
    if (data.data) {
      console.log("Details updated!");
      Swal.fire({
        icon: "success",
        title: "Availability has been set!",
        showConfirmButton: true,
      });
    } else {
      console.log("Details not updated!");
      Swal.fire({
        icon: "error",
        title: "Details not updated!",
        showConfirmButton: true,
      });
    }
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

  const [fileURL, setFileURL] = useState(userInfo.image);
  const handleUpload = (file) => {
    setPPic(file);
    setFileURL(URL.createObjectURL(file.blobFile));
  };

  const sex = ["Male", "Female", "Non-binary"].map((item) => ({
    label: item,
    value: item,
  }));

  return (
    <>
      <div className={styles.container}>
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
                    onChange={handleUpload}
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
                      value={firstName}
                      onChange={(value) => {
                        setFirstName(value);
                      }}
                    />
                  </div>
                  <div className={styles.lastName}>
                    <p>Last Name</p>
                    <Input
                      type="text"
                      id="lName"
                      appearance="ghost"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(value) => {
                        setLastName(value);
                      }}
                    />
                  </div>
                  {/* <div className={styles.dob}>
                    <p>Date of Birth</p>
                    <DatePicker
                      style={{ backgroundColor: "white", borderRadius: "10px" }}
                      type="text"
                      id="dob"
                      appearance="primary"
                      placeholder="Date Of Birth"
                    />
                  </div> */}
                </div>
                <div className={styles.bottomFormBox}>
                  {/* <div className={styles.sex}>
                    <p>Gender</p>
                    <InputPicker
                      data={sex}
                      id="sex"
                      appearance="default"
                      placeholder="Gender"
                    />
                  </div> */}
                  <div className={styles.email}>
                    <p>Email</p>
                    <Input
                      type="email"
                      id="email"
                      appearance="default"
                      placeholder="Email"
                      value={email}
                      onChange={(value) => {
                        setEmail(value);
                      }}
                    />
                  </div>
                  <div className={styles.pwd}>
                    <p>Clinic Address</p>
                    <Input
                      type="text"
                      id="pwd"
                      appearance="default"
                      placeholder="Clinic Address"
                      value={clinicAddress}
                      onChange={(value) => {
                        setClinicAddress(value);
                      }}
                    />
                  </div>
                </div>
                <Button
                  appearance="primary"
                  style={{ margin: "10px", backgroundColor: "#023020" }}
                  onClick={handleUpdateDetails}
                >
                  Update Details
                </Button>
                <Panel className={styles.panelTagEdit}>
                  <p style={{ padding: "0.5rem", fontSize: "small" }}>
                    Add Time Slots
                  </p>
                  <TagPicker
                    style={{ width: "100%", maxHeight: "100px" }}
                    placement="topStart"
                    data={timeSlots}
                    placeholder="Select time slots"
                    onChange={handleTimeSlotChange}
                  />
                  <p style={{ padding: "0.5rem", fontSize: "small" }}>Fees</p>
                  <InputNumber
                    prefix="₹"
                    value={fee}
                    onChange={handleFeeChange}
                  />
                </Panel>
                <div className={styles.updateBtnBox}>
                  <Button
                    appearance="primary"
                    style={{ margin: "10px", backgroundColor: "#023020" }}
                    onClick={handleSetAvailability}
                  >
                    Update time slots for today
                  </Button>
                </div>
              </div>
              {/* <div className={styles.updateBtnBox}>
                <InputGroup style={styles}>
                  <InputGroup.Addon> Location</InputGroup.Addon>
                  <Input />
                </InputGroup>
                <Button
                  appearance="primary"
                  style={{ margin: "10px", backgroundColor: "#023020" }}
                  onClick={handleUpdateDetails}
                >
                  Update location
                </Button>
              </div> */}
            </Panel>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfileDoc;
