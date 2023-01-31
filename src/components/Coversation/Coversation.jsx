import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "../../config/axios";

const Conversation = ({ data, currentUser, online }) => {

    const [userData, setUserData] = useState(null)
    // const dispatch = useDispatch()
    // console.log("^^^^^^^^", data)
    // console.log("currentUser:", currentUser)


    useEffect(() => {

        const userId = data.members.find((id) => id !== currentUser)
        console.log("@@@@@", userId)

        const getUserData = async () => {
            try {
                const { data } = await axios.get(`/chatManagers/${userId}`)
                console.log(data, "!!!!!!!!!!!!!!!!!!!!")
                setUserData(data)
                // dispatch({ type: "SAVE_USER", data: data })
            }
            catch (error) {
                console.log(error)
            }
        }

        getUserData();
    }, [])
    return (
        <>
            <div className="follower conversation ">
                <div className="flex items-center">
                    {online && <div className="online-dot"></div>}
                    <img
                        src={userData?.profilePhoto ? userData.profilePhoto : "img-scelton.png"}
                        alt="Profile"
                        className="rounded-full"
                        style={{ width: "50px", height: "50px" }}
                    />
                    <div className="name flex flex-col ml-4" style={{ fontSize: '0.8rem' }}>
                        <span className="text-xl font-bold">{userData?.companyname}</span>
                        <span style={{ color: online ? "#51e200" : "" }}>{online ? "Online" : "Offline"}</span>
                    </div>
                </div>
            </div>
            <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
        </>
    );
};

export default Conversation;