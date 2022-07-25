import React from 'react';
import './NewUser.css';

function NewUser() {
    return (
        <div className='newUser'>
            <h1 className='newUserTitle'>New User</h1>
            <form className='newUserForm'>
                <div className='newUserItem'>
                    <label>Username</label>
                    <input type='text' placeholder='sasha' />
                </div>
                <div className='newUserItem'>
                    <label>Full Name</label>
                    <input type='text' placeholder='Sasha Slogan' />
                </div>
                <div className='newUserItem'>
                    <label>Email</label>
                    <input type='email' placeholder='sasha333@gmail.com' />
                </div>
                <div className='newUserItem'>
                    <label>Password</label>
                    <input type='password' placeholder='password' />
                </div>
                <div className='newUserItem'>
                    <label>Phone</label>
                    <input type='text' placeholder='+1 123 456 78' />
                </div>
                <div className='newUserItem'>
                    <label>Address</label>
                    <input type='text' placeholder='Calgary | Canada' />
                </div>
                <div className='newUserItem'>
                    <label>Gender</label>
                    <div className='newUserGender'>
                        <input type='radio' id='male' value='male' name='gender' />
                        <label htmlFor='male'>Male</label>
                        <input type='radio' id='female' value='female' name='gender' />
                        <label htmlFor='female'>Female</label>
                        <input type='radio' id='other' value='other' name='gender' />
                        <label htmlFor='other'>Other</label>
                    </div>
                </div>
                <div className='newUserItem'>
                    <label>Active</label>
                    <select className='newUserSelect' id='active' name='active'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <button className='newUserButton'>Create</button>
            </form>
        </div>
    )
}

export default NewUser;
