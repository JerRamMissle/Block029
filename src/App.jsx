import { useState } from 'react'

import './App.css'
import PuppyList from './components/puppylist';
import SelectedContact from './components/SelectedContact';


const selectedContactId = null
const setSelectedContactId = null
export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
      {/* {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
      ) : (
        <PuppyList setSelectedContactId={setSelectedContactId} />
      )} }*/
      }<PuppyList />
    </>
  );
}

