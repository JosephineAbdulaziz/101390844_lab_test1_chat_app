import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBTypography,
  MDBTextArea,
  MDBCardHeader,
} from "mdb-react-ui-kit";

export default function JoinRoom() {

    const handleJoin = (e) => {

    }




  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }}>
      <MDBRow>
        <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
          <h5 className="font-weight-bold mb-3 text-center text-lg-start">
            Groups
          </h5>

          <MDBCard>
            <MDBCardBody>
              <MDBTypography listUnStyled className="mb-0">
                <li
                  className="p-2 border-bottom"
                >
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                    <img
                        src="https://cdn.who.int/media/images/default-source/mca/mca-covid-19/coronavirus-2.tmb-1366v.jpg?sfvrsn=4dba955c_18%201366w"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0">Covid 19</p>
                        <p className="fw-bold mb-0"> <br></br></p>

                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-muted mb-1"></p>
                      <button onClick={handleJoin}>Join</button>
                      <span className="badge bg-danger float-end"></span>
                    </div>
                  </div>
                </li>
                <li
                  className="p-2 border-bottom"
                >
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                    <img
                        src="https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0">Sport</p>
                        <p className="fw-bold mb-0"> <br></br></p>

                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-muted mb-1"></p>
                      <button>Join</button>
                      <span className="badge bg-danger float-end"></span>
                    </div>
                  </div>
                </li>
                <li
                  className="p-2 border-bottom"
                >
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0">Food</p>
                        <p className="fw-bold mb-0"> <br></br></p>

                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-muted mb-1"></p>
                      <button>Join</button>
                      <span className="badge bg-danger float-end"></span>
                    </div>
                  </div>
                </li>
                <li
                  className="p-2 border-bottom"
                 
                >
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                    <img
                        src="https://astrobackyard.com/wp-content/uploads/2023/10/planets-in-order.jpg"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0">Planets</p>
                        <p className="fw-bold mb-0"> <br></br></p>

                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-muted mb-1"></p>
                      <button>Join</button>
                      <span className="badge bg-danger float-end"></span>
                    </div>
                  </div>
                </li>
                <li
                  className="p-2 border-bottom">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Desktop.jpg"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0">Computers</p>
                        <p className="fw-bold mb-0"> <br></br></p>

                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-muted mb-1"></p>
                      <button>Join</button>
                      <span className="badge bg-danger float-end"></span>
                    </div>
                  </div>
                </li>
                



                
              </MDBTypography>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
    



        <MDBCol md="6" lg="7" xl="8">
          <MDBTypography listUnStyled>
            <li className="d-flex justify-content-between mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                width="60"
              />
              <MDBCard>
                <MDBCardHeader className="d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">Brad Pitt</p>
                  <p className="text-muted small mb-0">
                    <MDBIcon far icon="clock" /> 12 mins ago
                  </p>
                </MDBCardHeader>
                <MDBCardBody>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </MDBCardBody>
              </MDBCard>
            </li>
            <li class="d-flex justify-content-between mb-4">
              <MDBCard className="w-100">
                <MDBCardHeader className="d-flex justify-content-between p-3">
                  <p class="fw-bold mb-0">Lara Croft</p>
                  <p class="text-muted small mb-0">
                    <MDBIcon far icon="clock" /> 13 mins ago
                  </p>
                </MDBCardHeader>
                <MDBCardBody>
                  <p className="mb-0">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </MDBCardBody>
              </MDBCard>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                width="60"
              />
            </li>
            <li className="d-flex justify-content-between mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                width="60"
              />
              <MDBCard>
                <MDBCardHeader className="d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">Brad Pitt</p>
                  <p className="text-muted small mb-0">
                    <MDBIcon far icon="clock" /> 10 mins ago
                  </p>
                </MDBCardHeader>
                <MDBCardBody>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </MDBCardBody>
              </MDBCard>
            </li>
            <li className="bg-white mb-3">
              <MDBTextArea label="Message" id="textAreaExample" rows={4} />
            </li>
            <MDBBtn color="info" rounded className="float-end">
              Send
            </MDBBtn>
          </MDBTypography>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}