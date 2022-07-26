import React from 'react';
import './Sidebar.css';
import { LineStyle, Timeline, TrendingUp, PersonOutline, Storefront, AttachMoney, BarChart, MailOutline, ChatBubbleOutline, DynamicFeed, WorkOutlineOutlined, Error } from '@material-ui/icons';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <Link to='/' className='link'>
                            <li className='sidebarListItem'>
                                <LineStyle className='sidebarIcon' />
                                Home
                            </li>
                        </Link>
                        <li className='sidebarListItem'>
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <TrendingUp className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Quick Menu</h3>
                    <ul className='sidebarList'>
                        <Link to='/users' className='link'>
                            <li className='sidebarListItem'>
                                <PersonOutline className='sidebarIcon' />
                                Users
                            </li>
                        </Link>
                        <Link to='/products' className='link'>
                            <li className='sidebarListItem'>
                                <Storefront className='sidebarIcon' />
                                Products
                            </li>
                        </Link>
                        <li className='sidebarListItem'>
                            <AttachMoney className='sidebarIcon' />
                            Transactions
                        </li>
                        <li className='sidebarListItem'>
                            <BarChart className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Notifications</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <MailOutline className='sidebarIcon' />
                            Mail
                        </li>
                        <li className='sidebarListItem'>
                            <DynamicFeed className='sidebarIcon' />
                            Feedback
                        </li>
                        <li className='sidebarListItem'>
                            <ChatBubbleOutline className='sidebarIcon' />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Staff</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <WorkOutlineOutlined className='sidebarIcon' />
                            Manage
                        </li>
                        <li className='sidebarListItem'>
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <Error className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
