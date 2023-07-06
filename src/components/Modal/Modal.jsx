import React from "react";
import styles from "./styles.module.css"; // You can create a separate CSS file for styling
import { Button, Input } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import CloseIcon from "@rsuite/icons/Close";
import { IconButton } from "rsuite";
import { Icon } from "@rsuite/icons";
import { hover } from "@testing-library/user-event/dist/hover";

const Modal = ({ type, onClose, handleEditClick }) => {
  const renderModalContent = () => {
    switch (type) {
      case "success":
        return (
          <div className={styles.modalContent}>
            <h2>Success Modal</h2>
            <div className={styles.iconContainer}>
              <img src="" alt="Success Icon" />
            </div>
          </div>
        );
      case "error":
        return (
          <div className={styles.modalContent}>
            <h2>Error Modal</h2>
            <div className={styles.iconContainer}>
              <img src="path_to_error_icon" alt="Error Icon" />
            </div>
          </div>
        );
      case "editTag":
        const currTag = "";
        return (
          <div className={styles.inContainer}>
            <div className={styles.centerCont}>
              <h4>Edit Tag</h4>
              <Input
                type="text"
                defaultValue={`${currTag}`}
                placeholder="Enter Tag"
                size="lg"
                style={{
                  fontSize: "1.03rem",
                }}
              ></Input>
              <Button
                style={{
                  color: "white",
                  backgroundColor: "black",
                  borderRadius: "110px",
                  margin: "10px",
                  fontSize: "1.12rem",
                  padding: "0.85rem",
                  position: "absolute",
                  bottom: "55px",
                  width: "30%",
                }}
                appearance="ghost"
                onClick={handleEditClick}
              >
                Save
              </Button>
            </div>
          </div>
        );

        // Add more cases for different modal types
      default:
        return null;
    }
  };

  return (
    <dialog open className={styles.modalDialog}>
      <IconButton
        onClick={onClose}
        className={styles.closeButton}
        size="lg"
        icon={<CloseIcon size="9em" color="white" />}
        appearance="primary"
        style={{
          backgroundColor: "transparent",
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      />
      {renderModalContent()}
    </dialog>
  );
};

export default Modal;
