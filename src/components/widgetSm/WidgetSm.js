import { Visibility } from '@material-ui/icons';
import React from 'react';
import './WidgetSm.css';
import user4 from '../../assets/img/users/user4.jpg';
import user5 from '../../assets/img/users/user5.jpg';
import user6 from '../../assets/img/users/user6.jpg';

function WidgetSm() {
    return (
        <div className='widgetSm'>
            <span className='widgetSmTitle'>
                New Joined Members
            </span>
            <ul className='widgetSmList'>
                <li className='widgetSmListItem'>
                    <img
                        className='widgetSmImg'
                        src= {user4}
                        alt='WidgetSmallImage'
                    />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Jaxon Brent</span>
                        <span className='widgetSmUserTitle'>Web Developer</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className='widgetSmListItem'>
                    <img
                        className='widgetSmImg'
                        src={user5}
                        alt='WidgetSmallImage'
                    />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Samantha Lawrence</span>
                        <span className='widgetSmUserTitle'>Product Manager</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className='widgetSmListItem'>
                    <img
                        className='widgetSmImg'
                        src={user6}
                        alt='WidgetSmallImage'
                    />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Robert Smith</span>
                        <span className='widgetSmUserTitle'>Web Developer</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className='widgetSmListItem'>
                    <img
                        className='widgetSmImg'
                        src={user4}
                        alt='WidgetSmallImage'
                    />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Nate Dietrich</span>
                        <span className='widgetSmUserTitle'>Android Developer</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className='widgetSmListItem'>
                    <img
                        className='widgetSmImg'
                        src={user5}
                        alt='WidgetSmallImage'
                    />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Hope Mickelson</span>
                        <span className='widgetSmUserTitle'>Full Stack Developer</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm;
