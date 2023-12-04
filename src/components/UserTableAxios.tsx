import axios from "axios";
import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
};

// ADD NEW USER
function handleAdd() {
    const newUser = { id: 11, name: "Joe Bloggs" };
    axios.post('https://jsonplaceholder.typicode.com/users', newUser)
        .then((res) => {
            console.log(res);
        })
};

// UPDATE USER
function handleUpdate() {
    const updateUser = { id: 1, name: "Jane Bloggs" };
    axios.put(`https://jsonplaceholder.typicode.com/users/${updateUser.id}`, updateUser)
        .then((res) => {
            console.log(res);
        })
};

// DELETE USER
function handleDelete() {
    const deleteUser = { id: 1 };
    axios.delete(`https://jsonplaceholder.typicode.com/users/${deleteUser.id}`);
};

// FOR AXIOS
function UserTable() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                //print the name at the first position
                console.log(response.data);
                setUsers(response.data);
            })
            //catches errors
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <h1>Users</h1>
            <ul className="list-group">
                {users.map((user) => {
                    return (
                        <li key={user.id} className="list-group-item">
                            {user.name}
                        </li>
                    )

                })}
            </ul>
            <button onClick={handleAdd}>Add User</button>
            <button onClick={handleUpdate}>Update User</button>
            <button onClick={handleDelete}>Delete User</button>
        </>
    );
}
export default UserTable;