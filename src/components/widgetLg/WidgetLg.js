import React from 'react';
import './WidgetLg.css';
import user3 from '../../assets/img/users/user3.jpg';
import user5 from '../../assets/img/users/user5.jpg';
import user2 from '../../assets/img/users/user2.jpg';
import user1 from '../../assets/img/users/user1.jpg';

function WidgetLg() {
    // Creating a  component Button that return a button on the basis of it's type, i.e, Approved, Pendind..
    const Button = ({ type }) => {
        return <button className={'widgetLgButton ' + type}>{type}</button>
    }

    return (
        <div className='widgetLg'>
            <span className='widgetLgTitle'>Latest Transactions</span>
            <table className='widgetLgTable'>
                <tr className='widgetLgTr'>
                    <th className='widgetLgTh'>Customer</th>
                    <th className='widgetLgTh'>Date</th>
                    <th className='widgetLgTh'>Amount</th>
                    <th className='widgetLgTh'>Status</th>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img
                            className='widgetLgImg'
                            src={user1}
                            alt=''
                        />
                        <span className='widgetLgName'>Colleen Hoover</span>
                    </td>
                    <td className='widgetLgDate'>7 Jun 2021</td>
                    <td className='widgetLgAmount'>$133.00</td>
                    <td className='widgetLgStatus'>
                        <Button type='Approved' />
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img
                            className='widgetLgImg'
                            src={user5}
                            alt=''
                        />
                        <span className='widgetLgName'>Elizabeth Colins</span>
                    </td>
                    <td className='widgetLgDate'>7 Jun 2021</td>
                    <td className='widgetLgAmount'>$133.00</td>
                    <td className='widgetLgStatus'>
                        <Button type='Declined' />
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img
                            className='widgetLgImg'
                            src={user3}
                            alt=''
                        />
                        <span className='widgetLgName'>Caroline Carpenter</span>
                    </td>
                    <td className='widgetLgDate'>7 Jun 2021</td>
                    <td className='widgetLgAmount'>$133.00</td>
                    <td className='widgetLgStatus'>
                        <Button type='Pending' />
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img
                            className='widgetLgImg'
                            src={user2}
                            alt=''
                        />
                        <span className='widgetLgName'>Madoc Caruthers</span>
                    </td>
                    <td className='widgetLgDate'>7 Jun 2021</td>
                    <td className='widgetLgAmount'>$133.00</td>
                    <td className='widgetLgStatus'>
                        <Button type='Declined' />
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img
                            className='widgetLgImg'
                            src={user5}
                            alt=''
                        />
                        <span className='widgetLgName'>Susan Carol</span>
                    </td>
                    <td className='widgetLgDate'>7 Jun 2021</td>
                    <td className='widgetLgAmount'>$133.00</td>
                    <td className='widgetLgStatus'>
                        <Button type='Approved' />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg;
