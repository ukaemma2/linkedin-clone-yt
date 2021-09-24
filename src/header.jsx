import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import Notification from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import SuppervisorAcountIcon from '@material-ui/icons/Group';
import Logo from './assets/image/linkedin-icon-2.svg'
import HeaderOptions from './HeaderOptions.jsx'
import "./Header.css"
function header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src={Logo} alt="Logo" className="lin_img" />
                <div className="header_search">
                    <SearchIcon/>
                    <input type="text"/>
                </div>
            </div> 
            <div className="header_right">
                <HeaderOptions Icon={HomeIcon} title="Home"/>
                <HeaderOptions Icon={SuppervisorAcountIcon} title="My Network" />
                <HeaderOptions Icon={BusinessCenterIcon} title="Job"/>
                <HeaderOptions Icon={ChatIcon} title="Messaging"/>
                <HeaderOptions Icon={Notification} title="Notifications"/>
                <HeaderOptions avatar="https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg" title="me" />
            </div>
        </div>
    )
}
export default header
