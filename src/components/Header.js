import React from "react";
import "./Header.css";
import f_logo from "../shared/f_logo.png";

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar, IconButton } from '@material-ui/core';

const Header = () => {
    return (
        <div className="header">
            <div className="header_left">
                <img
                    src={f_logo}
                    alt=""
                />
                <div className="header_input">
                    <SearchIcon />
                    <input type="text" placeholder="Facebook 검색" />
                </div>
            </div>
            <div className="header_center">
                <div className="header_option 
                header_option--active">
                    <HomeIcon fontsize="large" />
                </div>
                <div className="header_option">
                    <PeopleOutlineIcon fontsize="large" />
                </div>
                <div className="header_option">
                    <LiveTvIcon fontsize="large" />
                </div>
                <div className="header_option">
                    <SupervisedUserCircleIcon fontsize="large" />
                </div>
                <div className="header_option">
                    <SportsEsportsIcon fontsize="large" />
                </div>

            </div>
            <div className="header_right">
                <div className="header_info">
                    <Avatar />
                    <h4>Da-Eun Yeon</h4>
                </div>
                <IconButton style={{ marginLeft: "10px" }}>
                    <MoreHorizIcon />
                </IconButton>
                <IconButton>
                    <SmsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>

            </div>
        </div>
    )
}

export default Header
