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
        className="bg-[#000c12] ml-4 pt-6 text-2xl text-gray-300"
        closeButton
      >
        <Modal.Title>
          Case Study: myCinema
          <br></br>
          Press Esc to Close
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: "80vh", overflowY: "auto" }}>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="bg-[#000c12] ml-4 text-xl text-gray-300"
          variant="secondary"
          onClick={() => closeModal()}
        >
          Press Esc to Close Case Study
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CaseModal;
