import React, {Component,useState} from 'react';
import {useParams} from "react-router-dom";
import './contracts.css'

function UserInfo (data) {
    const {username ,id} = useParams();
    const [contacts] = useState(data);

    console.log()
        return (
            <div>
<div className="user__container ">
    <h1>Інормація про юзера</h1>
    <p className="username">ПІБ:{contacts.data[id].firstName } {contacts.data[id].lastName  }  </p>
    <p className="user-photo">Телефон: {contacts.data[id].phone }</p>
    <p className="user-gender">Стать: {contacts.data[id].gender }</p>
</div>
            </div>
        );

}

export default UserInfo;