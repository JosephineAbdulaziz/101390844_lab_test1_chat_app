import React, { useEffect, useRef, useState } from "react";
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
import axios from 'axios';

const socket = io.connect("http://localhost:5000")


export default function Chat() {

    const [currMessage, setCurrMessage] = useState("")
    const [chat, setChat] = useState('')

    const getChat = () => {
        axios.get(`http://localhost:5000/message/${room}`)
          .then((response) => {
            console.log('Response:', response.data);  
            setChat(response.data)      
          })
          .catch((error) => {
            console.error('Error:', error);
            
          });        
      };
  

    const { username, room} = useParams();


    const handleTextChange = (e) => {
        setCurrMessage(e.target.value)
    }
    const handleSend = async (e) => {
        if (currMessage !== ""){
            const messageData = {
                room: room,
                message: currMessage,
                from: username
            }
            await socket.emit('send message', messageData)


        }
        
    }

    useEffect( () => {
        getChat()
    socket.on("recieve message", (data)=>{
        console.log(data)
            

        })
    }, [socket])



    return (

        <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }}>
            <MDBRow>
                <MDBCol md="6" lg="7" xl="8">
                    <MDBTypography listUnStyled>
                      

                        <div>
            <h2>Chat Messages</h2>
            {chat !== "" && (
    <ul>
        {chat.map((message, index) => (
            <li key={index}>
                <strong>{message.from}: </strong> {message.message}
            </li>
        ))}
    </ul>
)}
        </div>

                        <li className="bg-white mb-3">
                            <MDBTextArea
                                label="Message"
                                id="textAreaExample"
                                rows={4}
                                value={currMessage} 
                                onChange={handleTextChange} 
                            />            </li>
                        <MDBBtn color="info" rounded className="float-end" onClick={handleSend}>
                            Send
                        </MDBBtn>
                    </MDBTypography>
                </MDBCol>

            </MDBRow>
        </MDBContainer>
    );
}

