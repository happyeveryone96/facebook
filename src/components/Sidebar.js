import React from 'react';
import SidebarRow from "./SidebarRow";

import LoyaltyIcon from '@material-ui/icons/Loyalty';
import PeopleIcon from '@material-ui/icons/People';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import HistoryIcon from '@material-ui/icons/History';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FlagIcon from '@material-ui/icons/Flag';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <SidebarRow src="https://img.lovepik.com/element/45001/3052.png_860.png" title="Da-Eun" />
            <SidebarRow Icon={LoyaltyIcon} title="코로나19 정보센터" />
            <SidebarRow Icon={PeopleIcon} title="친구" />
            <SidebarRow Icon={GroupWorkIcon} title="그룹" />
            <SidebarRow Icon={LiveTvIcon} title="Watch" />
            <SidebarRow Icon={EventAvailableIcon} title="이벤트" />
            <SidebarRow Icon={HistoryIcon} title="과거의 오늘" />
            <SidebarRow Icon={BookmarkIcon} title="저장됨" />
            <SidebarRow Icon={FlagIcon} title="페이지" />
            <SidebarRow Icon={LocalMallIcon} title="채용 정보" />
            <SidebarRow Icon={ExpandMoreIcon} title="더보기" />
        </div>
    )
}

export default Sidebar
