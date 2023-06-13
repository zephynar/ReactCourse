import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBTypography,
} from "mdb-react-ui-kit";

const card{
    <MDBCard className="shadow-0 border">
              <MDBCardBody className="p-4">
                <MDBTypography tag="h4" className="mb-1 sfw-normal">New York, US</MDBTypography>
                <p className="mb-2">
                  Current temperature: <strong>5.42°C</strong>
                </p>
                <p>
                  Feels like: <strong>4.37°C</strong>
                </p>
                <p>
                  Max: <strong>6.11°C</strong>, Min: <strong>3.89°C</strong>
                </p>

                <div className="d-flex flex-row align-items-center">
                  <p className="mb-0 me-4">Scattered Clouds</p>
                  <MDBIcon fas icon="cloud" size="3x" style={{color: '#eee'}} />
                </div>
              </MDBCardBody>
            </MDBCard>
            }