import React, { useEffect, useState } from "react";
import { ReactDOM } from "react-dom";
import Loader from "react-js-loader";
import CardList from "../../components/CardList/CardList";
import styles from "./styles.module.css";
import CardSelected from "../../components/CardSelected/CardSelected";
import { Button, DatePicker, Panel, PanelGroup } from "rsuite";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import MoneyTransferABI from "../../constants/frontEndAbiLocation/MoneyTransfer.json";
import { ethers } from "ethers";

// const dummyDoctorObj = {
//   fullName: "Dr. Aditi Singh",
//   degree: "MBBS",
//   specialty: "General Physician",
//   experience: "4 years",
//   imgURL:
//     "https://i.pinimg.com/originals/35/57/55/355755832670880825ad87838e18d6b6.jpg",
//   availability: {
//     days: ["Monday", "Tuesday", "Thursday"],
//     time: [
//       "10:00AM-11:00AM",
//       "02:00PM-3:00PM",
//       "03:30PM-4:30PM",
//       "05:00PM-6:00PM",
//       "06:30PM-7:30PM",
//       "08:00PM-9:00PM",
//       "09:30PM-10:30PM",
//       "11:00PM-12:00AM",
//       "12:30AM-01:30AM",
//       "02:00AM-03:00AM",
//       "03:30AM-04:30AM",
//     ],
//   },
// };

