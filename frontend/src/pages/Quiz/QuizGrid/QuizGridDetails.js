import React, { useState } from "react";
import { Col, Row, Modal, ModalBody, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import userImage1 from "../../../assets/images/user/img-01.jpg";
import userImage2 from "../../../assets/images/user/img-02.jpg";
import userImage3 from "../../../assets/images/user/img-03.jpg";
import userImage4 from "../../../assets/images/user/img-04.jpg";
import userImage5 from "../../../assets/images/user/img-05.jpg";
import userImage6 from "../../../assets/images/user/img-06.jpg";
import userImage7 from "../../../assets/images/user/img-07.jpg";
import userImage8 from "../../../assets/images/user/img-08.jpg";
import userImage9 from "../../../assets/images/user/img-09.jpg";

const QuizGridDetails = () => {
  const quizgridDetails = [
    {
      id: 1,
      userImg: userImage1,
      quizName: "Charles Dickens",
      quizDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nesciunt quae dignissimos, deleniti voluptas officia. Hic, quia.",
      position: "Junior",
      addclassNameBookmark: true,
    },
    {
      id: 2,
      userImg: userImage2,
      quizName: "Gabriel Palmer",
      quizDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nesciunt quae dignissimos, deleniti voluptas officia. Hic, quia.",
      position: "Junior",
      addclassNameBookmark: true,
    },
    {
      id: 3,
      userImg: userImage3,
      quizName: "James Lemire",
      quizDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nesciunt quae dignissimos, deleniti voluptas officia. Hic, quia.",
      position: "Senior",
      addclassNameBookmark: false,
    },

    {
      id: 4,
      userImg: userImage4,
      quizName: "Rebecca Swartz",
      quizDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nesciunt quae dignissimos, deleniti voluptas officia. Hic, quia.",
      position: "Project Manager",
      addclassNameBookmark: false,
    },
    {
      id: 5,
      userImg: userImage5,
      quizName: "Betty Richards",
      quizDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nesciunt quae dignissimos, deleniti voluptas officia. Hic, quia.",
      position: "Leader",
      addclassNameBookmark: false,
    },
    {
      id: 6,
      userImg: userImage6,
      quizName: "Jeffrey Montgomery",
      quizDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nesciunt quae dignissimos, deleniti voluptas officia. Hic, quia.",
      position: "Fresher",
      addclassNameBookmark: true,
    },
    {
      id: 7,
      userImg: userImage7,
      quizName: "Brooke Hayes",
      quizDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nesciunt quae dignissimos, deleniti voluptas officia. Hic, quia.",
      position: "Internship",
      addclassNameBookmark: true,
    },
    {
      id: 8,
      userImg: userImage8,
      quizName: "Cerys Woods",
      quizDescription:
        "profile-active position-absolute badge rounded-circle bg-danger",
      position: "Senior",
      addclassNameBookmark: false,
    },
    {
      id: 9,
      userImg: userImage9,
      quizName: "Olivia Murphy",
      quizDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nesciunt quae dignissimos, deleniti voluptas officia. Hic, quia.",
      position: "Intership",
      addclassNameBookmark: false,
    },
  ];

  const [quizModal, setquizModal] = useState(quizgridDetails[0]);

  //Apply Now Model
  const [modal, setModal] = useState(false);

  const openModal = (quizgridDetailsNew) => {
    setquizModal(quizgridDetailsNew);
    setModal(!modal);
  };

  return (
    <React.Fragment>
      <Row className="align-items-center">
        <Col lg={8} md={7}>
          <div>
            <h6 className="fs-16 mb-0"> Showing 1 – 8 of 11 results </h6>
          </div>
        </Col>

        <Col lg={4} md={5}>
          <div className="candidate-list-widgets">
            <Row>
              <Col md={6}>
                <div className="selection-widget mt-3 mt-md-0">
                  <select
                    className="form-select"
                    data-trigger
                    name="choices-single-filter-orderby"
                    id="choices-single-filter-orderby"
                    aria-label="Default select example"
                  >
                    <option value="df">Default</option>
                    <option value="ne">Newest</option>
                    <option value="od">Oldest</option>
                    <option value="rd">Random</option>
                  </select>
                </div>
              </Col>
              <Col md={6}>
                <div className="selection-widget mt-3 mt-md-0">
                  <select
                    className="form-select"
                    data-trigger
                    name="choices-candidate-page"
                    id="choices-candidate-page"
                    aria-label="Default select example"
                  >
                    <option value="all">All</option>
                    <option value="4">4 per Page</option>
                    <option value="8">8 per Page</option>
                    <option value="12">12 per Page</option>
                  </select>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <div className="candidate-list">
        <Row>
          {quizgridDetails.map((quizgridDetailsNew, key) => (
            <Col lg={4} md={6} key={key}>
              <div
                className={
                  quizgridDetailsNew.addclassNameBookmark === true
                    ? "candidate-grid-box bookmark-post card mt-4"
                    : "candidate-grid-box card mt-4"
                }
              >
                <CardBody className="p-4">
                  <div className="d-flex mb-4">
                    <div className="flex-shrink-0 position-relative">
                      <img
                        src={quizgridDetailsNew.userImg}
                        alt=""
                        className="avatar-md rounded"
                      />
                    </div>
                    <div className="ms-3">
                      <Link to="/candidate-details" className="primary-link">
                        <h5 className="fs-17">{quizgridDetailsNew.quizName}</h5>
                      </Link>
                    </div>
                  </div>
                  <ul className="list-inline d-flex justify-content-between align-items-center">
                    <li className="list-inline-item text-warning fs-17">
                      <i className="mdi mdi-star"></i>
                      <i className="mdi mdi-star"></i>
                      <i className="mdi mdi-star"></i>
                      <i className="mdi mdi-star"></i>
                      <i className="mdi mdi-star-half-full"></i>
                    </li>
                    <li className="list-inline-item">
                      <div className="favorite-icon">
                        <Link to="#">
                          <i className="uil uil-heart-alt fs-18"></i>
                        </Link>
                      </div>
                    </li>
                  </ul>
                  <div className="border rounded mb-4">
                    <div className="row g-0">
                      <div className="border-end px-3 py-2">
                        <p className="text-muted mb-0">
                          Position: {quizgridDetailsNew.position}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted">
                    Some quick example text to build on the card title and bulk
                    the card's content Moltin gives you platform.
                  </p>
                  <div className="mt-3">
                    <Link
                      to="#hireNow"
                      onClick={() => openModal(quizgridDetailsNew)}
                      data-bs-toggle="modal"
                      className="btn btn-primary btn-hover w-100 mt-2"
                    >
                      Start
                    </Link>
                  </div>
                </CardBody>
              </div>
            </Col>
          ))}
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
                    Start Quiz
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
                  <h6>Yes/No Question Quizzes</h6>
                  <div>
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li>{quizModal.quizDescription}</li>
                    </ul>
                  </div>
                  <h6>Good Luck!</h6>
                </div>
                <Link
                  to="/startquiz"
                  className="btn btn-primary btn-hover w-100 mt-2"
                >
                  Start
                </Link>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuizGridDetails;
