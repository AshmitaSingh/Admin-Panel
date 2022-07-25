import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../DummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className='userListItem'>
                        <img className='userListImg' src={params.row.avatar} alt='' />
                        <span>{params.row.username}</span>
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 160,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 200,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/user/${params.row.id}`}>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline
                            className='userListDelete'
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                )
            }
        }
    ];

    return (
        <div className='userList'>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                checkboxSelection
            />
        </div>
    )
}

export default UserList;
