import React from "react";
// import Logo from "../../img/logo.png";
import Logo from "../../../public/img-scelton.png"
import './LogoSearch.css'
import { UilSearch } from '@iconscout/react-unicons'
const LogoSearch = () => {
    return (
        <div className="LogoSearch self-center">
            <img width={50} src={Logo} alt="" />
            <div className="Search bg-white">
                <input className="bg-white" type="text" placeholder="#Explore" />
                <div className="s-icon">
                    <UilSearch />
                </div>
            </div>
        </div>
    );
};

export default LogoSearch;