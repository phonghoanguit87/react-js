import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

function User() {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    const deleteUser = (id) => {
        console.log(id);
        dispatch({type: "DELETE_USER", payload: {"id": id}});
    };
    
    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td><a href={user.website}>{user.website}</a></td>
                        <td>
                            <button
                                type="button"
                                onClick={(e) => {
                                    deleteUser(user.id);
                                }}
                                className="btn btn-primary"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
export default User;