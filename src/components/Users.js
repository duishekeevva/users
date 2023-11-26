import {useState} from "react";
import './user.css'
import Picture from './Assets/5987462.png'

const Users = ({id, name, email, deleteUser, handleEditTodo, user, username, city, street}) => {
    const [edit, setEdit] = useState(false)
    const [editName, setEditName] = useState(user.name)
    const [editEmail, setEditEmail] = useState(user.email)
    const [editUsername, setEditUsername] = useState(user.username)
    const [editCity, setEditCity] = useState(user.city)
    const [editStreet, setEditStreet] = useState(user.street)


    const handleDelete = () => {
        deleteUser(id);
    }

    const handleEdit = () => {
        if (!edit) {
            setEdit(!edit)
        } else {
            const newData = {
                ...user,
                name: editName,
                email: editEmail,
                username: editUsername,
                city: editCity,
                street: editStreet
            }
            handleEditTodo(newData)
            setEdit(false)
        }
    }


    return (
        <div>
            <img src={Picture} alt=""/>
            <div className={'information'}>
                <div>
                    {edit ? <input className={'text'} style={{fontSize: '16px'}} defaultValue={user.name} type="text"
                                   onChange={(e => setEditName(e.target.value))}/>
                        : <h4 style={{padding: '5px 8px'}}>{user.name}</h4>}
                </div>
                <div>
                    <p className={'subtitle'}>Email: </p>
                    {edit ? <input className={'text'} style={{fontSize: '16px'}} defaultValue={user.email} type="text"
                                   onChange={(e => setEditEmail(e.target.value))}/>
                        : <p className={'text'}>{user.email}</p>}
                </div>
                <div>
                    <p className={'subtitle'}>Username: </p>
                    {edit ? <input className={'text'} style={{fontSize: '16px'}} defaultValue={user.username} type="text"
                                   onChange={(e => setEditUsername(e.target.value))}/>
                        :
                        <p className={'text'}>{user.username}
                        </p>}
                </div>
                <div>
                    <p className={'subtitle'}>City: </p>
                    {edit ? <input className={'text'} style={{fontSize: '16px'}} defaultValue={user.address.city} type="text"
                                   onChange={(e => setEditCity(e.target.value))}/>
                        :
                        <p className={'text'}>{user.address.city}
                        </p>}
                </div>
                <div>
                    <p className={'subtitle'}>Street: </p>
                    {edit ? <input className={'text'} style={{fontSize: '16px'}} defaultValue={user.address.street} type="text"
                                   onChange={(e => setEditStreet(e.target.value))}/>
                        : <p className={'text'}>{user.address.street}</p>}
                </div>
            </div>

            <div className={'btn'}>
                <button className={'btn-wrapper save-edit'} onClick={handleEdit}>{edit ? 'SAVE' : 'EDIT'}</button>
                <button className={'btn-wrapper delete'} onClick={handleDelete}>DELETE</button>
            </div>
        </div>)
}

export default Users;