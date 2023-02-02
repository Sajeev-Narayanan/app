import React, { useRef, useState } from "react";

import "./ManagerChat.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from '../../../config/axios'
import { io } from "socket.io-client";
import { managersId } from "../../../features/managersAuthSlice";
import LogoSearch from "../../../components/LogoSearch/LogoSearch";
import Conversation from "../../../components/Coversation/Coversation";
import ChatBox from "../../../components/ChatBox/ChatBox";
import Navebar from "../../../components/providerComponents/Navbar";
import CreateEstimateModal from "../../../components/ChatBox/CreateEstimateModal";

const ManagerChat = () => {
    const dispatch = useDispatch();
    const socket = useRef();
    // const { user } = useSelector((state) => state.authReducer.authData);
    const userId = useSelector(managersId)

    const [chats, setChats] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [sendMessage, setSendMessage] = useState(null);
    const [addEstimate, setAddEstimate] = useState(false);
    const [receivedMessage, setReceivedMessage] = useState(null);
    const [receiver, setReceiver] = useState("");

    const addEstimateClose = () => setAddEstimate(false);
    // Get the chat in chat section
    useEffect(() => {
        const getChats = async () => {
            try {
                const { data } = await axios.get(`/chat/${userId}`);
                setChats(data);
                console.log("$$$$$$$$", data)
            } catch (error) {
                console.log(error, "sanju");
            }
        };
        getChats();
    }, [userId]);

    // Connect to Socket.io
    useEffect(() => {
        socket.current = io("http://localhost:8800");
        socket.current.emit("new-user-add", userId);
        socket.current.on("get-users", (users) => {
            setOnlineUsers(users);
        });
    }, [userId]);

    // Send Message to socket server
    useEffect(() => {
        if (sendMessage !== null) {
            socket.current.emit("send-message", sendMessage);
        }
    }, [sendMessage]);


    // Get the message from socket server
    useEffect(() => {
        socket.current.on("recieve-message", (data) => {
            console.log(data, "socket data kitttteeeeee")
            setReceivedMessage(data);
        }

        );
    }, []);

    const checkOnlineStatus = (chat) => {
        const chatMember = chat.members.find((member) => member !== userId);
        const online = onlineUsers.find((user) => user.userId === chatMember);
        return online ? true : false;
    };

    return (
        <>
            <Navebar />
            <div className="Chat p-5">
                {/* Left Side */}
                <div className="Left-side-chat">
                    {/* <LogoSearch /> */}
                    <div className="Chat-container bg-white no-scrollbar ">
                        <h2 className="font-extrabold text-4xl text-center font-Volkhov">Chats</h2>
                        <div className="Chat-list">
                            {chats.map((chat, i) => (
                                <div
                                    onClick={() => {
                                        setCurrentChat(chat);
                                    }}
                                >
                                    <Conversation
                                        key={i}
                                        data={chat}
                                        currentUser={userId}
                                        online={checkOnlineStatus(chat)}
                                        type="manager"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side */}

                <div className="Right-side-chat ">
                    {/* <div style={{ width: "20rem", alignSelf: "flex-end" }}>
                    <NavIcons />
                </div> */}
                    <ChatBox
                        chat={currentChat}
                        currentUser={userId}
                        setSendMessage={setSendMessage}
                        receivedMessage={receivedMessage}
                        type="manager"
                        addEstimate={setAddEstimate}
                        setReceiver={setReceiver}
                    />
                </div>
            </div>
            <CreateEstimateModal onClose={addEstimateClose} visible={addEstimate} userId={receiver} managerId={userId} />
        </>
    );
};

export default ManagerChat;