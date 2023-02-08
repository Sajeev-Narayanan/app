import React, { useState } from "react";
// import Logo from "../../img/logo.png";
import Logo from "/img-scelton.png"
import './LogoSearch.css'
import { UilSearch } from '@iconscout/react-unicons'
const LogoSearch = () => {
    const [search, setSearch] = useState("");

    return (
        <div className="LogoSearch self-center">
            <img width={50} src={Logo} alt="" />
            <div className="Search bg-white">
                <input onChange={(e) => setSearch(e.target.value)} className="bg-white" value={search} type="text" placeholder="#Explore" />
                <div className="s-icon">
                    <UilSearch />
                </div>
            </div>
        </div>
    );
};

export default LogoSearch;