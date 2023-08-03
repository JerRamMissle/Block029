
import React, { useState } from "react";

export default function PuppyRow({ setbool, contact }) {
    const [selectedContactId, setselectedContactId] = useState(null)

    return (
        //make an onclick method that will dropdown the contacts usernamme and website
        <>
            <tr onClick={(() => {
                setselectedContactId(!selectedContactId)
                setbool(contact.id)
            })}>
                <td>{contact.name}</td>
                <td>{contact.breed}</td>
                <td>{contact.cohortID}</td>
                <td>{contact.id}</td>
                <td>{contact.imageUrl}</td>
                <td>{contact.status}</td>
                <td>{contact.teamID}</td>
                <td>{contact.updatedAt}</td>

            </tr>

        </>
    );
}
