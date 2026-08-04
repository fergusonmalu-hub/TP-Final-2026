import "./sidebarHeader.css";
import chatsIcon from "../../assets/icons/chats.svg";
import callsIcon from "../../assets/icons/calls.svg";
import statesIcon from "../../assets/icons/states.svg";
import channelsIcon from "../../assets/icons/channels.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import userImage from "../../assets/images/user.png";
import "../../styles/buttons.css";
import { useNavigate } from "react-router";

function SidebarHeader() {
    const navigate = useNavigate();

    return (
        <header className="sidebar-header">
        <nav className="sidebar-header-top">
            <button className="icon-btn"><img src={chatsIcon} alt="bubble chat icon" /></button>
            <button className="icon-btn"><img src={callsIcon} alt="phone call icon" /></button>
            <button className="icon-btn"><img src={statesIcon} alt="status icon" /></button>
            <button className="icon-btn"><img src={channelsIcon} alt="channels icon" /></button>
        </nav>
        <div className="sidebar-header-bottom">
            <button className="icon-btn"><img src={settingsIcon} alt="settings icon" /></button>
            <button className="profile-btn" onClick={() => navigate("/profile")}><img className="profile-pic" src={userImage} alt="user profile picture" /></button>
        </div>
        </header>
    );
}
export default SidebarHeader;       

/*NOTAS PROFE: 
Use navigate en vez de to= porque me permite ir hacia atrás en la navegación y no solo a una ruta específica. 
*/