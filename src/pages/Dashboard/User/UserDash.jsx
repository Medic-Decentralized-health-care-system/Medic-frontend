import React from "react";
import { ReactDOM } from "react-dom";
import styles from "./styles.module.css";
import Avatar from "../../../components/Avatar/Avatar";
import { Dropdown } from "rsuite";
import { Link } from "react-router-dom";
import ButtonDark from "../../../components/Buttons/ButtonDark";
import ButtonHollow from "../../../components/Buttons/ButtonHollow";

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
            <Dropdown
              as="div"
              className={styles.dropdown}
              placement="bottomStart"
            >
              <Dropdown.Item as={NavLink} href="profile">
                View Profile
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} href="profile">
                Create/Edit Tag
              </Dropdown.Item>
              <Dropdown.Item
                sx={{ textDecoration: "none", color: "red" }}
                as={NavLink}
                href="/Logout"
              >
                Logout
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.mainHeader}>
            <div className={styles.mainButtonContainer}>
              <ButtonDark text="Search for Doctors" />
              <ButtonHollow text="New Medical Card" />
            </div>
            <div className={styles.mainNameBox}>
              <p>Rahul</p>
            </div>
          </div>
          <div className={styles.mainBody}></div>
        </div>
      </div>
    </>
  );
}

export default UserDash;
