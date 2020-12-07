
import React from 'react'
import "../sidebar/Sidebar.css";
import SidebarRow from '../SidebarRow/SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import {useStateValue} from '../../StateProvider';




const Sidebar = () => {
    const [{user}, dispatch] = useStateValue();



    return (
        <div className="sidebar">
             <SidebarRow src={user.photoURL}
                 title={user.displayName}
             />
             <SidebarRow Icon={LocalHospitalIcon}
                 title="COVID-19 information Center"
             />

            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/> 
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreIcon} title="Marketplace"/>
        </div>
    )
}

export default Sidebar