function AppointmentBooker({ doctor }) {
  const [show, setShow] = useState(false);
  const [doctors, setDoctors] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isBookable, setIsBookable] = useState(false);
  const [availabilityObj, setAvailabilityObj] = useState({});
  const [timingLoading, setTimingLoading] = useState(false);
  const userInfo = useSelector((state) => state);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    selectedTimeSlot !== "" ? setIsBookable(true) : setIsBookable(false);
  };

  const handleTimeSlotSelect = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
    setStartTime(availabilityObj.slots[timeSlot].startTime);
    setEndTime(availabilityObj.slots[timeSlot].endTime);
    selectedDate ? setIsBookable(true) : setIsBookable(false);
  };

  const handleAppointmentBooking = async () => {
    console.log(selectedDate , selectedTimeSlot)
    // if (selectedDate && selectedTimeSlot) {
    //   console.log({
    //     patientId: userInfo.userInfo._id,
    //     doctorId: userInfo.doctor._id,
    //     date: selectedDate.toString(),
    //     startTime: startTime,
    //     endTime: endTime,
    //   });
    await depositEth('0.01');
      // try {
      //   console.log(selectedDate);
      //   const res = await fetch(
      //     process.env.REACT_APP_BACKEND_URL + "patient/setappointment",
      //     {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({
      //         patientId: userInfo.userInfo._id,
      //         doctorId: userInfo.doctor._id,
      //         patientName : userInfo.userInfo.name ,
      //         doctorName : userInfo.doctor.name ,
      //         startTime: startTime,
      //         endTime: endTime,
      //         date: selectedDate.toString(),
      //       }),
      //     }
      //   );
      //   const data = await res.json();
      //   console.log(data)
      // } catch (err) {
      //   Swal.fire({
      //     icon: "error",
      //     title: "Oops...",
      //     text: "Something went wrong!",
      //   });
      // }
    // } 
    // else {
    //   setIsBookable(false);
    //   Swal.fire({
    //     icon: "warning",
    //     title: "Oops...",
    //     text: "Please select a date and time slot!",
    //   });
    // }
  };

  useEffect(() => {
    const getDoctorAvailability = async (req, res) => {
      try {
        setTimingLoading(true);
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL +
            "doctors/getdoctoravailability/" +
            userInfo.doctor._id,
          {
            method: "GET",
          }
        );
        const jsonData = await response.json();
        setAvailabilityObj(jsonData.data.data);
        console.log(availabilityObj);
        console.log(availabilityObj.slots);
        setLoading(false);
        setShow(true);
      } catch (err) {
        console.error(err.message);
      } finally {
        setTimingLoading(false);
      }
    };
    getDoctorAvailability();
  }, [userInfo.doctor]);

  /*Contract To send the ether*/
  const MoneyTransferAddress = "0x1853DD7650D3384DFAb172b9bfF6692F79Eb69DC";
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    MoneyTransferAddress,
    MoneyTransferABI,
    signer
  );

  const sendEther = async () => {
    try {
      const balance = await contract.getBalance("0x490aeeA34202D19b42731f00371e949c01F2eC53");
      console.log(balance.toString());
    }
    catch(err){
      console.log(err)
    }
  };

  const depositEth = async (amount) => {
    const weiValue = ethers.utils.parseUnits(amount, 'wei');
    console.log(weiValue);
    try {
      const transaction = await contract.addMoney(weiValue);
      const balance = await contract.getBalance("0x490aeeA34202D19b42731f00371e949c01F2eC53");
      console.log(balance.toString());
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className={styles.searchApp}>
        <div className={styles.fullscreenFrame}>
          <p className={styles.logoText}>MEDIC.</p>
          <div className={styles.fullTop}>
            <CardSelected
              doctor={userInfo.doctor}
              avatarStyle={{ height: "200px", width: "200px" }}
            />
            <div className={styles.appBookBox}>
              <div className={styles.appBoxHeader}>
                <h4>Book an Appointment</h4>
              </div>
              <div className={styles.appBoxBodyTop}>
                <div className={styles.chooseDateBox}>
                  <h4>Select Date: </h4>
                  <DatePicker
                    style={{
                      boxShadow: "9px 7px 20px -6px rgba(0, 0, 0, 0.3)",
                    }}
                    value={selectedDate}
                    onSelect={(date) => handleDateSelect(date)}
                    format="yyyy-MM-dd"
                  />
                </div>
                <div className={styles.chooseTimeBox}>
                  <h4>Select Time Slot:</h4>
                  <PanelGroup
                    bordered
                    style={{
                      boxShadow: "9px 7px 20px -6px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {timingLoading ? (
                      <Loader
                        type="bubble-loop"
                        bgColor={"#FFFFFF"}
                        color={"#00000"}
                        size={30}
                      />
                    ) : (
                      <Panel style={{ padding: "0px" }}>
                        <div className={styles.timeSlotContainer}>
                          {availabilityObj.slots &&
                          availabilityObj.slots.length > 0 ? (
                            availabilityObj.slots.map((slot, index) => (
                              <Panel
                                style={{
                                  padding: "0px",
                                  margin: "0px",
                                  cursor: "pointer",
                                }}
                                className={
                                  startTime === slot.startTime
                                    ? styles.selectedTimeSlot
                                    : ""
                                }
                                key={index}
                                shaded={selectedTimeSlot === index}
                                border={selectedTimeSlot === index}
                                onClick={() => handleTimeSlotSelect(index)}
                              >
                                {slot.startTime}-{slot.endTime}
                              </Panel>
                            ))
                          ) : (
                            <p>No available time slots.</p>
                          )}
                        </div>
                      </Panel>
                    )}
                  </PanelGroup>
                </div>
                <Button
                  appearance="primary"
                  style={{ margin: "10px", backgroundColor: "#023020" }}
                  disabled={!isBookable}
                  onClick={handleAppointmentBooking}
                >
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.fullBottom}>
            {loading ? (
              <Loader
                type="bubble-loop"
                bgColor={"#000000"}
                color={"#000000"}
                size={30}
              />
            ) : (
              !show && (
                <div className={styles.banner}>
                  <div className={styles.logoImg}>
                    <img
                      src={require("../../assets/images/Mediclogokinda.png")}
                      alt="mediclogo"
                    />
                  </div>
                  <hr
                    style={{
                      textAlign: "center",
                      width: "2%",
                      border: "solid 1px black",
                    }}
                  ></hr>
                  <p style={{ textAlign: "center", color: "white" }}>
                    Medic keeps all your records secure in our decentralized
                    vault.
                  </p>
                </div>
              )
            )}
            {/* {show && (
              <div className={styles.contCardList}>
                <CardList doctors={doctors} />
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AppointmentBooker;
