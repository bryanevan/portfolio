import React from "react";
import { Modal, Button } from "react-bootstrap";

const CaseModal = ({ closeModal, children }) => {
  return (
    <Modal
      className="bg-[#000c12] text-gray-300"
      show={true}
      onHide={() => closeModal()}
    >
      <Modal.Header
        className="bg-[#000c12] ml-4 text-xl text-white"
        closeButton
        onClick={() => closeModal()}
      >
        <Modal.Title>
          Case Study: myCinema
          <br></br>
          Press Esc or click here to close window
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: "80vh", overflowY: "auto" }}>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="bg-[#000c12] ml-4 text-xl text-white"
          variant="secondary"
          onClick={() => closeModal()}
        >
          Click here to close window
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CaseModal;
