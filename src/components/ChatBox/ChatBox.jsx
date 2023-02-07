import React, { useEffect, useState } from "react";
import { useRef } from "react";
// import { addMessage, getMessages } from "../../api/MessageRequests";
// import { getUser } from "../../api/UserRequests";
import "./ChatBox.css";
import { format } from "timeago.js";
import InputEmoji from 'react-input-emoji'
import axios from "../../config/axios";
import instance from "../../config/instance";
import userAxios from "../../config/userAxios";
import managerAxios from "../../config/managerAxios";

const ChatBox = ({ chat, currentUser, setSendMessage, receivedMessage, type, addEstimate, showEstimate, setReceiver }) => {
    const [userData, setUserData] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    const handleChange = (newMessage) => {
        setNewMessage(newMessage)
    }
    setReceiver(chat?.members.find((id) => id !== currentUser))

    // fetching data for header
    useEffect(() => {
        const user = chat?.members?.find((id) => id !== currentUser);
        const getUserData = async () => {
            if (type == "manager") {
                try {
                    const { data } = await managerAxios.get(`/provider/chatUsers/${user}`);
                    setUserData(data);
                } catch (error) {
                    alert("No chat are available")
                }
            } else {
                try {
                    const { data } = await userAxios.get(`/chatManagers/${user}`);
                    setUserData(data);
                } catch (error) {
                    alert("No chat are available")
                }
            }
        };

        if (chat !== null) getUserData();
    }, [chat, currentUser]);

    // fetch messages
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const { data } = await userAxios.get(`/message/${chat._id}`);
                setMessages(data);
            } catch (error) {
            }
        };

        if (chat !== null) fetchMessages();
    }, [chat]);


    // Always scroll to last Message
    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages])



    // Send Message
    const handleSend = async (e) => {
        e.preventDefault()
        const message = {
            senderId: currentUser,
            text: newMessage,
            chatId: chat._id,
        }
        const receiverId = chat.members.find((id) => id !== currentUser);
        // send message to socket server
        setSendMessage({ ...message, receiverId })
        // send message to database
        try {
            const { data } = await userAxios.post('/message/', message);
            setMessages([...messages, data]);
            setNewMessage("");
        }
        catch
        {
            alert("SOMETHING WRONG!!!!!!!!!!!!!")
        }
    }

    // Receive Message from parent component
    useEffect(() => {
        if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
            setMessages([...messages, receivedMessage]);
        }

    }, [receivedMessage])



    const scroll = useRef();
    const imageRef = useRef();
    return (
        <>
            <div className="ChatBox-container bg-white">
                {chat ? (
                    <>
                        {/* chat-header */}
                        <div className="chat-header">
                            <div className="follower">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img
                                            src={

                                                userData?.profilePhoto ? userData.profilePhoto : "img-scelton.png"
                                            }
                                            alt="Profile"
                                            className="rounded-full "

                                            style={{ width: "50px", height: "50px" }}
                                        />
                                        <div className="name ml-6" style={{ fontSize: "0.9rem" }}>
                                            <span className="text-2xl font-extrabold">
                                                {userData?.companyname ? userData?.companyname : userData?.email}
                                            </span>
                                        </div>
                                    </div>
                                    {type === "manager" ? <button onClick={() => addEstimate(true)} className="bg-black p-2 rounded-xl text-white font-semibold hover:scale-105 mr-20">Create Estimate</button> : <button onClick={() => showEstimate(true)} className="bg-black p-2 rounded-xl text-white font-semibold hover:scale-105 mr-20">Estimate</button>}
                                </div>
                            </div>
                            <hr
                                style={{
                                    width: "95%",
                                    border: "0.1px solid #ececec",
                                    marginTop: "20px",
                                }}
                            />
                        </div>
                        {/* chat-body */}
                        <div className="chat-body no-scrollbar" >
                            {messages.map((message) => (
                                <>
                                    <div ref={scroll}
                                        className={
                                            message.senderId === currentUser
                                                ? "message own"
                                                : "message"
                                        }
                                    >
                                        <span>{message.text}</span>{" "}
                                        <span>{format(message.createdAt)}</span>
                                    </div>
                                </>
                            ))}
                        </div>
                        {/* chat-sender */}
                        <div className="chat-sender">
                            {/* <div onClick={() => imageRef.current.click()}>+</div> */}
                            <InputEmoji
                                value={newMessage}
                                onChange={handleChange}

                            />
                            <button className="cursor-pointer border-2 border-black rounded-md w-28 h-10 bg-green-400" onClick={handleSend}>Send</button>
                            {/* <input
                                type="file"
                                name=""
                                id=""
                                style={{ display: "none" }}
                                ref={imageRef}
                            /> */}
                        </div>{" "}
                    </>
                ) : (
                    <span className="chatbox-empty-message">
                        Tap on a chat to start conversation...
                    </span>
                )}
            </div>
        </>
    );
};

export default ChatBox;