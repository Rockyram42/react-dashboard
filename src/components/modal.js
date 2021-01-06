import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as action from "../redux/action";

function ProductModal(props) {
  console.log(props);

  useEffect(() => {
    props.SingleTaskData(props.modalId);
  }, [props.modalId]);
  let res = props.todo;
  console.log(res);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-center">
          {res.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-center">
          {res.completed ? (
            <span className="text-success">The task has completed</span>
          ) : (
            <span className="text-danger">The task has not yet completed </span>
          )}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
const mapStateToProps = (state) => {
  console.log(state);

  return {
    todo: state.singleToDo,
  };
};

export default connect(mapStateToProps, action)(ProductModal);
