import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col, Input, Row, Modal, ModalBody, Label } from "reactstrap";
import DynamicAnswer from "../SubSection/DynamicAnswer";
import PositionType from "../SubSection/PositionType";

const QuizFilters = () => {
  //Apply Now Model
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <React.Fragment>
      <Row className="justify-content-center">
        <Col lg={12}>
          <div className="candidate-list-widgets mb-4">
            <Form action="#">
              <Row className="g-2">
                <Col lg={5}>
                  <div className="filler-job-form">
                    <i className="uil uil-briefcase-alt"></i>
                    <Input
                      type="search"
                      className="form-control filler-job-input-box"
                      id="exampleFormControlInput1"
                      placeholder="Job name"
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="filler-job-form">
                    <i className="uil uil-clipboard-notes"></i>
                    <select
                      className="form-select selectForm__inner"
                      data-trigger
                      name="choices-single-categories"
                      id="choices-single-categories"
                      aria-label="Default select example"
                    >
                      <PositionType />
                    </select>
                  </div>
                </Col>
                <Col lg={4}>
                  <div>
                    <Link to="#" className="btn btn-primary">
                      <i className="uil uil-filter"></i> Filter
                    </Link>
                    <Link to="#" className="btn btn-success ms-2">
                      <i className="uil uil-cog"></i> Advance
                    </Link>
                    <Link
                      to="#hireNow"
                      onClick={() => openModal()}
                      data-bs-toggle="modal"
                      className="btn btn-primary btn-hover ms-2"
                    >
                      Add Quiz
                    </Link>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>

      <div
        className="modal fade"
        id="hireNow"
        tabIndex="-1"
        aria-labelledby="hireNow"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <Modal isOpen={modal} toggle={openModal} centered>
            <ModalBody className="p-5">
              <div className="text-center mb-4">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Add Quiz
                </h5>
              </div>
              <div className="position-absolute end-0 top-0 p-3">
                <button
                  type="button"
                  onClick={openModal}
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="mb-3">
                <Label for="nameFormControlInput" className="form-label">
                  Quiz Name
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id="nameFormControlInput"
                  placeholder="Enter your quiz name"
                />
              </div>
              <div className="mb-4">
                <Label for="contentFormControlInput" className="form-label">
                  Quiz Content
                </Label>
                <textarea
                  className="form-control"
                  id="contentFormControlTextarea"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="mb-3">
                <Label for="answersFormControlInput" className="form-label">
                  Answers
                </Label>
                <DynamicAnswer id="answersFormControlInput" />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Add
              </button>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuizFilters;
