import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './User.css';

function User() {
    return (
        <div className='user'>
            <div className='userTitleContainer'>
                <h1 className='userTitle'>Edit User</h1>
                <Link to='/newUser'>
                    <button className='userAddButton'>Create</button>
                </Link>
            </div>
            <div className='userContainer'>
                <div className='userDisplay'>
                    <div className='userDisplayTop'>
                        <img
                            className='userDisplayImg'
                            src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                            alt=''
                        />
                        <div className='userDisplayTopTitle'>
                            <span className='userDisplayUsername'>Anna Becker</span>
                            <span className='userDisplayUserTitle'>Web Developer</span>
                        </div>
                    </div>
                    <div className='userDisplayBottom'>
                        <span className='userDisplayTitle'>Account Details</span>
                        <div className='userDisplayInfo'>
                            <PermIdentity className='userDisplayIcon' />
                            <span className='userDisplayInfoTitle'>annabeck33</span>
                        </div>
                        <div className='userDisplayInfo'>
                            <CalendarToday className='userDisplayIcon' />
                            <span className='userDisplayInfoTitle'>29.10.1998</span>
                        </div>
                        <span className='userDisplayTitle'>Contact Details</span>
                        <div className='userDisplayInfo'>
                            <PhoneAndroid className='userDisplayIcon' />
                            <span className='userDisplayInfoTitle'>+1 123 456 67</span>
                        </div>
                        <div className='userDisplayInfo'>
                            <MailOutline className='userDisplayIcon' />
                            <span className='userDisplayInfoTitle'>annabeck33@gmail.com</span>
                        </div>
                        <div className='userDisplayInfo'>
                            <LocationSearching className='userDisplayIcon' />
                            <span className='userDisplayInfoTitle'>New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className='userUpdate'>
                    <span className='userUpdateTitle'>Edit</span>
                    <form className='userUpdateForm'>
                        <div className='userUpdateLeft'>
                            <div className='userUpdateItem'>
                                <label>Username</label>
                                <input type='text' placeholder='annabeck33' className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Full Name</label>
                                <input type='text' placeholder='Anna Becker' className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Email</label>
                                <input type='text' placeholder='annabeck33@gmail.com' className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Phone</label>
                                <input type='text' placeholder='+1 123 456 67' className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Address</label>
                                <input type='text' placeholder='New York | USA' className='userUpdateInput' />
                            </div>
                        </div>
                        <div className='userUpdateRight'>
                            <div className='userUpdateUpload'>
                                <img
                                    src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                                    alt=''
                                    className='userUpdateImage'
                                />
                                <label htmlFor='file'>
                                    <Publish className='userUpdateIcon' />
                                </label>
                                <input type='file' id='file' style={{ display: 'none' }} />
                            </div>
                            <button className='userUpdateButton'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User;
