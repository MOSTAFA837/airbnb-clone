import React from 'react'
import '../style/Header.css'
import logo from '../assets/airbnb-logo.jpeg'
import SearchIcon from "@material-ui/icons/Search"
import LanguageIcon from "@material-ui/icons/Language"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import {Avatar} from "@material-ui/core"
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <nav className='header'>
            <Link to='/'>
                <img src={logo} alt="logo" className='header_icon' />
            </Link>

            <div className="header_center">
                <input type="text" />
                {/* <AiOutlineSearch/> */}
                <SearchIcon/>
            </div>

            <div className="header_right">
                <p className='head-title'>Become a host</p>
                {/* <BsGlobe2/>
                <MdOutlineExpandMore/>
                <FiUsers/> */}
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar/>
            </div>
        </nav>
    )
}

export default Header
