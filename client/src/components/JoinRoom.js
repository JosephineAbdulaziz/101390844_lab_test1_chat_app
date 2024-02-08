import React, { useRef, useState } from "react";
import { useParams } from 'react-router-dom';

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
import io from "socket.io-client"
import Chat from "./Chat"
import immer from "immer"
const socket = io.connect("http://localhost:5000")


export default function JoinRoom() {

    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const refernce = useRef()

    const { username } = useParams();


    const [room, setRoom] = useState("")
    const joinRoom = () => {
        if (room !== ""){
            socket.emit("join room", room , username)
            console.log("user with the name" + username + "Joied " + room)
            window.location.replace(`/chat/${username}/${room}`, socket);


        }
        

    }




    const handleJoin = (e) => {

    }
    const handleTextChange = (e) => {
        setMessage(e.target.value)
    }
    const handleSend = (e) => {
        const messageOb = {
            from_user: username,
            room: e.room,
            messageText: e.message
        }
        refernce.current.emit("send chat", messageOb)
        setMessages(messageOb.messageText)
    }



    const handleClick = async (e, roomname) => {
        console.log('Item clicked!' + roomname);
        setRoom(roomname)
        await joinRoom()
    };


    return (

        <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }}>
            <MDBRow>
                <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
                    <h5 className="font-weight-bold mb-3 text-center text-lg-start">
                        Click on the group to join!
                    </h5>

                    <MDBCard>
                        <MDBCardBody>
                            <MDBTypography listUnStyled className="mb-0">
                                <li
                                    className="p-2 border-bottom"
                                >
                                    <a href="#" onClick={(e) => handleClick(e, "covid")} name="covid" className="text-decoration-none">
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
                                                <span className="badge bg-danger float-end"></span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li
                                    className="p-2 border-bottom"
                                >
                                    <a href="#"  onClick={(e) => handleClick(e, "sport")} className="text-decoration-none">
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
                                                <span className="badge bg-danger float-end"></span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li
                                    className="p-2 border-bottom"
                                >
                                    <a href="#"  onClick={(e) => handleClick(e, "food")} name="food" className="text-decoration-none">
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
                                                    {/* <button onClick={(e) => handleJoin(e, "food")}>Join</button>/ */}


                                                </div>
                                            </div>
                                            <div className="pt-1">
                                                <p className="small text-muted mb-1"></p>
                                                <span className="badge bg-danger float-end"></span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li
                                    className="p-2 border-bottom"

                                >
                                    <a href="#" onClick={(e) => handleClick(e, "planet")} name="planet" className="text-decoration-none">
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
                                                <span className="badge bg-danger float-end"></span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li
                                    className="p-2 border-bottom">
                                    <a href="#" onClick={(e) => handleClick(e, "computer")} name="computer" className="text-decoration-none">
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
                                                <span className="badge bg-danger float-end"></span>
                                            </div>
                                        </div>
                                    </a>
                                </li>





                            </MDBTypography>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

            
                    
                {/* <Chat  username={username} room={room} socket={socket} />; */}

            </MDBRow>
        </MDBContainer>
    );
}

