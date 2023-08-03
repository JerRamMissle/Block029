import React, { useEffect, useState } from "react";
import PuppyRow from "./PuppyRow";



export default function PuppyList({ setSelectedContactId }) {
    const dummyContacts = [
    ];
    const [contacts, setContacts] = useState([])
    console.log("Contacts: ", contacts)
    const [boo, setBoo] = useState('0')

    useEffect(() => {
        async function fetchContacts() {
            try {
                const response = await fetch(
                    'https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-A/players'
                );
                const { data } = await response.json();
                console.log(data.players);
                setContacts(data.players)
            } catch (err) {
                console.error(err);
            }
        }
        fetchContacts()
    }, []);
    return (

        <>
            <input type='text' onChange={e => setBoo(e.target.value)} />
            {
                boo
            }
            <table>
                <thead>
                    <tr>
                        <th colSpan="3">Contact List</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                    </tr>


                    {
                        contacts.map((contact) => {
                            return <PuppyRow key={contact.id} contact={contact} setbool={setSelectedContactId} />;
                        })
                    }
                </tbody>
            </table>
        </>
    );
}