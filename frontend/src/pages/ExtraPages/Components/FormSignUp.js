import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Input, Row } from "reactstrap";
import { Form } from "react-bootstrap";
import SignUpInput from "./SignUpInput";
import { inputs } from "../SubSection/Inputs";

function FormSignUp() {
  return (
    <Form action="/" className="auth-form">
      <Row>
        <Col lg={5}>
          <div className="mb-3">
            <label htmlFor="usernameInput" className="form-label">
              Username
            </label>
            <SignUpInput {...inputs[0]} />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email
            </label>
            <SignUpInput {...inputs[1]} />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">
              Password
            </label>
            <SignUpInput {...inputs[2]} />
          </div>
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div className="d-flex mt-2 justify-content-between">
              <div className="d-flex">
                <SignUpInput {...inputs[3]} />
                <label className="mt-1" for="femaleInput">
                  &nbsp; Female
                </label>
              </div>
              <div className="d-flex">
                <SignUpInput {...inputs[4]} />
                <label className="mt-1" for="maleInput">
                  &nbsp; Male
                </label>
              </div>
              <div className="d-flex">
                <SignUpInput {...inputs[5]} />
                <label className="mt-1" for="optionGenderInput">
                  &nbsp; Option
                </label>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={7}>
          <div className="mb-3 d-flex justify-content-between">
            <Row>
              <Col lg={6}>
                <label htmlFor="firstnameInput" className="form-label">
                  First Name
                </label>
                <SignUpInput {...inputs[6]} />
              </Col>
              <Col lg={6}>
                <label htmlFor="lastnameInput" className="form-label">
                  Last name
                </label>
                <SignUpInput {...inputs[7]} />
              </Col>
            </Row>
          </div>
          <div className="mb-3">
            <label htmlFor="dobInput" className="form-label">
              Birthday
            </label>
            <SignUpInput {...inputs[8]} />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneInput" className="form-label">
              Phone number
            </label>
            <SignUpInput {...inputs[9]} />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Address
            </label>
            <SignUpInput {...inputs[10]} />
          </div>
        </Col>
      </Row>
      <div className="mb-4 mt-4">
        <div className="form-check">
          <Input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            required
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            I agree to the{" "}
            <Link to="#" className="text-white text-decoration-underline">
              Terms and conditions
            </Link>
          </label>
        </div>
      </div>
      <div className="text-center w-100">
        <button type="submit" className="btn btn-white btn-hover w-25">
          Sign Up
        </button>
      </div>
    </Form>
  );
}

export default FormSignUp;
