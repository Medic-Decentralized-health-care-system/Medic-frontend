import React from "react";
import { ReactDOM } from "react-dom";
import styles from "./styles.module.css";
import Avatar from "../../../components/Avatar/Avatar";
import { Dropdown } from "rsuite";
import { Link } from "react-router-dom";
import ButtonDark from "../../../components/Buttons/ButtonDark";
import ButtonHollow from "../../../components/Buttons/ButtonHollow";
import { IconButton } from "rsuite";
import InfoOutlineIcon from "@rsuite/icons/InfoOutline";
import Info from "../../../components/Info/Info";
const NavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
  <Link ref={ref} to={href} {...rest}>
    {children}
  </Link>
));

function UserDash() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.logotext}>MEDIC.</p>
          <div className={styles.pfBox}>
            <Avatar
              imgURL={require("../../../assets/images/pfptemplate.png")}
              imgStyle={{ width: "50px", height: "50px" }}
            />
            <div className={styles.dropdown}>
              <img
                src={require("../../../assets/images/down.png")}
                alt=""
                draggable={false}
                height={"18px"}
              />
              <div className={styles.dropdownContent}>
                <a href="/">Edit Profile</a>
                <a href="/">Edit Tag</a>
                <a href="/">Logout</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.mainHeader}>
            <div className={styles.mainButtonContainer}>
              <ButtonDark text="Search for Doctors" />
              <ButtonHollow text="New Medical Card" />
            </div>
            <div className={styles.mainNameBox}>
              <p style={{ fontSize: "1.4rem" }}>Rahul</p>
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
                    <div className={styles.appContainer}>
                      <p className={styles.appDoctorName}>Dr. Rajesh Joshi</p>
                      <p>19/04/23</p>
                      <IconButton
                        as="div"
                        style={styles.infoIconButton}
                        icon={<InfoOutlineIcon />}
                      />
                    </div>
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
                    <div className={styles.appContainer}>
                      <p className={styles.appDoctorName}>Dr. Rajesh Joshi</p>
                      <p>19/04/23</p>
                      <IconButton
                        as="div"
                        style={styles.infoIconButton}
                        icon={<InfoOutlineIcon />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.dashBottom}>
              <div className={styles.MedicalRecords}>
                <div className={styles.MedicalRecordContainer}>
                  <div className={styles.dashDivHeader}>Medical Record</div>
                  <div className={styles.appContainer}>
                    <p className={styles.appDoctorName}>Dr. Rajesh Joshi</p>
                    <p>19/04/23</p>
                    <IconButton
                      as="div"
                      style={styles.infoIconButton}
                      icon={<InfoOutlineIcon />}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.RecTransactions}>
                <div className={styles.RecTransactionsContainer}>
                  <div className={styles.dashDivHeader}>
                    Recent Transactions
                  </div>
                  
                  <Info date={"19/04/23"}>Dr. Rajesh Joshi</Info>
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
