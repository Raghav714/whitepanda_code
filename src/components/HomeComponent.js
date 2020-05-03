import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="secondary" onClick={toggle}>Book</Button>
      <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    isOpen={modal} toggle={toggle} className="colorfade">
        <ModalBody className="modalbg">
          <h2>Booking Confirm</h2>
	   <br />
	   <h3>You Booked <h4 className="colorfade">Tata</h4></h3>
	   <h3>Duration<h4 className="colorfade">04/05/2020 - 10/05/2020</h4></h3>
        </ModalBody>
        <ModalFooter className="modalbg">
          <Button color="secondary" onClick={toggle}>Continue</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
