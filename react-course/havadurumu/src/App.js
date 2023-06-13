import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInputGroup,
  MDBRadio,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function WeatherApp() {
  return (
    <section className="vh-100">
      <MDBContainer className="h-100 py-5">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="8" lg="6" xl="4">
            <MDBTypography tag="h3" className="mb-4 pb-2 fw-normal">
              Check the weather forecast
            </MDBTypography>

            <MDBInputGroup className="mb-3">
              <input
                className="form-control rounded"
                type="text"
                placeholder="City"
              />
              <a href="#!" type="button">
                <span
                  className="input-group-text border-0 fw-bold"
                  id="search-addon"
                >
                  Check!
                </span>
              </a>
            </MDBInputGroup>

            <div className="mb-4 p-2">
              <MDBRadio
                inline
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="Celcius"
                defaultChecked
              />
              <MDBRadio
                inline
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="Farenheit"
              />
            </div>

            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}