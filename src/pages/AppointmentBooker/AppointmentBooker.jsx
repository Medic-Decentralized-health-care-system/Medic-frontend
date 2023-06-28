import React, { useState } from "react";
import { ReactDOM } from "react-dom";
import Loader from "react-js-loader";
import CardList from "../../components/CardList/CardList";
import styles from "./styles.module.css";
import CardSelected from "../../components/CardSelected/CardSelected";
import { Button, DatePicker, Panel, PanelGroup } from "rsuite";

const dummyDoctorObj = {
  fullName: "Dr. Aditi Singh",
  degree: "MBBS",
  specialty: "General Physician",
  experience: "4 years",
  imgURL:
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

function AppointmentBooker() {
  const [show, setShow] = useState(false);
  const [doctors, setDoctors] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [isBookable, setIsBookable] = useState(false);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    selectedTimeSlot !== "" ? setIsBookable(true) : setIsBookable(false);
  };

  const handleTimeSlotSelect = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
    selectedDate ? setIsBookable(true) : setIsBookable(false);
  };

  const handleAppointmentBooking = () => {
    if (selectedDate && selectedTimeSlot) {
      // Logic for booking the appointment goes here
      // You can send a request to your backend server to save the appointment details
      console.log("Appointment booked:", selectedDate, selectedTimeSlot);
    } else {
      console.log("Please select a date and time slot");
      setIsBookable(false);
    }
  };

  return (
    <>
      <div className={styles.searchApp}>
        <div className={styles.fullscreenFrame}>
          <p className={styles.logoText}>MEDIC.</p>
          <div className={styles.fullTop}>
            <CardSelected
              doctor={dummyDoctorObj}
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
                    onSelect={handleDateSelect}
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
                    <Panel
                      style={{
                        padding: "0px",
                      }}
                    >
                      <div className={styles.timeSlotContainer}>
                        {dummyDoctorObj.availability.time.map((slot) => (
                          <Panel
                            style={{
                              padding: "0px",
                              margin: "0px",
                              cursor: "pointer",
                            }}
                            className={
                              selectedTimeSlot === slot
                                ? styles.selectedTimeSlot
                                : ""
                            }
                            key={slot}
                            shaded={selectedTimeSlot === slot}
                            border={selectedTimeSlot === slot}
                            onClick={() => handleTimeSlotSelect(slot)}
                          >
                            {slot}
                          </Panel>
                        ))}

                        {/* Add more time slots here */}
                      </div>
                    </Panel>
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
                bgColor={"#FFFFFF"}
                color={"#FFFFFF"}
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
            {show && (
              <div className={styles.contCardList}>
                <CardList doctors={doctors} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AppointmentBooker;
