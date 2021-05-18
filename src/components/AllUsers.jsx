import React from 'react'

function AllUsers() {
    
    let localStorageAllUsers = JSON.parse(localStorage.getItem("allUserArray")) 
    return (
        <div className="table-div">
            <h1>All Users</h1>
            
            {localStorageAllUsers&& <table>
                <tr>
                    <th> Name </th>
                    <th> Email </th>
                    <th> Phone </th>
                    <th> Address </th>
                </tr>
                {localStorageAllUsers.map((obj)=>{
                       return <tr key={obj.id}>
                           <td> {obj.name} </td>
                           <td> {obj.email} </td>
                           <td> {obj.phone} </td>
                           <td> {obj.address} </td>
                       </tr>
                })}
                
                </table>}
        </div>
    )
}

export default AllUsers
