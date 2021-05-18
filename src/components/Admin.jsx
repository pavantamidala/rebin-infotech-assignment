import React, { useState } from 'react'
import AllUsers from './AllUsers'
import AddUsers from './AddUsers'
function Admin(props) {
    const[showAllUsers,setShowAllUsers] = useState(true)
    return (
        <div> 
            <br />
            <button onClick={(e)=>setShowAllUsers(false)}>Add User</button>
            
            <button onClick={()=> setShowAllUsers(true)}> All Users </button> <br /> <br />
            {showAllUsers?<AllUsers />:<AddUsers {...props} />}
        </div>
    )
}

export default Admin
