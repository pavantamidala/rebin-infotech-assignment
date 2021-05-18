import AllUsers from './components/AllUsers'
import React, { useState } from 'react';
import AddUsers from './components/AddUsers'
import Admin from './components/Admin'
import './App.css';

function App() {
  const [normalUser,setNormalUser] = useState(true)
  const [allUsers,setAllUsers] = useState([])
  function clickHandle(e){
    e.target.value ==="admin"?setNormalUser(false):setNormalUser(true)
  }
  return (
    <div className="App">
      <select onChange={clickHandle} name="usertype" id="usertype">
        <option  value="normal">Normal</option>
        <option value="admin">Admin</option>
      </select>
      {/* <AddUsers allUsers={allUsers} setAllUsers={setAllUsers} /> */}
    {normalUser ? <AllUsers />:<Admin allUsers={allUsers} setAllUsers={setAllUsers} />}
    </div>
  );
}

export default App;
