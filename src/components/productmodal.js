import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as action from "../redux/action";

function ProductModal(props) {
  // console.log(props);

  const [fields, setFileds] = useState();
  // console.log(fields);

  const handelInputChange = (e) => {
    setFileds({ ...fields, [e.target.id]: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    props.AddProductInList(fields);
    console.log(fields);
  };
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="text-center"
          >
            {/* {res.title} */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="tm-edit-product-form" onSubmit={handelSubmit}>
            <div className="input-group mb-3">
              <label
                className="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label"
              >
                Product Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7"
                onChange={handelInputChange}
                placeholder="name"
              />
            </div>
            <div className="input-group mb-3">
              <label
                className="col-xl-4 col-lg-4 col-md-4 col-sm-5 mb-2"
              >
                Description
              </label>
              <textarea
                className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7"
                rows="3"
                id="username"
                onChange={handelInputChange}
                placeholder="username"
              ></textarea>
            </div>
            <div className="input-group mb-3">
              <label
                className="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label"
              >
                Category
              </label>
              <select
                className="custom-select col-xl-9 col-lg-8 col-md-8 col-sm-7"
                id="category"
                onChange={handelInputChange}
              >
                <option selected>Select one</option>
                <option value="Cras efficitur lacus">Cras efficitur lacus</option>
                <option value="Pellentesque molestie">Pellentesque molestie</option>
                <option value="Sed feugiat nulla">Sed feugiat nulla</option>
              </select>
            </div>
            <div className="input-group mb-3">
              <label
                className="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label"
              >
                Expire Date
              </label>
              <input
                id="email"
                name="expire_date"
                type="text"
                className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7"
                data-large-mode="true"
                onChange={handelInputChange}
                placeholder="email"
              />
            </div>
            <div className="input-group mb-3">
              <label
                className="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label"
              >
                Units In Stock
              </label>
              <input
                id="website"
                name="stock"
                type="text"
                className="form-control validate col-xl-9 col-lg-8 col-md-7 col-sm-7"
                onChange={handelInputChange}
                placeholder="website"
              />
            </div>
            <div className="input-group mb-3">
              <div className="ml-auto col-xl-8 col-lg-8 col-md-8 col-sm-7 pl-0">
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default connect(null, action)(ProductModal);
