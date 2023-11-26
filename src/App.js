import {useEffect, useState} from "react";
import axios from "axios";
import Users from "./components/Users";
import Header from "./components/Header";



const App = () => {

    const [users, setUser] = useState([])
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(({data}) => setUser(data))
    }, []);

    const deleteUser = (id) => {
        setUser(users.filter(user => user.id !== id))
    }

    const handleEditTodo=(data)=> {
        setUser(users.map(user=>user.id===data.id?data:user))
    }

    return (
        <div>
            <Header/>
            <div className={'title'}>
                <h1 style={{textAlign:'center'}}>USERS</h1>
            </div>
         <div className={'container'}>
             <div className={'row'}>
                 {
                     users.map((user) =>
                         <div className={'col-4'}>
                             <div className={'box'}>
                                 <Users id={user.id}
                                        key={user.id}
                                        name={user.name}
                                        email={user.email}
                                        username={user.username}
                                        city={user.address.city}
                                        street={user.address.street}
                                        user={user}
                                        deleteUser={() => deleteUser(user.id)}
                                        handleEditTodo={handleEditTodo}
                                 />
                             </div>
                         </div>

                     )
                 }
             </div>
         </div>

        </div>
    )
}

export default App;