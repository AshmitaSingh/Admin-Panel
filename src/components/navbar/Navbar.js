import React from 'react';
import './Navbar.css';
import user3 from '../../assets/img/users/user3.jpg';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbarWrapper'>
                <div className='navLeft'>
                    <span className='logo'>Admin Control Panel</span>
                </div>
                <div className='navRight'>
                    <div className='navbarIconContainer'>
                        <NotificationsNone />
                        <span className='navIconBadge'>2</span>
                    </div>
                    <div className='navbarIconContainer'>
                        <Language />
                        <span className='navIconBadge'>2</span>
                    </div>
                    <div className='navbarIconContainer'>
                        <Settings />
                    </div>
                    <img
                        src={user3}
                        alt='profile'
                        className='navAvatar'
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
